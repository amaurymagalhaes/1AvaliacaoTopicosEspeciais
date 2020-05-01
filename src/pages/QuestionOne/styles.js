import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #f2f2f0;
    padding-top: 3%;
`;

export const ImageAuthor = styled.Image`
    background-color: red;
    height: 60px;
    width: 60px;
    border-radius: 50px;
    border-width: 0;
`;

export const TopicHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const AuthorNameText = styled.Text`
    font-size: 25px;
    flex: 1;
    margin-left: 20px;
    padding-left: 10px;
`;

export const TopicContainer = styled.View`
    height: 100px;
    flex: 1;
    margin-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
`;

export const TopicMessageContainer = styled.View`
    background-color: #e8e8e6;
    margin: 10px;
    border-radius: 10px;
`;

export const TopicMessage = styled.Text`
    font-size: 15px;
    padding-left: 10px;
`;

export const QuotedMessage = styled.Text`
    font-size: 15px;
    padding-left: 10px;
    background-color: salmon;
`;
