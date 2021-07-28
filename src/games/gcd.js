import gameEngine from '../index.js';
import generateRandomNumber from '../../modules/random-generator.js';

const GAME_RULES_MESSAGE = 'Find the greatest common divisor of given numbers.';
const LIMIT_RANDOM_NUMBER = 100;
const MINIMAL_RANDOM_NUMBER = 0;

const getSolution = (a, b) => {
  if (b > 0) {
    const x = a % b;
    return getSolution(b, x);
  }
  return a;
};

function getRoundData() {
  const curRandomFirst = generateRandomNumber(MINIMAL_RANDOM_NUMBER, LIMIT_RANDOM_NUMBER);
  const curRandomSecond = generateRandomNumber(MINIMAL_RANDOM_NUMBER, LIMIT_RANDOM_NUMBER);
  const curTask = `${curRandomFirst} ${curRandomSecond}`;
  const curSolution = getSolution(curRandomFirst, curRandomSecond).toString();
  return [curTask, curSolution];
}

export default () => gameEngine(GAME_RULES_MESSAGE, getRoundData);
