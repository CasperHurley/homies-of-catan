import typesOfResources from '../Resources/typesOfResources';

const typesOfTerrains = {
    fieldTerrain: {
        name: "Field",
        resource: typesOfResources.grainResource,
        quantity: 4
    },
    forestTerrain: {
        name: "Forest",
        resource: typesOfResources.lumberResource,
        quantity: 4
    },
    pastureTerrain: {
        name: "Pasture",
        resource: typesOfResources.woolResource,
        quantity: 4
    },
    mountainTerrain: {
        name: "Mountain",
        resource: typesOfResources.oreResource,
        quantity: 3
    },
    hillsTerrain: {
        name: "Hills",
        resource: typesOfResources.brickResource,
        quantity: 3
    },
    desertTerrain: {
        name: "Desert",
        resource: null,
        quantity: 1
    }
}



export default typesOfTerrains