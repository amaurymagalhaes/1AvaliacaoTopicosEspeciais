import React, {useState} from 'react';
import {View} from 'react-native';
import {
    Background,
    BookInfo,
    BookShelf,
    BookName,
    BookImage,
    BookStorage,
    BookAuthor,
    BookTextContainer,
    BuyButton,
    ButtonText,
    BookPrices,
    BookQuantity,
} from '../QuestionFour/styles';

import ImageOne from '../../images/1.png';
import ImageTwo from '../../images/2.png';
import ImageThree from '../../images/3.png';

// import { Container } from './styles';

export default function QuestionFour() {
    const [bookshelf, setBookshelf] = useState([
        {
            id: 1,
            bookName: 'Dragões, onde vivem?',
            bookImage: ImageOne,
            bookAuthor: 'Antonio Amaury Magalhães',
            lowestPrice: 2,
            highestPrice: 20,
            newBooksQnt: 16300010,
            usedBooksQnt: 10,
        },
        {
            id: 2,
            bookName: 'Como nascem as estrelas rosadas',
            bookImage: ImageTwo,
            bookAuthor: 'Antonio Amaury Magalhães',
            lowestPrice: 5,
            highestPrice: 10,
            newBooksQnt: 16300010,
            usedBooksQnt: 32,
        },
        {
            id: 3,
            bookName: 'Guia turístico da Nova Zelândia',
            bookImage: ImageThree,
            bookAuthor: 'Antonio Amaury Magalhães',
            lowestPrice: 15,
            highestPrice: 20,
            newBooksQnt: 16300010,
            usedBooksQnt: 123322,
        },
    ]);

    function RenderBooks(item) {
        return (
            <BookInfo>
                <BookImage source={item.bookImage} />
                <BookTextContainer>
                    <BookName>{item.bookName}</BookName>
                    <BookAuthor>{item.bookAuthor}</BookAuthor>
                    <BookStorage>
                        <BookPrices>
                            de R$ {item.lowestPrice} a R${item.highestPrice}
                        </BookPrices>
                        <BookQuantity>
                            {item.newBooksQnt} novos e {item.usedBooksQnt}{' '}
                            usados
                        </BookQuantity>
                        <BuyButton>
                            <ButtonText>Ver livros</ButtonText>
                        </BuyButton>
                    </BookStorage>
                </BookTextContainer>
            </BookInfo>
        );
    }

    return (
        <Background>
            {RenderBooks(bookshelf[0])}
            {RenderBooks(bookshelf[1])}
            {RenderBooks(bookshelf[2])}
        </Background>
    );
}

/*
Deu problema de usando o FlatList, mas foi pq errei em algo, aí deixei assim. :)
*/
