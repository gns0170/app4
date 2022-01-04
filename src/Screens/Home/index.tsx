import React from 'react';
import {Image} from 'react-native';
import Styled from 'styled-components/native';
import Button from '~/Components/Button'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';



const homeTabBtn = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>`;

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
type StackProps = NativeStackScreenProps<StackParamList_Home, 'HomeMain'>;
type DrawerProps = DrawerScreenProps<DrawerParamList, "Main">;
type Props = CompositeScreenProps<
    StackProps,
    DrawerProps
>
const Home = ({navigation}: Props) => {
   return(
       <Container>
           <Text>Hi!</Text>
           <Text>Bye!</Text>
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