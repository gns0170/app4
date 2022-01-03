import * as React from 'react';
import Styled from 'styled-components/native';
import { createBottomTabNavigator,BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import HomeStackNavi from './HomeStackNavigator';
import TestStackNavi from './TestStackNavigator';
const Bottom = createBottomTabNavigator();

function BottomNavi(){
    return(
    <Bottom.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Bottom.Screen name="Home" component={HomeStackNavi} />
      <Bottom.Screen name="Test" component={TestStackNavi} />
    </Bottom.Navigator>
    );
  }

export default BottomNavi;