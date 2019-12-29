import React from 'react';
import styled from 'styled-components';

const NumberTokenWrapper = styled.div`
    border-radius: 360px;
    border: 2px solid ${props => props.color};
    min-width: 70px;
    min-height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.color};
`
const Letter = styled.div`
`
const Number = styled.div`
    font-size: 26px;
`
const Dots = styled.div`
`

const NumberToken = (props) => {
    let dotsText = "";
    for (let i = 0; i < props.token.dots; i++) {
        dotsText += "."
    }
    let color = props.token.number === 6 || props.token.number === 8 ? "red" : "#444";
    return (
        <NumberTokenWrapper color={color}>
            <Letter>{props.token.letter}</Letter>
            <Number>{props.token.number}</Number>
            <Dots>{dotsText}</Dots>
        </NumberTokenWrapper>
    );
};

export default NumberToken;