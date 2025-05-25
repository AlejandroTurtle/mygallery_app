import React, {useCallback, useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from './src/config';
import {NavigationContainer} from '@react-navigation/native';
import {Tabs} from './src/screens/Tabs/TabStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PhotoDetails} from './src/screens/PhotoDetails';
import {PhotoType} from './src/types/PhotosType';
import {getPermissionLocation} from './src/utils/GetPermissionLocation';

export type RootStackParamList = {
  Main: undefined;
  PhotoDetails: {
    photo: PhotoType;
  };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const App: React.FC = () => {
  useEffect(() => {
    getPermissionLocation();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={Colors.white} translucent={false} />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName="Main" screenOptions={{headerShown: false}}>
            <RootStack.Screen name="Main" component={Tabs} />
            <RootStack.Screen name="PhotoDetails" component={PhotoDetails} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default App;
