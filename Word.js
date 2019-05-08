const Letter = require("./Letter");

class Word {
    constructor(secretWord) {
        var array = [];
        for (var i = 0; i < secretWord.length; i++) {
            var letter = new Letter(secretWord.charAt(i));
            array.push(letter);
        }
        this.word = array;
    }

    // creating a function to show results
    showResult() {
        var results = "";
        for (var i = 0; i < this.word.length; i++) {

            results += this.word[i].toString() + " ";

        }
        return results;
    }
    
    doGuess(takeAguess) {
        var hadCorrectGuess = false;
        for (var i = 0; i < this.word.length; i++) {
            if (this.word[i].CheckGuess(takeAguess)) {
                hadCorrectGuess = true;
            }
        }
        return hadCorrectGuess;

    }
    // inner loop, guessed a correct word
    correctWord() {
        for (var i = 0; i < this.word.length; i++) {
            if (!this.word[i].guessedLetter) {
                return false;
            }
        }
        return true;
    }
}
module.exports = Word;