import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #f2f2f0;
    padding-top: 3%;
`;

export const TextContainer = styled.TextInput`
    height: 200px;
    border: 2px solid red;
`;

export const Button = styled.TouchableOpacity`
    background-color: salmon;
    align-self: center;
    border-radius: 20px;
    height: 35px;
    justify-content: center;
    margin-top: 5px;
    padding-right: 10px;
    padding-left: 10px;
`;

export const TextButton = styled.Text`
    font-size: 20px;
    text-align: center;
`;
