import startGameEngine from '../index.js';
import generateRandomNumber from '../../modules/random-generator.js';

const GAME_RULES_MESSAGE = 'What number is missing in the progression?';
const LIMIT_RANDOM_NUMBER = 100;
const MINIMAL_RANDOM_NUMBER = 0;
const progrsMinLength = 5;
const progrsMaxLength = 15;
const minProgrsDifference = 1;
const maxProgrsDifference = 20;

function generateGameData() {
  const firstRandomNumber = generateRandomNumber(MINIMAL_RANDOM_NUMBER, LIMIT_RANDOM_NUMBER);
  const progrsDifference = generateRandomNumber(minProgrsDifference, maxProgrsDifference);
  const progrsRandomLength = generateRandomNumber(progrsMinLength, progrsMaxLength);
  const randomArrayElementIndex = generateRandomNumber(progrsMinLength, progrsRandomLength);
  const generatedArr = [firstRandomNumber];
  for (let i = 0; i < progrsRandomLength; i += 1) {
    const nextNumber = (generatedArr[generatedArr.length - 1]) + progrsDifference;
    generatedArr.push(nextNumber);
  }
  const correctSolution = generatedArr[randomArrayElementIndex];
  generatedArr[randomArrayElementIndex] = '..';
  return [generatedArr.join(' '), correctSolution.toString()];
}

export default () => startGameEngine(GAME_RULES_MESSAGE, generateGameData);
