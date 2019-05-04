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
        for (var i = 0; i < this.word.length; i++) {

            this.word[i].CheckGuess(takeAguess);
            
        }

    }
}
module.exports = Word;