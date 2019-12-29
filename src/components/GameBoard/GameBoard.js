import React from 'react';
import styled from 'styled-components';
import Terrains from '../GamePieces/Terrains/Terrains';

const GameBoardWrapper = styled.div`
`

const GameBoard = () => {
    return (
        <GameBoardWrapper>
            <Terrains />
        </GameBoardWrapper>
    );
};

export default GameBoard;