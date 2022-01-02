import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '~/Screens/Main'
import Test1 from '~/Screens/Test1'
type Props = DrawerScreenProps<DrawerParamList, 'Home'>;


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export default ()=> {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Main} />
        <Drawer.Screen name="Test" component={Test1} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}