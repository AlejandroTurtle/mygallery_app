import {PhotoType} from '@/src/types/PhotosType';
import {converterData} from '@/src/utils/ConvertDate';
import React from 'react';
import {FlatList, Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type PropsCustomGallery = {
  photos: PhotoType[];
  onPressPhoto: (photo: PhotoType) => void;
};

export const CustomGallery = ({photos, onPressPhoto}: PropsCustomGallery) => {
  const formatarData = (data: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };

    return new Date(data).toLocaleDateString('pt-BR', options).replace(/de\s+/g, 'de ').replace(/\./g, '');
  };

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
