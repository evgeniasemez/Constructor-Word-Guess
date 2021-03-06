// main game page
var Word = require("./Word");
// initializing variables for the game to start
var wordExample = ["lexus", "toyota", "honda", "mercedes"];
var lives = 5;
var index = getRandomInt(wordExample.length);
var word = new Word(wordExample[index]);
// start the game function 
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

// main game loop with prompt, setting correct/incorrect letters, counting lives down, checking wins/loses
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

// setting random function to go over the words 
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
// checking won or lose
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

