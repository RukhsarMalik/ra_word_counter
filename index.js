#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt({
    name: "sentences",
    type: "input",
    message: "Enter Your Sentence to count the words: "
});
const words = answer.sentences.trim().split(" ");
console.log(words);
console.log(`Your words length is ${words.length}`);
