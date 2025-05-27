import {Colors} from '@/src/config';
import {PhotoType} from '@/src/types/PhotosType';
import {converterData} from '@/src/utils/ConvertDate';
import React from 'react';
import {FlatList, Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type PropsCustomGallery = {
  photos: PhotoType[];
  onPressPhoto: (photo: PhotoType) => void;
};

const EmptyGalleryComponent = () => <Text style={{color: Colors.black, textAlign: 'center'}}>Voce ainda nao possui fotos</Text>;

export const CustomGallery = ({photos, onPressPhoto}: PropsCustomGallery) => {
  return (
    <FlatList
      key={3}
      data={photos}
      numColumns={3}
      keyExtractor={(item, index) => `${index}`}
      renderItem={({item}: {item: PhotoType}) => (
        <TouchableOpacity onPress={() => onPressPhoto(item)} style={styles.photoContainer}>
          <Image source={{uri: item.path}} style={styles.photo} />
        </TouchableOpacity>
      )}
      ListEmptyComponent={EmptyGalleryComponent}
    />
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    margin: 5,
    width: '32%',
  },
  photo: {
    width: '100%',
    height: 100,
    borderRadius: 4,
  },
});
