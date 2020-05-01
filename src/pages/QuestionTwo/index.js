import React, {useState} from 'react';
import {Background, TextButton, TextContainer, Button} from './styles';

export default function QuestionTwo() {
    const [text, setText] = useState('texto pra questão');

    function concatenateText() {
        let matricula = '16300010';
        let newText = text + matricula;
        setText(newText);
    }

    return (
        <Background>
            <TextContainer
                value={text}
                onChangeText={(text) => setText(text)}
            />
            <Button onPress={() => concatenateText()}>
                <TextButton>Acrescentar Matrícula</TextButton>
            </Button>
        </Background>
    );
}
