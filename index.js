var Word = require("./Word");
// var word = new Word("table");

// word.doGuess("a");
// console.log(word.showResult());

var wordExample = ["lexus", "toyota", "honda", "mercedes"];
var index = getRandomInt(wordExample.length);
wordExample[index];
var word = new Word(wordExample[index]);


var inquirer = require('inquirer');

function processAnswers(answers) {
    console.log("And your answers are:", answers);
}
var questions = [
    {
        message: "Guess the word!",
        type: "input",
        name: "letter"
    }];
inquirer.prompt(questions).then(answers => {
    console.log(word.showResult(), answers);
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// TODO:
// inner game loop
// outer game loop
// implement guessing
// implement lives
