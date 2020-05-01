import React from 'react';
import {View} from 'react-native';
import {
    Background,
    ImageAuthor,
    TopicContainer,
    TopicHeader,
    AuthorNameText,
    TopicMessageContainer,
    TopicMessage,
    QuotedMessage,
} from './styles';

// import { Container } from './styles';

export default function QuestionOne() {
    return (
        <Background>
            <TopicContainer>
                <TopicHeader>
                    <ImageAuthor
                        source={{
                            uri:
                                'https://scontent.fbel1-1.fna.fbcdn.net/v/t31.0-8/s960x960/26116007_1337630736342252_2730894767588754950_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_oc=AQlSxVC5z6PhZRJWjU3R2TMx1r20p7AEtc2ASEEmhFRR2E1jhm0znlZH0tlmLUhbVlUlXyS_jJ9jXinDOgAH1AmN&_nc_ht=scontent.fbel1-1.fna&_nc_tp=7&oh=fbd9596bd71e71c736fe5d7989bcc67f&oe=5ED120E4',
                        }}></ImageAuthor>
                    <AuthorNameText>Antonio_Amaury_10</AuthorNameText>
                </TopicHeader>
                <TopicMessageContainer>
                    <TopicMessage>
                        O que é mais confuso? Dark ou Interestelar?
                    </TopicMessage>
                </TopicMessageContainer>
            </TopicContainer>
            <TopicContainer>
                <TopicHeader>
                    <ImageAuthor
                        source={{
                            uri:
                                'https://s2.glbimg.com/aGNPBQMhS5sWfd6kkqAzAxY8ekE=/e.glbimg.com/og/ed/f/original/2014/10/28/interstellar.jpg',
                        }}></ImageAuthor>
                    <AuthorNameText>Fã de Interestelar</AuthorNameText>
                </TopicHeader>
                <TopicMessageContainer>
                    <TopicMessage>
                        <QuotedMessage>
                            Antonio_Amaury_10: {'\n'}O que é mais confuso? Dark
                            ou Interestelar?
                            {'\n'}
                        </QuotedMessage>
                        Dark, com certeza. Ninguém aguenta tanta viagem no tempo
                        assim.
                    </TopicMessage>
                </TopicMessageContainer>
            </TopicContainer>
            <TopicContainer>
                <TopicHeader>
                    <ImageAuthor
                        source={{
                            uri:
                                'https://img.ibxk.com.br/2019/06/24/24231930826369.jpg',
                        }}></ImageAuthor>
                    <AuthorNameText>Fã de Dark</AuthorNameText>
                </TopicHeader>
                <TopicMessageContainer>
                    <TopicMessage>
                        <QuotedMessage>
                            Fã de Interestelar: {'\n'}Dark, com certeza. Ninguém
                            aguenta tanta viagem no tempo assim.
                            {'\n'}
                        </QuotedMessage>
                        discordo, interestelar é tenebroso de ruim
                    </TopicMessage>
                </TopicMessageContainer>
            </TopicContainer>
        </Background>
    );
}
