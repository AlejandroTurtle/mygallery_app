import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {CustomHeader} from '@/src/components/CustomHeader';
import {CustomDetailsImage} from '@/src/components/CustomDetailsImage';
import type {RouteProp} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from 'App';

type PhotoDetailsRouteProp = RouteProp<RootStackParamList, 'PhotoDetails'>;
type PhotoDetailsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PhotoDetails'>;

type Props = {
  route: PhotoDetailsRouteProp;
  navigation: PhotoDetailsNavigationProp;
};

export const PhotoDetails = ({navigation, route}: Props) => {
  const {photo} = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      <CustomHeader title="Detalhes da Foto" goBack={() => navigation.goBack()} />
      <CustomDetailsImage photo={photo} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom: 20,
  },
});
