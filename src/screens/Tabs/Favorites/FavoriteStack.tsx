import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Favorites} from '.';

export const FavoriteStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: '#fff'},
      }}>
      <Stack.Screen name="Favorites" component={Favorites} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};
