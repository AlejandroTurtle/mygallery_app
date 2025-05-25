import {CustomGallery} from '@/src/components/CustomGallery';
import {CustomHeader} from '@/src/components/CustomHeader';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useIndex} from './useIndex';

export const Home = () => {
  const {myPhotos, handlePressPhoto} = useIndex();

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
