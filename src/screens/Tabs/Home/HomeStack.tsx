import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './Main';

export const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: '#fff'},
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
