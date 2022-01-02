import React from 'react';
import Styled from 'styled-components/native';

const StyleButton = Styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    border: 1px;
    border-color: #333333;
    background-color: #11ff9940;
`;
const Label = Styled.Text`
    color: #FFFFFF;
`;

interface Props {
    title: string;
    style?: Object;
    onPress?: () => void;
}

const Button = ({ title, style, onPress }: Props) => {
    return (
        <StyleButton style={style} onPress={onPress}>
            <Label>{title}</Label>
        </StyleButton>
    );
};

export default Button;