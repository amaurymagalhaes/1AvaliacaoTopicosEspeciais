import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #f2f2f0;
    align-items: center;
`;

export const BookShelf = styled.FlatList`
    background-color: blue;
`;

export const BookInfo = styled.View`
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
    border: 1px solid red;
    border-radius: 15px;
    align-items: center;
    margin-top: 10px;
`;

export const BookImage = styled.Image`
    height: 150px;
    width: 120px;
    margin-left: 5%;
`;

export const BookTextContainer = styled.View`
    flex-direction: column;
    flex: 1;
`;

export const BookName = styled.Text`
    font-size: 20px;
    margin-left: 3%;
`;

export const BookAuthor = styled.Text`
    font-size: 17px;
    color: blue;
    margin-left: 3%;
`;

export const BookStorage = styled.View`
    margin-top: 20px;
`;

export const BookPrices = styled.Text`
    font-size: 15px;
    margin-left: 3%;
`;

export const BookQuantity = styled.Text`
    font-size: 16px;
    margin-left: 3%;
`;

export const BuyButton = styled.TouchableOpacity`
    width: 150px;
    height: 30px;
    background-color: blueviolet;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 15px;
    align-self: center;
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    color: white;
`;
