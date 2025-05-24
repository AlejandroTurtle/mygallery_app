import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Camera} from '.';

export const CameraStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: '#fff'},
      }}>
      <Stack.Screen name="Camera" component={Camera} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};
