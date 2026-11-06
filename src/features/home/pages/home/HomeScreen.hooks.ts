import { useState, useCallback } from 'react';
import { HomeScreenProps } from './HomeScreen.types';
import homeScreenService, { LocationCoordinates } from './HomeScreen.service';

const useHomeScreen = (): HomeScreenProps => {
  const [showLocationDialog, setShowLocationDialog] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [locationCoords, setLocationCoords] = useState<LocationCoordinates | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const onConfirmLocation = useCallback(async () => {
    try {
      setIsLoadingLocation(true);
      const result = await homeScreenService.getDeviceLocation();
      setSelectedLocation(result.address);
      setLocationCoords(result.coords);
      setShowLocationDialog(false);
      setUserName("حبيبة");
    } catch (error) {
      console.warn('Error determining location:', error);
    } finally {
      setIsLoadingLocation(false);
    }
  }, []);

  const onDismissLocation = useCallback(() => {
    setShowLocationDialog(false);
  }, []);

  const onChangeLocation = useCallback(() => {
    setShowLocationDialog(true);
  }, []);

  return {
    showLocationDialog,
    selectedLocation,
    locationCoords,
    isLoadingLocation,
    onConfirmLocation,
    onDismissLocation,
    onChangeLocation,
    userName
  };
};

export default useHomeScreen;
