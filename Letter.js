
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
        if (character === this.secretLetter) {
            this.guessedLetter = true;
        }
    }
}

module.exports = Letter;



