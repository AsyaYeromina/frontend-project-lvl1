import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
// const readlineSync = require('readline-sync');
export const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
