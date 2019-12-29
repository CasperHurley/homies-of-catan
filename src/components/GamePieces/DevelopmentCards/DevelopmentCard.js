import React, {useState} from 'react';
import styled from 'styled-components';
import {getFrameColorForCategory} from './typesOfDevelopmentCards'

const DevelopmentCardWrapper = styled.div`
    color: #444;
    display: flex;
    flex-direction: column;

    &:hover {
        cursor: ${props => props.isExpanded ? null : "pointer"};
    }
`
const Title = styled.div`
    background: ${props => props.frameColor};
    font-size: 24px;
`
const CardPicture = styled.img`
`
const Message = styled.div`
    font-size: 22px;
`
const Explanation = styled.div`
    font-size: 16px;
`

const DevelopmentCard = (props) => {
    const [isExpanded, toggleExpanded] = useState(true);
    const frameColor = getFrameColorForCategory(props.card.category)
    return (
        <DevelopmentCardWrapper isExpanded={isExpanded} onClick={() => toggleExpanded(!isExpanded)}>
            <Title frameColor={frameColor}>{props.card.name}</Title>
            {/* <CardPicture /> */}
            <Message>{props.card.message}</Message>
            <Explanation>{props.card.explanation}</Explanation>
        </DevelopmentCardWrapper>
    );
};

export default DevelopmentCard;