import {PermissionsAndroid} from 'react-native';

export const getPermissionLocation = async () => {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Permissão de localização concedida');
    } else {
      console.log('Permissão de localização negada');
    }
  } catch (err) {
    console.warn(err);
  }
};
