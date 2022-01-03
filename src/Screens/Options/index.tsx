import React from 'react';
import Styled from 'styled-components/native';
import { DrawerScreenProps,createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTabScreenProps,createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Container = Styled.View`
    width: 100%;
    height: 100%;
    font-size: 30px;
    background: #CCCCCC;
`;
const Text = Styled.Text`
font-size: 30px;
`;

const Drawer = createDrawerNavigator();
const Bottom = createBottomTabNavigator();

type Props = DrawerScreenProps<DrawerParamList,"Options">
const Options = ({}: Props) => {
   return(
       <Container>
           <Text>Options!</Text>
        </Container>
   );
}
 
export default Options;