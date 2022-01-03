import * as React from 'react';
import Styled from 'styled-components/native';
import {  DrawerScreenProps } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Test from '~/Screens/Test';
import TestDetail1 from '~/Screens/Test/TestDetail1';
import TestDetail2 from '~/Screens/Test/TestDetail2';

const Container = Styled.View``;

const Stack = createStackNavigator();


function TestStackNavi(){
    return(
    <Stack.Navigator >
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="1st" component={TestDetail1}  />
      <Stack.Screen name="2st" component= {TestDetail2}/>
    </Stack.Navigator>
    ); 
  }


export default TestStackNavi;