import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity, ImageSourcePropType} from 'react-native';

import {Keyboard} from 'react-native';
import {Colors} from '@/src/config';
import CustomIcon from '@/src/components/CustomIcon';

const Tab = createBottomTabNavigator();

export type tabsType = {
  image?: string;
  name: string;
  label: string;
  icon?: ImageSourcePropType;
  component: Function;
  options?: any;
};
type Props = {
  tabs: tabsType[];
};

export function CustomTabs({tabs}: Props) {
  const defaultSize = 24;

  const TabBarButton = (props: any) => (
    <TouchableOpacity {...props} activeOpacity={0.5} style={[props.style, {flex: 1, justifyContent: 'center', alignItems: 'center'}]} />
  );

  return (
    <Tab.Navigator
      screenOptions={{
        animation: 'fade',
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: Colors.gray,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 55,
          backgroundColor: Colors.white,
          borderTopWidth: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: -2},
          shadowOpacity: 0.1,
          shadowRadius: 5,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Poppins-Regular',
          marginTop: 4,
        },
      }}>
      {tabs.map(item => {
        return (
          <Tab.Screen
            key={item.name}
            name={item.name}
            component={item.component as any}
            options={{
              tabBarLabel: item.label,

              tabBarLabelStyle: {
                fontSize: 12,
                fontFamily: 'Poppins-Regular',
                width: 90,
              },
              tabBarIcon: ({color}) => {
                return <CustomIcon iconSource={item.icon!} size={defaultSize} color={color} />;
              },
              tabBarIconStyle: {
                marginBottom: 2,
                marginTop: 10,
              },

              tabBarButton: props => <TabBarButton {...props} />,
              ...item.options,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
