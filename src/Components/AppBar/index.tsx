import React from 'react';
import Styled from 'styled-components/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '~/Screens/Main'
import Test1 from '~/Screens/Test1';
const Stack = createNativeStackNavigator();

const Container = Styled.View`
    width: 100%;
    height: 100%;
    background: #CCCCCC;
`;
const Text = Styled.Text``;
interface Props {}
const AppBar = ({}: Props) => {
   return(
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Main}
              options={{ title: 'My home' }}
            />
            <Stack.Screen
              name="Test"
              component={Test1}
              options={{ title: 'Test For You' }}
            />
          </Stack.Navigator>
   );
}
 
export default AppBar;