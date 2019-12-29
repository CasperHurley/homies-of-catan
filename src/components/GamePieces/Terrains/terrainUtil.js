import typesOfTerrains from './typesOfTerrain'

function buildAllTerrains() {
    let allTerrains = []
    Object.keys(typesOfTerrains).forEach(type => {
        for (var i = 0; i < typesOfTerrains[type].quantity; i++) {
            allTerrains.push(typesOfTerrains[type]);
        }
    })
    return allTerrains
}

export {
    buildAllTerrains
}