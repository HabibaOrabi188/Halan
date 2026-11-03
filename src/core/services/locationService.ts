
import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import Geolocation, {
  GeolocationResponse,
  GeolocationError,
} from '@react-native-community/geolocation';

// ============================================
// Types
// ============================================

export interface LocationCoordinates {
  latitude: number;
  longitude: number;
  accuracy?: number;
}

export interface UserLocationResult {
  coords: LocationCoordinates;
  address: string;
}

interface NominatimAddress {
  road?: string;
  pedestrian?: string;
  neighbourhood?: string;
  quarter?: string;
  suburb?: string;
  residential?: string;
  city_district?: string;
  city?: string;
  town?: string;
  village?: string;
  municipality?: string;
  state?: string;
  governorate?: string;
}

interface NominatimResponse {
  display_name?: string;
  address?: NominatimAddress;
}

// ============================================
// Constants
// ============================================

const LOCATION_TIMEOUT = 20000;
const FALLBACK_TIMEOUT = 20000;
const MAX_ACCEPTABLE_ACCURACY = 100;

const NOMINATIM_URL =
  'https://nominatim.openstreetmap.org/reverse';

// ============================================
// Location Service
// ============================================

class LocationService {
  private isConfigured = false;

  // ==========================================
  // Configuration
  // ==========================================

  private ensureConfigured(): void {
    if (this.isConfigured) {
      return;
    }

    try {
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
        locationProvider: 'auto',
      });

