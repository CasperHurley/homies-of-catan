import typesOfResources from '../Resources/typesOfResources';
// add roads and settlements/cities somehow
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
        resource: typesOfResources.desertResource,
        quantity: 1
    }
}



export default typesOfTerrains