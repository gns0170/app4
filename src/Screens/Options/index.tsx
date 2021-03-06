import React from 'react';
import Styled from 'styled-components/native';
import { DrawerScreenProps,createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTabScreenProps,createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SvgUri} from 'react-native-svg';
import HomeBtn from '~/Assets/Icons/homeBtn';
const Container = Styled.View`
    width: 100%;
    height: 100%;
    font-size: 30px;
    background: #CCCCCC;
`;
const Text = Styled.Text`
font-size: 30px;
`;
const homeTabBtn = `<vector xmlns:android="http://schemas.android.com/apk/res/android"
android:width="33dp"
android:height="33dp"
android:viewportWidth="33"
android:viewportHeight="33">
<path
  android:pathData="M28.1827,1.7062L3.547,13.0765C0.7045,14.3793 1.652,18.584 4.6722,18.584H15.095V29.0067C15.095,32.027 19.2996,32.9745 20.6025,30.1319L31.9728,5.4963C32.9203,3.2459 30.433,0.7587 28.1827,1.7062Z"
  android:fillColor="#111111"/>
</vector>`;

const Drawer = createDrawerNavigator();
const Bottom = createBottomTabNavigator();

type Props = DrawerScreenProps<DrawerParamList,"Options">
const Options = ({}: Props) => {
   return(
       <Container>
          <HomeBtn darkMode={false}/>
           <Text>Options!</Text>
        </Container>
   );
}
 
export default Options;