      this.isConfigured = true;
    } catch (error) {
      console.warn(
        'Geolocation configuration error:',
        error,
      );
    }
  }

  // ==========================================
  // Permissions
  // ==========================================

  async requestPermission(): Promise<boolean> {
    if (Platform.OS === 'ios') {
      return new Promise(resolve => {
        try {
          Geolocation.requestAuthorization(
            () => resolve(true),
            error => {
              console.warn(
                'iOS location permission error:',
                error,
              );

              resolve(false);
            },
          );
        } catch (error) {
          console.warn(
            'iOS permission request error:',
            error,
          );

          resolve(false);
        }
      });
    }

    if (Platform.OS === 'android') {
      try {
        const granted =
          await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          ]);

        const fineGranted =
          granted[
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          ] === PermissionsAndroid.RESULTS.GRANTED;

        const coarseGranted =
          granted[
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
          ] === PermissionsAndroid.RESULTS.GRANTED;

        return fineGranted || coarseGranted;
      } catch (error) {
        console.warn(
          'Android location permission error:',
          error,
        );

        return false;
      }
    }

    return false;
  }

  // ==========================================
  // Permission Alerts
  // ==========================================

  promptOpenSettings(
    title = 'إذن الموقع مطلوب',
    message = 'يرجى تفعيل إذن الوصول إلى الموقع من إعدادات الهاتف.',
  ): void {
    Alert.alert(title, message, [
      {
        text: 'إلغاء',
        style: 'cancel',
      },
      {
        text: 'فتح الإعدادات',
        onPress: () => Linking.openSettings(),
      },
    ]);
  }

  promptEnableGPS(): void {
    Alert.alert(
      'خدمة الموقع غير متاحة',
      'يرجى التأكد من تشغيل خدمة الموقع والمحاولة مرة أخرى.',
      [
        {
          text: 'إلغاء',
          style: 'cancel',
        },
        {
          text: 'فتح الإعدادات',
          onPress: () => Linking.openSettings(),
        },
      ],
    );
  }

  // ==========================================
  // Get Current Coordinates
  // ==========================================

  private getPosition(
    enableHighAccuracy: boolean,
    timeout: number,
  ): Promise<LocationCoordinates> {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        (position: GeolocationResponse) => {
          const { latitude, longitude, accuracy } =
            position.coords;

          if (
            !Number.isFinite(latitude) ||
            !Number.isFinite(longitude)
          ) {
            reject(new Error('INVALID_COORDINATES'));
            return;
          }

          resolve({
            latitude,
            longitude,
            accuracy,
          });
        },
        (error: GeolocationError) => {
          reject(error);
        },
        {
          enableHighAccuracy,
          timeout,
          maximumAge: 0,
        },
      );
    });
  }

  async getCurrentCoordinates(): Promise<LocationCoordinates> {
    this.ensureConfigured();

    const hasPermission = await this.requestPermission();

    if (!hasPermission) {
      this.promptOpenSettings();

      throw new Error('LOCATION_PERMISSION_DENIED');
    }

    let coordinates: LocationCoordinates;

    try {
      // First attempt: High accuracy GPS
      coordinates = await this.getPosition(
        true,
        LOCATION_TIMEOUT,
      );
    } catch (error) {
      console.warn(
        'High accuracy location failed. Trying fallback:',
        error,
      );

      // Second attempt: Network / balanced location
      try {
        coordinates = await this.getPosition(
          false,
          FALLBACK_TIMEOUT,
        );
      } catch (fallbackError) {
        console.warn(
          'Fallback location failed:',
          fallbackError,
        );

        const locationError =
          fallbackError as GeolocationError;

        if (locationError.code === 1) {
          this.promptOpenSettings();
        } else if (locationError.code === 2) {
          this.promptEnableGPS();
        } else {
          Alert.alert(
            'تعذر تحديد الموقع',
            'يرجى التأكد من تشغيل خدمة الموقع والمحاولة مرة أخرى.',
          );
        }

        throw fallbackError;
      }
    }

    console.log('Current coordinates:', coordinates);

    if (
      coordinates.accuracy !== undefined &&
      coordinates.accuracy > MAX_ACCEPTABLE_ACCURACY
    ) {
      console.warn(
        `Location accuracy is low: ${coordinates.accuracy}m`,
      );
    }

    return coordinates;
  }

  // ==========================================
  // Reverse Geocoding
  // ==========================================

  async reverseGeocode(
    latitude: number,
    longitude: number,
  ): Promise<string> {
    try {
      const url =
        `${NOMINATIM_URL}` +
        `?format=jsonv2` +
        `&lat=${latitude}` +
        `&lon=${longitude}` +
        `&zoom=18` +
        `&addressdetails=1` +
        `&accept-language=ar`;

      const response = await fetch(url, {
        headers: {
          'User-Agent': 'HalanApp/1.0',
        },
      });

      if (!response.ok) {
        throw new Error(
          `Nominatim API error: ${response.status}`,
        );
      }

      const data: NominatimResponse =
        await response.json();

      if (!data?.address) {
        throw new Error('ADDRESS_NOT_FOUND');
      }

      const address = data.address;

      // Street
      const street =
        address.road ||
        address.pedestrian ||
        '';

      // Neighborhood
      const neighbourhood =
        address.neighbourhood ||
        address.quarter ||
        address.residential ||
        address.suburb ||
        address.city_district ||
        '';

      // City
      const city =
        address.city ||
        address.town ||
        address.village ||
        address.municipality ||
        '';

      // Governorate
      const governorate =
        address.governorate ||
        address.state ||
        '';

      // Build readable address
      const parts = [
        street,
        neighbourhood,
        city,
        governorate,
      ].filter(Boolean);

      // Remove duplicates
      const uniqueParts = [
        ...new Set(parts),
      ];

      if (uniqueParts.length > 0) {
        return uniqueParts.join('، ');
      }

      return (
        data.display_name ||
        'تعذر تحديد العنوان'
      );
    } catch (error) {
      console.warn(
        'Reverse geocoding error:',
        error,
      );

      return 'تعذر تحديد العنوان';
    }
  }

  // ==========================================
  // Get Complete Current Location
  // ==========================================

  async getCurrentLocation(): Promise<UserLocationResult> {
    const coords = await this.getCurrentCoordinates();

    const address = await this.reverseGeocode(
      coords.latitude,
      coords.longitude,
    );

    return {
      coords,
      address,
    };
  }
}

// ============================================
// Export
// ============================================

export const locationService = new LocationService();

export default locationService;
