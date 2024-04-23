#! /usr/bin/env node

// SHABANG

// import the 'inquirer' module, which is a command line inteface for Node.js

import inquirer from 'inquirer'

// declear a const 'answer' and assign it to the result of inquirer.prompt function

const answers: {
    Sentence: string;
} = await inquirer.prompt([
    {
        name: 'Sentence',
        type: 'input',
        message: 'Enter your sentence to count the word'
    }
])

const words = answers.Sentence.trim().split(' ');

console.log(`The number of words in the sentence is ${words.length}`)