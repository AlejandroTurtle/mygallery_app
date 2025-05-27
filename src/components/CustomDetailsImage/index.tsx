import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {PhotoType} from '@/src/types/PhotosType';
import {converterData} from '@/src/utils/ConvertDate';
import {CustomMap} from '../CustomMap';

type PropsCustomDetailsImage = {
  photo: PhotoType;
};

const {height: WINDOW_HEIGHT} = Dimensions.get('window');

export const CustomDetailsImage = ({photo}: PropsCustomDetailsImage) => {
  return (
    <View>
      <Image source={{uri: photo?.path}} style={[styles.image, {height: WINDOW_HEIGHT * 0.8}]} />
      <View style={styles.card}>
        <Text style={styles.title}>Informações da imagem</Text>
        <View style={styles.row}>
          <Feather name="calendar" size={24} style={styles.icon} />
          <Text style={styles.text}>{converterData(photo?.exif?.DateTime || '')}</Text>
        </View>
        {photo?.exif?.Latitude && photo?.exif?.Longitude && (
          <>
            <View style={styles.row}>
              <Feather name="map-pin" size={24} style={styles.icon} />
              <Text style={styles.text}>Latitude: {photo?.exif?.Latitude}</Text>
            </View>
            <View style={styles.row}>
              <Feather name="map-pin" size={24} style={styles.icon} />
              <Text style={styles.text}>Longitude: {photo?.exif?.Longitude}</Text>
            </View>
          </>
        )}
      </View>
      {photo?.exif?.Latitude && photo?.exif?.Longitude && <CustomMap latitude={photo?.exif?.Latitude} longitude={photo?.exif?.Longitude} />}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: 'black',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  card: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 16,
  },
});
