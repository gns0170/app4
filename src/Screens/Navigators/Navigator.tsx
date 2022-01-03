import * as React from 'react';
import { Button } from 'react-native';
import Styled from 'styled-components/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList, DrawerScreenProps } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavi from './BottomNavi';

import Options from '~/Screens/Options';
import showAlert from '~/Functions/Alert';
type DrawerProps = DrawerScreenProps<DrawerParamList,"Main">
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


type Props=React.ComponentProps<typeof DrawerItemList>;
function CustomDrawerContent({...props}:Props){
  return (
    <DrawerContentScrollView {...props}>
      <Button
      title="Test"
      color="FFF"/>
      <DrawerItemList {...props} />
      <DrawerItem label="To Meet Us" onPress={()=> showAlert()}/>
    </DrawerContentScrollView>
  );
}

function DrawerNavi(){
  return(
    <Drawer.Navigator screenOptions={{headerShown: false}} 
    drawerContent={(props)=><CustomDrawerContent {...props}/>}>
      <Drawer.Screen name="Main" component={BottomNavi} />
      <Drawer.Screen name="Options" component={Options} />
    </Drawer.Navigator>
  );
}

export default ()=> {
  return (
  <NavigationContainer>
    <DrawerNavi/>
  </NavigationContainer>
  );  
}