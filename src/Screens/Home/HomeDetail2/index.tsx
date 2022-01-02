import React from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
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
type Props = NativeStackScreenProps<StackParamList_Home, 'HomeDetail2'>;
const HomeDetail2 = ({navigation}: Props) => {
   return(
       <Container>
           <Text>Hi!</Text>
           <Container1>
           <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')} />
            <Button
            title="Go to Details 1"
            onPress={() => navigation.navigate('HomeDetail1')} />
        </Container1>
       </Container>
   );
}
 
export default HomeDetail2;