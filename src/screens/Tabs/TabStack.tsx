import React from 'react';
import homeIcon from '@/assets/home.png';
import camera from '@/assets/camera.png';
import {CustomTabs, tabsType} from '@/src/libs/Navigation/TabsBar';
import {HomeStack} from './Home/HomeStack';
import {Camera} from './Camera/Main';

export function Tabs() {
  const tabs: tabsType[] = [
    {
      name: 'Inicio',
      label: 'ínicio',
      icon: homeIcon,
      component: HomeStack,
    },
    {
      name: 'Camera',
      label: 'Camera',
      icon: camera,
      component: Camera,
    },
  ];
  return <CustomTabs tabs={tabs} />;
}
