#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);

const answer = await inquirer.prompt([{
name: "userGussNumber",
type: "number",
message: " please guess a number between 1-10 :",
},])

if(answer.userGussNumber === randomNumber) {
    console.log("congrates ypu guess the right number");
}else{
    console.log("you guessed the wrong number");
}