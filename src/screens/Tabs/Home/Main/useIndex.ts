import {getItemAsync} from '@/src/libs/AsyncStorage';
import {PhotoType} from '@/src/types/PhotosType';
import {TabsParamList} from '@/src/types/RouteTypes';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useCallback, useState} from 'react';
export const useIndex = () => {
  const navigation = useNavigation<NativeStackNavigationProp<TabsParamList>>();
  const [myPhotos, setMyPhotos] = useState<PhotoType[]>([]);

  const getFotosAsync = () => {
    getItemAsync('photos')
      .then(fotos => {
        setMyPhotos(fotos);
      })
      .catch(error => {
        console.error('Erro ao obter fotos:', error);
      });
  };

  useFocusEffect(
    useCallback(() => {
      getFotosAsync();
    }, []),
  );

  const handlePressPhoto = (photo: PhotoType) => {
    navigation.navigate('PhotoDetails', {photo});
  };

  console.log('myPhotos: ', JSON.stringify(myPhotos, null, 2));

  return {myPhotos, handlePressPhoto};
};
