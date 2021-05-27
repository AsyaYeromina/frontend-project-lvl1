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
let counter = 0;
let curRandomFirst = generateRandomNumber(LIMIT_RANDOM_NUMBER);
let curRandomSecond = generateRandomNumber(LIMIT_RANDOM_NUMBER);
let curRandomOperation;

const getRandomOperation = () => {
  const curRandomOperationIndex = generateRandomNumber(RANDOM_OPERATION.length - 1);
  return RANDOM_OPERATION[curRandomOperationIndex];
};

const getSolution = (first, second, operation) => Number(eval(`${first} ${operation} ${second}`));

const output = (answer, solution, name) => {
  if (counter === ATTEMPT_COUNTER) {
    return `Congratulations, ${name}!`;
  }
  if (counter < ATTEMPT_COUNTER) {
    counter += 1;
    if (solution === answer) {
      return 'Correct!';
    }
    return `'${answer}' is wrong answer ;(\nCorrect answer was '${solution}'. \nLet's try again, ${name}!`;
  }
};

// const outputOnWin = (name) => `Congratulations, ${name}!`;

const runGame = () => {
  curRandomFirst = generateRandomNumber(LIMIT_RANDOM_NUMBER);
  curRandomSecond = generateRandomNumber(LIMIT_RANDOM_NUMBER);
  curRandomOperation = getRandomOperation();
  const correctSolution = getSolution(curRandomFirst, curRandomSecond, curRandomOperation);
  console.log(`Question: ${curRandomFirst} ${curRandomOperation} ${curRandomSecond}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));

  // if (counter === ATTEMPT_COUNTER) {
  //   return outputToUser(userName);
  // }
  // if (counter < ATTEMPT_COUNTER) {
  //   counter += 1;
  output(userAnswer, correctSolution, userName);
  //   return runGame();
  // }
};

const init = () => {
  console.log(GAME_RULES_MESSAGE);
  console.log(runGame());
};

init();









// // Requests answer to the question with one of the operations +, - or *.
// // Runs 3 times if user answer is correct. If no, starts from sсratch.

// import readlineSync from 'readline-sync';
// import userName from '../src/cli.js';
// import generateRandomNumber from '../modules/random-generator.js';
// // import ATTEMPT_COUNTER from '../modules/variables.js';

// const GAME_RULES_MESSAGE = 'What is the result of the expression?';
// const ATTEMPT_COUNTER = 3;
// const LIMIT_RANDOM_NUMBER = 10;
// const RANDOM_OPERATION = ['+', '-', '*'];
// let counter = 0;
// let curRandomFirst = generateRandomNumber(LIMIT_RANDOM_NUMBER);
// let curRandomSecond = generateRandomNumber(LIMIT_RANDOM_NUMBER);
// let curRandomOperation;

// const getRandomOperation = () => {
//   const curRandomOperationIndex = generateRandomNumber(RANDOM_OPERATION.length - 1);
//   return RANDOM_OPERATION[curRandomOperationIndex];
// };

// const getSolution = (first, second, operation) => Number(eval(`${first} ${operation} ${second}`));

// const gameEngine = (usersInput) => {
//   const rightSolution = getSolution(curRandomFirst, curRandomSecond, curRandomOperation);
//   if (usersInput === rightSolution) {
//     if (counter === ATTEMPT_COUNTER) {
//       console.log('Win');
//     }
//     counter += 1;
//     console.log('Correct');
//     return gameEngine();
//   }
//   console.log('Loose');
// };

// const runGame = () => {
//   curRandomFirst = generateRandomNumber(LIMIT_RANDOM_NUMBER);
//   curRandomSecond = generateRandomNumber(LIMIT_RANDOM_NUMBER);
//   curRandomOperation = getRandomOperation();
//   console.log(`Question: ${curRandomFirst} ${curRandomOperation} ${curRandomSecond}`);
//   const userAnswer = Number(readlineSync.question('Your answer: '));
//   return gameEngine(userAnswer);
// };

// // const output = (gameEngine, userName, correctSolution, userAnswer) => {
// //   'Correct!';
// //   `Correct! \n Congratulations, ${userName}!`;
// //   `'${userAnswer}' is wrong answer ;( \nCorrect answer was '${correctSolution}'.
// // \nLet's try again, ${userName}!`;
// // };

// const init = () => {
//   console.log(GAME_RULES_MESSAGE);
//   console.log(runGame());

//   // while (counter < ATTEMPT_COUNTER) {
//   //   curRandomFirst = generateRandomNumber(LIMIT_RANDOM_NUMBER);
//   //   curRandomSecond = generateRandomNumber(LIMIT_RANDOM_NUMBER);
//   //   curRandomOperation = getRandomOperation();
//   //   console.log(`Question: ${curRandomFirst} ${curRandomOperation} ${curRandomSecond}`);
//   // const userAnswer = Number(readlineSync.question('Your answer: '));
//   // console.log(output(userAnswer));
//   // }
// };

// init();


// //  1. логику повторения - цикл / рекурсия
// //  2. defineState
// //  3. Output
