#! /usr/bin/env node 
import inquirer from "inquirer";
// number guessing game 
const guessNumber = await inquirer.prompt([
    { message: "Guess the number", type: "number", name: "answer" }
]);
const answer = 6;
if (guessNumber.answer === answer) {
    console.log("Congratulations! you guess the right number");
}
else {
    console.log('guess again under 20`s');
}
