import * as React from 'react';
import Styled from 'styled-components/native';
import { createBottomTabNavigator,BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import HomeStackNavi from './HomeStackNavigator';
import TestStackNavi from './TestStackNavigator';
import { Icon } from 'react-native-vector-icons/Icon';
import HomeBtn from '~/Assets/Icons/homeBtn';

const Bottom = createBottomTabNavigator();

interface TextProps {
  color?: string
}
const Container = Styled.View`
  display:flex;
  justify-content: center;
  align-items: center;
`;
const Text = Styled.Text<TextProps>`
  font-size : 15px;
  color: ${props=>props.color||"black"};
`;

type Props = BottomTabScreenProps<BottomParamList>;
function BottomNavi({navigation, route}:Props){
    return(
    <Bottom.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
      <Bottom.Screen name="Home" component={HomeStackNavi}
      options={{
        tabBarLabel:({focused, color})=>(
          <Container>
          <HomeBtn color={color}darkMode={false} />
          <Text color={color}>Home</Text>
          </Container>
        ),

      }}
       />
      <Bottom.Screen name="Test" component={TestStackNavi} 
      options={{
        tabBarLabel:({focused, color})=>(
          <Text color={color}>Test</Text>
        ),
      }}
      />
    </Bottom.Navigator>
    );
  }

export default BottomNavi;