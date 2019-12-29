import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg'

const TerrainTileWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 500px;
    border: 3px solid #CCC;
`

const TerrainTile = (props) => {
    return (
        <TerrainTileWrapper>
            {/* {props.terrain.name} */}
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