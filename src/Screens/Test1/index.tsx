import React from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
const Container = Styled.View`
    width: 100%;
    height: 100%;
    background: #CCCCCC;
`;
const Text = Styled.Text``;

type Props = DrawerScreenProps<RootStackParamList, 'Home'>;
const Test1 = ({navigation}: Props) => {
   return(
       <Container>
           <Text>Hi!</Text>
           <Button
            title="Go to Details... again"
            onPress={() => navigation.push('Test')}
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
       </Container>
   );
}
 
export default Test1;