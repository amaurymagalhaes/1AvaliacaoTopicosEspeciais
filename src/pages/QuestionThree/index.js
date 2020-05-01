import React, {useState, useEffect} from 'react';
import {
    Background,
    CarouselContainer,
    MoveButton,
    ButtonText,
    ImageContainer,
} from './styles';

import ImageOne from '../../images/1.png';
import ImageTwo from '../../images/2.png';
import ImageThree from '../../images/3.png';

// import { Container } from './styles';

export default function QuestionThree() {
    const [collection, setCollection] = useState([
        {
            url: ImageOne,
        },
        {
            url: ImageTwo,
        },
        {
            url: ImageThree,
        },
    ]);

    const [item, setItem] = useState({
        url: collection[0].url,
        index: 0,
    });

    function handleForward() {
        const lastIndex = item.index;
        console.log(lastIndex);
        console.log(collection.length);

        if (lastIndex === collection.length - 1) {
            return setItem({
                url: collection[0].url,
                index: 0,
            });
        } else {
            return setItem({
                url: collection[lastIndex + 1].url,
                index: lastIndex + 1,
            });
        }
    }
    function handleBackward() {
        const lastIndex = item.index;

        if (lastIndex === 0) {
            return setItem({
                url: collection[collection.length - 1].url,
                index: collection.length - 1,
            });
        } else {
            return setItem({
                url: collection[lastIndex - 1].url,
                index: lastIndex - 1,
            });
        }
    }

    return (
        <Background>
            <CarouselContainer>
                <MoveButton onPress={() => handleBackward()}>
                    <ButtonText>{'<'}</ButtonText>
                </MoveButton>
                <ImageContainer source={item.url} />
                <MoveButton onPress={() => handleForward()}>
                    <ButtonText>{'>'}</ButtonText>
                </MoveButton>
            </CarouselContainer>
            <ButtonText>{item.index + 1}</ButtonText>
        </Background>
    );
}
