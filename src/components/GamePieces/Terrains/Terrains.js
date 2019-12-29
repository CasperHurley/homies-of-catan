import React, {useState} from 'react';
import styled from 'styled-components';
import {buildAllTerrains} from './terrainUtil';
import TerrainTile from './TerrainTile';

const TerrainsWrapper = styled.div`
    display: grid;
`

const Terrains = () => {
    const [terrainTiles, setTerrainTiles] = useState(buildAllTerrains());
    return (
        <TerrainsWrapper>
            {
                terrainTiles.map((terrain, index) => {
                    return (
                        <TerrainTile 
                            key={index}
                            terrain={terrain}
                        />
                    )
                })
            }
        </TerrainsWrapper>
    );
};

export default Terrains;