import * as React from 'react';
import {  Button } from 'react-native';
import Styled from 'styled-components/native';
import {  DrawerScreenProps } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/Screens/Home';
import HomeDetail1 from '~/Screens/Home/HomeDetail1';
import HomeDetail2 from '~/Screens/Home/HomeDetail2';

const Container = Styled.View`
  margin-right: 15px;
  flex-direction: row;
`;

type DrawerProps = DrawerScreenProps<DrawerParamList,"Main">
const Stack = createStackNavigator();

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

export default HomeStackNavi;