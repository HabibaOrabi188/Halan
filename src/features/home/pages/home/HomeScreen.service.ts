import {
  locationService,
  UserLocationResult,
  LocationCoordinates,
} from '../../../../core/services/locationService';

class HomeScreenService {
  async getDeviceLocation(): Promise<UserLocationResult> {
    return locationService.getCurrentLocation();
  }
}

export { type UserLocationResult, type LocationCoordinates };
export default new HomeScreenService();
