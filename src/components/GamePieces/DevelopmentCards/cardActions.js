const devCardActionNames = {
    ADD_KNIGHT: "ADD_KNIGHT",
    MOVE_ROBBER: "MOVE_ROBBER",
    BUILD_TWO_ROADS: "BUILD_TWO_ROADS",
    DRAW_TWO_RESOURCE_CARDS: "DRAW_TWO_RESOURCE_CARDS",
    STEAL_RESOURCE_FROM_OTHER_USERS: "STEAL_RESOURCE_FROM_OTHER_USERS",
    ADD_VICTORY_POINT: "ADD_VICTORY_POINT"
}

const knightCardActions = [devCardActionNames.ADD_KNIGHT, devCardActionNames.MOVE_ROBBER]
const roadBuildingCardActions = [devCardActionNames.BUILD_TWO_ROADS]
const yearOfPlentyCardActions = [devCardActionNames.DRAW_TWO_RESOURCE_CARDS]
const monopolyCardActions = [devCardActionNames.STEAL_RESOURCE_FROM_OTHER_USERS]
const victoryPointCardActions = [devCardActionNames.ADD_VICTORY_POINT]

export {
    devCardActionNames,
    knightCardActions,
    roadBuildingCardActions,
    yearOfPlentyCardActions,
    monopolyCardActions,
    victoryPointCardActions
}