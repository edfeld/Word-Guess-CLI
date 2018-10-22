//  index.js

var inquirer = require('inquirer')
var Letter = require('./Letter.js')
var Word = require('./Word.js')


Puzzle = {
    arrPuzzles: [
        "PEST",
        "PRESTIDIGITATION",
        "MALADROIT",
        "JEJUNE",
        "PSYCHOLOGY",
        "SALATIOUS",
        "TRIDECAPHOBIA",
        "CEPHALOPOD"
    ],

    arrLettersPrevGuessed: [],
    
    puzzleCount: 0,

    wrongAnswersAllow: 10,
    
    isEndGame: false,
    
    selectPuzzle: function() {
        if (this.puzzleCount < this.arrPuzzles.length) {
            console.log("new puzzle: ", this.arrPuzzles[this.puzzleCount]);
            let strPuzzle = this.arrPuzzles[this.puzzleCount];
            this.puzzleCount++;
            return strPuzzle;
        } else {
            this.isEndGame = true;
            return "done";
        }
        
    },

    boolEndGame: function () {
        return this.isEndGame;
    } 

}

var askLetter = function() {
    if (!(Puzzle.boolEndGame())) {
        inquirer.prompt([
            {
                type: 'input',
                name: "userGuess",
                message: "Choose a letter: ",
            }
        ]).then(function(userInput) {
            console.log(typeof userInput.userGuess);
            console.log("User Guess: ", userInput.userGuess.toUpperCase());
            if (userInput.userGuess.search(/[a-zA-Z]/g) > -1) {
                console.log("enter UpdatePuzzle");
                let letterChoice = userInput.userGuess.toUpperCase();
                if (Puzzle.arrLettersPrevGuessed.indexOf(letterChoice) < 0) {
                    let letterFound = myPuzzleWord.updatePuzzle(letterChoice);
                    if (letterFound) {
                        Puzzle.arrLettersPrevGuessed.push(letterFound);
                    } else {
                        Puzzle.wrongAnswersAllow--;
                        if(Puzzle.wrongAnswersAllow === 0);
                        
                    }

                }
            }
            console.log("\tWrong Guesses Left: " + Puzzle.wrongAnswersAllow + '\n');
            myPuzzleWord.displayPuzzle();
            askLetter();
            
        });
    }
}

let myPuzzleWord = new Word(Puzzle.selectPuzzle());
myPuzzleWord.displayPuzzle();
askLetter();
