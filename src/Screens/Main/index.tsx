import React from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
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
const Text = Styled.Text``;
type Props = DrawerScreenProps<RootStackParamList, 'Home'>;
const Main = ({navigation}: Props) => {
   return(
       <Container>
           <Text>Hi!</Text>
           <Container1>
           <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Test')} />
      </Container1>
       </Container>
   );
}
 
export default Main;