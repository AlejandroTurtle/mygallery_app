import {useCallback, useEffect, useState} from 'react';
import {Linking, PermissionsAndroid} from 'react-native';

export const CustomCameraPermission = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const requestPermission = useCallback(async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
        title: 'Permissão para usar a câmera',
        message: 'Precisamos da sua permissão para tirar fotos',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      });
      setHasPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
    } catch (err) {
      console.warn('Erro ao pedir permissão de câmera:', err);
      setHasPermission(false);
    }
  }, []);

  const openSettings = useCallback(() => {
    Linking.openSettings().catch(() => console.warn('Não foi possível abrir as configurações'));
  }, []);

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  return {hasPermission, openSettings};
};
