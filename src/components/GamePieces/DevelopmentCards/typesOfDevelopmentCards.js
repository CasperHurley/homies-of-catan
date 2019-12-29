// 25 Total Development Cards
// 14 Knight/Soldier Cards, 6 Progress Cards, 5 Victory Point Cards

import {
    knightCardActions,
    roadBuildingCardActions,
    yearOfPlentyCardActions,
    monopolyCardActions,
    victoryPointCardActions
} from './cardActions';

const categories = {
    KNIGHT: "Knight",
    PROGRESS: "Progress",
    VICTORY_POINT: "Victory Point"
}

function getFrameColorForCategory(category) {
    let frameColor;
    if (category === categories.KNIGHT) {
        frameColor = "purple"
    } else if (category === categories.PROGRESS) {
        frameColor = "green"
    } else if (category === categories.VICTORY_POINT) {
        frameColor = "orange"
    }
    return frameColor;
}

const typesOfDevelopmentCards = {
    knightCard: {
        name: "Knight",
        explanation: "Move the robber. Steal 1 resource from the owner of a settlement or city adjacent to the robber's new terrain.",
        category: categories.KNIGHT,
        actions: knightCardActions,
        quantity: 14
    },
    monopolyCard: {
        name: "Monopoly",
        explanation: "When you play this card, announce 1 type of resource. All other players must give you all of their resources of that type.",
        category: categories.PROGRESS,
        actions: monopolyCardActions,
        quantity: 2
    },
    roadBuildingCard: {
        name: "Road Building",
        explanation: "Place 2 new roads as if you had built them.",
        category: categories.PROGRESS,
        actions: roadBuildingCardActions,
        quantity: 2
    },
    yearOfPlentyCard: {
        name: "Year of Plenty",
        explanation: "",
        category: categories.VICTORY_POINT,
        actions: yearOfPlentyCardActions,
        quantity: 2
    },
    chapelCard: {
        name: "Chapel",
        explanation: "",
        category: categories.VICTORY_POINT,
        actions: victoryPointCardActions,
        quantity: 1
    },
    libraryCard: {
        name: "Library",
        explanation: "",
        category: categories.VICTORY_POINT,
        actions: victoryPointCardActions,
        quantity: 1
    },
    marketCard: {
        name: "Market",
        explanation: "",
        category: categories.VICTORY_POINT,
        actions: victoryPointCardActions,
        quantity: 1
    },
    universityCard: {
        name: "University",
        explanation: "",
        category: categories.VICTORY_POINT,
        actions: victoryPointCardActions,
        quantity: 1
    }
}

export {categories, getFrameColorForCategory, typesOfDevelopmentCards}