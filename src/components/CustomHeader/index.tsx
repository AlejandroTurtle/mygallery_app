import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

type PropsHeader = {
  title: string;
  goBack?: () => void;
};

export const CustomHeader = ({title, goBack}: PropsHeader) => {
  return (
    <View style={styles.container}>
      {goBack ? (
        <View style={styles.row}>
          <Feather name="arrow-left" size={24} onPress={goBack} />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.placeholder} />
        </View>
      ) : (
        <Text style={styles.titleSolo}>{title}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    paddingVertical: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  titleSolo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeholder: {
    width: 24,
    height: 24,
  },
});
