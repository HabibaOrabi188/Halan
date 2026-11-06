import { LocationCoordinates } from '../../../../core/services/locationService';

export interface HomeScreenProps {
  showLocationDialog: boolean;
  selectedLocation: string | null;
  locationCoords: LocationCoordinates | null;
  isLoadingLocation: boolean;
  onConfirmLocation: () => Promise<void> | void;
  onDismissLocation: () => void;
  onChangeLocation: () => void;
  userName: string | null;
}
