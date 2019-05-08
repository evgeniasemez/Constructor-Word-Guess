
class Letter {
    constructor(letter) {
        this.secretLetter = letter;
        this.guessedLetter = false;
    }
    toString() {
        if (this.guessedLetter) {
            return this.secretLetter;
        }
        else {
            return "_";
        }
    }
    CheckGuess(character) {
        if (this.guessedLetter) {
            return false;
        }
        else if (character === this.secretLetter) {
            this.guessedLetter = true;
            return true;
        }
        else {
            return false;
        }
    }
}

module.exports = Letter;



