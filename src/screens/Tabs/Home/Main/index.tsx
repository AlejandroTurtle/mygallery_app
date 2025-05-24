import {CustomGallery} from '@/src/components/CustomGallery';
import {CustomHeader} from '@/src/components/CustomHeader';
import {getItemAsync} from '@/src/libs/AsyncStorage';
import {PhotoType} from '@/src/types/PhotosType';
import {TabsParamList} from '@/src/types/RouteTypes';
import {getPermissionLocation} from '@/src/utils/GetPermissionLocation';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const Home = () => {
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
      getPermissionLocation();
    }, []),
  );

  const handlePressPhoto = (photo: PhotoType) => {
    navigation.navigate('PhotoDetails', {photo});
  };

  console.log('myPhotos: ', JSON.stringify(myPhotos, null, 2));

  return (
    <View style={styles.container}>
      <CustomHeader title="Minha Galeria" />
      <CustomGallery photos={myPhotos} onPressPhoto={handlePressPhoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});
