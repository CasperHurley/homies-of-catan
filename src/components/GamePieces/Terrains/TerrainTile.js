import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg'
import NumberToken from '../NumberTokens/NumberToken';

const TerrainTileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 500px;
    width: 500px;
    border: 3px solid #CCC;
`

const TerrainTile = (props) => {
    return (
        <TerrainTileWrapper>
            <NumberToken token={props.numberToken} />
            <ReactSVG 
                src={props.terrain.resource.icon}
                beforeInjection={svg => {
                    svg.classList.add('svg-class-name')
                    svg.setAttribute('style', 'height: 200px')
                }}
                fallback={() => <div>Error!</div>}
                loading={() => <div>Loading</div>}
            />
        </TerrainTileWrapper>
    );
};

export default TerrainTile;