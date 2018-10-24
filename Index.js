//  index.js

var inquirer = require('inquirer')
var Letter = require('./Letter.js')
var Word = require('./Word.js')


Puzzle = {
    arrPuzzlelist: [
        "PEST",
        "PRESTIDIGITATION",
        "MALADROIT",
        "JEJUNE",
        "PSYCHOLOGY",
        "UBIQUITOUS",
        "TRIDECAPHOBIA",
        "CEPHALOPOD"
    ],

    arrPuzzles: [],

    arrLettersPrevGuessed: [],

    puzzleCount: 0,

    wrongAnswersAllow: 10,

    isEndGame: false,

    shuffle: function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    },

    selectPuzzle: function () {
        if (this.puzzleCount < this.arrPuzzles.length) {
            // console.log("new puzzle: ", this.arrPuzzles[this.puzzleCount]);
            let strPuzzle = this.arrPuzzles[this.puzzleCount];
            this.puzzleCount++;
            return strPuzzle;
        } else {
            // console.log("returning True for end of game!");
            this.isEndGame = true;
            return null;
        }

    },

    boolEndGame: function () {
        return this.isEndGame;
    }

}


let myPuzzleWord = {};

var askLetter = function () {
    
    // console.log("Puzzle count and Puzzle Length: ", Puzzle.puzzleCount, Puzzle.arrPuzzles.length);
    if (!myPuzzleWord.isPuzzleSolved() && (Puzzle.wrongAnswersAllow > 0)) {
        inquirer.prompt([{
            type: 'input',
            name: "userGuess",
            message: "Choose a letter: ",
        }]).then(function (userInput) {
            // console.log(typeof userInput.userGuess);
            // console.log("User Guess: ", userInput.userGuess.charAt(0).toUpperCase());
            let letterChoice = userInput.userGuess.charAt(0).toUpperCase();
            if (letterChoice.search(/[a-zA-Z]/g) > -1) {
                // console.log("enter UpdatePuzzle");
                if (Puzzle.arrLettersPrevGuessed.indexOf(letterChoice) < 0) {
                    let letterFound = myPuzzleWord.updatePuzzle(letterChoice);
                    // console.log("letterFound", letterFound);
                    if (letterFound) {
                        Puzzle.arrLettersPrevGuessed.push(letterChoice);
                    } else {
                        // look for the letter in the previous guess array
                        if (Puzzle.arrLettersPrevGuessed.indexOf(letterChoice) < 0) {
                            Puzzle.arrLettersPrevGuessed.push(letterChoice);
                            Puzzle.wrongAnswersAllow--;
                            if (Puzzle.wrongAnswersAllow === 0) {
                                console.log("\n======>  wrong answer limit has been reached");
                                // console.log("the correct answer is: ", myPuzzleWord.displaySolution());
                            }
                        }
                    }
                }
            }
            if (Puzzle.wrongAnswersAllow > 0) {
                console.log("\nPrevious Guesses: ", Puzzle.arrLettersPrevGuessed.join(" "));
                console.log("\tWrong Guesses Left: " + Puzzle.wrongAnswersAllow + '\n');
                myPuzzleWord.displayPuzzle();
            }
            askLetter();

        });
    } else {
        if (Puzzle.wrongAnswersAllow > 0){
            console.log("\nPuzzle Solved: ", myPuzzleWord.displaySolution());
        } else {
            console.log("\nThe correct answer is: ", myPuzzleWord.displaySolution());
        }
        const strPuzzle = Puzzle.selectPuzzle();
        if (!Puzzle.boolEndGame()) {
            Puzzle.arrLettersPrevGuessed = [];
            console.log("\nPrevious Guesses: ");
            myPuzzleWord = {};
            myPuzzleWord = new Word(strPuzzle);
            // console.log("Length of word: ", strPuzzle.length);
            if (strPuzzle.length > 10) {
                Puzzle.wrongAnswersAllow = 8;
            } else {
                Puzzle.wrongAnswersAllow = 10;
            }
            console.log("New Puzzle, Wrong Guesses left: ", Puzzle.wrongAnswersAllow);
            myPuzzleWord.displayPuzzle();
            askLetter();
        } else {
            console.log("\n==========> This Game is done\n");
        }
    }
}

Puzzle.arrPuzzles = Puzzle.shuffle(Puzzle.arrPuzzlelist);
// console.log("Puzzle arr: ", Puzzle.arrPuzzles)
const strPuzzle = Puzzle.selectPuzzle();
myPuzzleWord = {};
console.log("\nPrevious Guesses: ");
myPuzzleWord = new Word(strPuzzle);
if (strPuzzle.length > 10) {
    Puzzle.wrongAnswersAllow = 8;
} else {
    Puzzle.wrongAnswersAllow = 10;
}
console.log("\tWrong Guesses Left: " + Puzzle.wrongAnswersAllow + '\n');
myPuzzleWord.displayPuzzle();
askLetter();