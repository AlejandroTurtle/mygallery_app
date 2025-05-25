import {getItemAsync, setItemAsync} from '@/src/libs/AsyncStorage';
import {useNavigation} from '@react-navigation/native';
import {TabsParamList} from '@/src/types/RouteTypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CustomCameraPermission} from '@/src/components/CustomCameraPermission';
import {useCallback, useState} from 'react';
import ImagePicker, {Image} from 'react-native-image-crop-picker';
import {useFocusEffect} from '@react-navigation/native';
import {PhotoType} from '@/src/types/PhotosType';

type CameraImage = Image & {
  exif?: {
    DateTime?: string;
    Latitude?: number;
    Longitude?: number;
    [key: string]: any;
  };
};

export const useIndex = () => {
  const navigation = useNavigation<NativeStackNavigationProp<TabsParamList>>();
  const {hasPermission, openSettings} = CustomCameraPermission();
  const [image, setImage] = useState<CameraImage | null>(null);

  const OpenCamera = useCallback(() => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      includeExif: true,
    })
      .then((imageCaptured: CameraImage) => {
        console.log('Imagem capturada:', imageCaptured);
        console.log('Dados exif:', imageCaptured.exif);
        setImage(imageCaptured);
      })
      .catch((error: Error) => {
        console.log('Erro ao abrir a câmera:', error);
      });
  }, []);

  useFocusEffect(
    useCallback(() => {
      OpenCamera();
    }, [OpenCamera]),
  );

  const handleImageTaken = (capturedImage: CameraImage) => {
    setImage(capturedImage);
  };

  const handleTakeAnotherPhoto = () => {
    setImage(null);
  };

  const savePhoto = async () => {
    try {
      const savedPhotos = (await getItemAsync('photos')) || [];
      const newPhotos = [...savedPhotos, image];
      await setItemAsync('photos', newPhotos);
      console.log('Foto salva com sucesso!');
      navigation.navigate('Inicio');
      setImage(null);
    } catch (error) {
      console.error('Erro ao salvar a foto:', error);
    }
  };
  return {hasPermission, openSettings, image, OpenCamera, handleImageTaken, handleTakeAnotherPhoto, savePhoto};
};
