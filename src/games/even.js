import startGameEngine from '../index.js';
import generateRandomNumber from '../../modules/random-generator.js';

const EVEN_GAME_RULES_MESSAGE = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';
const LIMIT_RANDOM_NUMBER = 100;
const MINIMAL_RANDOM_NUMBER = 1;

const isEven = (number) => !(number % 2);

const convertAnswer = (number) => (isEven(number) ? 'yes' : 'no');

function generateEvenGameData() {
  const evenGameTask = generateRandomNumber(MINIMAL_RANDOM_NUMBER, LIMIT_RANDOM_NUMBER);
  const evenGameSolution = convertAnswer(evenGameTask);
  return [evenGameTask, evenGameSolution];
}

export default () => startGameEngine(EVEN_GAME_RULES_MESSAGE, generateEvenGameData);
