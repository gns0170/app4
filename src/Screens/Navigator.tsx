import * as React from 'react';
import { Alert, Button, View } from 'react-native';
import Styled from 'styled-components/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList, DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerNavigationState, NavigationContainer, ParamListBase } from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator,BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import Home from '~/Screens/Home';
import HomeDetail1 from './Home/HomeDetail1';
import HomeDetail2 from './Home/HomeDetail2';
import Test from '~/Screens/Test';
import TestDetail1 from './Test/TestDetail1';
import TestDetail2 from './Test/TestDetail2';
import Options from '~/Screens/Options';

type DrawerProps = DrawerScreenProps<DrawerParamList,"Main">
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const Container = Styled.View`
  margin-right: 15px;
  flex-direction: row;
`;


function HomeStackNavi({navigation}:DrawerProps){
  return(
  <Stack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#f4511e',
    },
  }}>
    <Stack.Screen name="Home" component={Home} options={{headerRight:()=>(      
    <Container>
      <Button
      title="Test"
      color="FFF"
      onPress={() => navigation.toggleDrawer()}
      />
      <Button
      title="Test"
      color="FFF"
      />
      </Container>)}}/>
    <Stack.Screen name="HomeDetail1" component={HomeDetail1}  />
    <Stack.Screen name="HomeDetail2" component= {HomeDetail2}/>
  </Stack.Navigator>
  );
}
function TestStackNavi(){
  return(
  <Stack.Navigator >
    <Stack.Screen name="Test" component={Test} />
    <Stack.Screen name="1st" component={TestDetail1}  />
    <Stack.Screen name="2st" component= {TestDetail2}/>
  </Stack.Navigator>
  ); 
}

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

const showAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  )
interface Props{
};
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