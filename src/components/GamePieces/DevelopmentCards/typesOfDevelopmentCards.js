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
        message: "",
        explanation: "",
        category: categories.KNIGHT,
        actions: knightCardActions,
        quantity: 14
    },
    monopolyCard: {
        name: "Monopoly",
        message: "",
        explanation: "",
        category: categories.PROGRESS,
        actions: monopolyCardActions,
        quantity: 2
    },
    roadBuildingCard: {
        name: "Road Building",
        message: "",
        explanation: "",
        category: categories.PROGRESS,
        actions: roadBuildingCardActions,
        quantity: 2
    },
    yearOfPlentyCard: {
        name: "Year of Plenty",
        message: "",
        explanation: "",
        category: categories.VICTORY_POINT,
        actions: yearOfPlentyCardActions,
        quantity: 2
    },
    chapelCard: {
        name: "Chapel",
        message: "",
        explanation: "",
        category: categories.VICTORY_POINT,
        actions: victoryPointCardActions,
        quantity: 1
    },
    libraryCard: {
        name: "Library",
        message: "",
        explanation: "",
        category: categories.VICTORY_POINT,
        actions: victoryPointCardActions,
        quantity: 1
    },
    marketCard: {
        name: "Market",
        message: "",
        explanation: "",
        category: categories.VICTORY_POINT,
        actions: victoryPointCardActions,
        quantity: 1
    },
    universityCard: {
        name: "University",
        message: "",
        explanation: "",
        category: categories.VICTORY_POINT,
        actions: victoryPointCardActions,
        quantity: 1
    }
}

export {categories, getFrameColorForCategory, typesOfDevelopmentCards}