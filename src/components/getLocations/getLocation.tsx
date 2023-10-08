import Geolocation from '@react-native-community/geolocation';

export const currentLocationPermision = () => {
  Geolocation.requestAuthorization(() => {
    console.log('success');
  }),
    () => {
      console.log('error');
    };
};
