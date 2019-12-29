import numbersTemplate from './numbersTemplate';
import {randomlyShuffle} from '../../Util/gameUtil';

function buildAllNumberTokens() {
    let numberTokens = [];
    Object.keys(numbersTemplate).forEach(key => {
        for (var i = 0; i < numbersTemplate[key].q; i++) {
            let token = {
                number: numbersTemplate[key].num,
                letter: numbersTemplate[key].letters[i],
                dots: numbersTemplate[key].dots
            }
            numberTokens.push(token);
        }
    })
    return randomlyShuffle(numberTokens);
}

export {buildAllNumberTokens}