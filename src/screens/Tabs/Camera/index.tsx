import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Image} from 'react-native';
import {Button} from '@react-navigation/elements';
import {useIndex} from './useIndex';

export const Camera = () => {
  const {hasPermission, openSettings, image, OpenCamera, handleImageTaken, handleTakeAnotherPhoto, savePhoto} = useIndex();

  if (hasPermission === null) {
    console.log('Aguardando permissão...');
    return <ActivityIndicator />;
  }

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Precisamos da permissão para usar a câmera</Text>
        <Button onPress={openSettings}>Abrir configurações</Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image source={{uri: image.path}} style={styles.image} />
          <View style={styles.row}>
            <Button style={styles.button} onPress={OpenCamera}>
              Tirar outra foto
            </Button>
            <Button style={styles.button} onPress={savePhoto}>
              Salvar foto
            </Button>
          </View>
        </>
      ) : (
        <View>
          <Button onPress={OpenCamera}>Tirar foto</Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 12,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    marginTop: 16,
  },
});
