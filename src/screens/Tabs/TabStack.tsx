import React from 'react';

import homeIcon from '@/assets/home.png';
import hearthIcon from '@/assets/heart.png';
import camera from '@/assets/camera.png';

import {CustomTabs, tabsType} from '@/src/libs/Navigation/TabsBar';
import {FavoriteStack} from './Favorites/FavoriteStack';
import {HomeStack} from './Home/HomeStack';
import {Camera} from './Camera';

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

    {
      name: 'Favoritos',
      label: 'Favoritos',
      icon: hearthIcon,
      component: FavoriteStack,
    },
  ];
  return <CustomTabs tabs={tabs} />;
}
