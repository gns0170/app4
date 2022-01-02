import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    width: 100%;
    height: 100%;
    background: #CCCCCC;
`;
const Text = Styled.Text``;
interface Props {}
const Test2 = ({}: Props) => {
   return(
       <Container>
           <Text>Hi!</Text>
       </Container>
   );
}
 
export default Test2;