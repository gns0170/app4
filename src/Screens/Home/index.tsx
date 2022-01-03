import React from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
const Container = Styled.View`
    width: 100%;
    height: 100%;

    background: #CCCCCC;
`;

const Container1 =Styled.View`
    width: 50%;
    left: 25%;
`;

const Btn = Styled.Button``;
const Text = Styled.Text`
font-size: 30px;
`;
type StackProps = NativeStackScreenProps<StackParamList_Home, 'Home'>;
type DrawerProps = DrawerScreenProps<DrawerParamList, "Main">;
type Props = CompositeScreenProps<
    StackProps,
    DrawerProps
>
const Home = ({navigation}: Props) => {
   return(
       <Container>
           <Text>Hi!</Text>
           <Container1>
           <Button
            title="Go to Details 1"
            onPress={() => navigation.push('HomeDetail1')} />
            <Button
            title="Go to Details 2"
            onPress={() => navigation.push('HomeDetail2')} />
            <Button
            title="Drawer"
            onPress={() => navigation.openDrawer()} />
        </Container1>
       </Container>
   );
}
 
export default Home;