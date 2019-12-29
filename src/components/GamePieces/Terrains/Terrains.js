import React, {useState} from 'react';
import styled from 'styled-components';
import {buildAllTerrains} from './terrainUtil';
import TerrainTile from './TerrainTile';
import {buildAllNumberTokens} from '../NumberTokens/numberTokensUtil';

const TerrainsWrapper = styled.div`
    display: grid;
`

const Terrains = () => {
    const [terrainTiles, setTerrainTiles] = useState(buildAllTerrains());
    const numberTokens = buildAllNumberTokens();
    let matchedDesertWithNoNumberToken = false;
    return (
        <TerrainsWrapper>
            {
                terrainTiles.map((terrain, index) => {
                    let numberToken = numberTokens[index]
                    if (terrain.name === "Desert") {
                        matchedDesertWithNoNumberToken = true;
                    } else if (matchedDesertWithNoNumberToken) {
                        numberToken = numberTokens[index - 1]
                    }
                    return (
                        <TerrainTile 
                            key={index}
                            terrain={terrain}
                            numberToken={numberToken}
                        />
                    )
                })
            }
        </TerrainsWrapper>
    );
};

export default Terrains;