var Word = require("./Word");
// var word = new Word("table");

// word.doGuess("a");
// console.log(word.showResult());
var wordExample = ["lexus", "toyota", "honda", "mercedes"];
var lives = 5;
var index = getRandomInt(wordExample.length);
var word = new Word(wordExample[index]);

function setUpGame() {
    index = getRandomInt(wordExample.length);
    word = new Word(wordExample[index]);
    lives = 5;
}




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


function doLoop() {
    inquirer.prompt(questions)
        .then(answers => {
            var correctGuess = word.doGuess(answers.letter);
            if (correctGuess) {
                console.log("Correct! ");
            }
            else {
                console.log("Incorrect! ");
                lives--;
                console.log("you have " + lives + " remaining");
            }
            checkWonOrLost();
            //if it's the correct letter, we assign it for each place that it works.
            console.log(word.showResult(), answers);
            //if the word is not complete, runn the functionn again.
            doLoop();
        });

}
doLoop();


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function checkWonOrLost() {
    if (word.correctWord()) {
        console.log("Congrats, you won! ");
        setUpGame();
    }
    else if (lives === 0) {

        console.log("Sorry, you lost! Try next time! ");
        setUpGame();
    }
}


// TODO:
// if the same letter guessed 
// prompt validation on guesses: no bad imput! 

