import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #f2f2f0;
    padding-top: 3%;
    align-items: center;
`;

export const CarouselContainer = styled.View`
    flex-direction: row;
    flex: 1;
    align-items: center;
`;

export const MoveButton = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 20px;
    background-color: #f2f2aa;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-size: 30px;
`;

export const ImageContainer = styled.Image`
    width: 80%;
    height: 60%;
    border-radius: 50px;
`;
