// Requests answer to the question with one of the operations +, - or *.
// Runs 3 times if user answer is correct. If no, starts from sсratch.

import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import generateRandomNumber from '../modules/random-generator.js';
// import ATTEMPT_COUNTER from '../modules/variables.js';

const GAME_RULES_MESSAGE = 'What is the result of the expression?';
const ATTEMPT_COUNTER = 3;
const LIMIT_RANDOM_NUMBER = 10;
const RANDOM_OPERATION = ['+', '-', '*'];
// let counter = 0;
let curRandomFirst = generateRandomNumber(LIMIT_RANDOM_NUMBER);
let curRandomSecond = generateRandomNumber(LIMIT_RANDOM_NUMBER);
let curRandomOperation;

const getRandomOperation = () => {
  const curRandomOperationIndex = generateRandomNumber(RANDOM_OPERATION.length - 1);
  return RANDOM_OPERATION[curRandomOperationIndex];
};

const getSolution = (first, second, operation) => Number(eval(`${first} ${operation} ${second}`));

const defineGameState = (usersInput) => {

};

const runGame = () => {
  curRandomFirst = generateRandomNumber(LIMIT_RANDOM_NUMBER);
  curRandomSecond = generateRandomNumber(LIMIT_RANDOM_NUMBER);
  curRandomOperation = getRandomOperation();
  console.log(`Question: ${curRandomFirst} ${curRandomOperation} ${curRandomSecond}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  defineGameState(userAnswer);
  const correctSolution = getSolution(curRandomFirst, curRandomSecond, curRandomOperation);
  for (let i = 0; i < ATTEMPT_COUNTER; i += 1) {
    if (userAnswer === correctSolution) {
      if (i === ATTEMPT_COUNTER) {
        return `Correct! \n Congratulations, ${userName}!`;
      }
      return 'Correct!';
    }
    return `'${userAnswer}' is wrong answer ;( \nCorrect answer was '${correctSolution}'. \nLet's try again, ${userName}!`;
  }
};

// const output = (defineGameState, userName, correctSolution, userAnswer) => {
//   'Correct!';
//   `Correct! \n Congratulations, ${userName}!`;
//   `'${userAnswer}' is wrong answer ;( \nCorrect answer was '${correctSolution}'. \nLet's try again, ${userName}!`;
// };

const init = () => {
  console.log(GAME_RULES_MESSAGE);
  console.log(runGame());

  // while (counter < ATTEMPT_COUNTER) {
  //   curRandomFirst = generateRandomNumber(LIMIT_RANDOM_NUMBER);
  //   curRandomSecond = generateRandomNumber(LIMIT_RANDOM_NUMBER);
  //   curRandomOperation = getRandomOperation();
  //   console.log(`Question: ${curRandomFirst} ${curRandomOperation} ${curRandomSecond}`);
  // const userAnswer = Number(readlineSync.question('Your answer: '));
  // console.log(output(userAnswer));
  // }
};

init();
