// Word.js

// Create the Word constructor

var Letter = require("./Letter");

var Word = function(strWord) {
    // console.log("strWord: ", strWord);
    let arrString = strWord.split("");
    // console.log("arrString: ", arrString);
    let arrWord = [];
    for (let i = 0; i < arrString.length; i++) {
        const element = new Letter(arrString[i]);
        // console.log("14 letter: ", element.getLtr());
        arrWord.push(element);
    }
    // console.log("arrWord: ", arrWord);

    this.displayPuzzle = function() {
        // console.log("displayPuzzle");
        let strLetterDisplay = "";
        arrWord.forEach(letter => {
            // console.log("getletter: ", letter.getLtr());
            // console.log("letter: ", letter.getDisplayLtr());
            strLetterDisplay += letter.getDisplayLtr();
        });
        // console.log(strLetterDisplay.split(""));
        console.log("Guess this word:\n\n\t" + strLetterDisplay.split("").join(" ") + "\n");

    }

    // this.wordLength = function () {
    //     console.log("arrWord: ", arrWord);
    //     return this.arrWord.length;
    // }

    this.displaySolution = function() {
        // console.log("Method: displaySolution");
        let strLetterDisplay = "";
        arrWord.forEach(letter => {
            // console.log("getletter: ", letter.getLtr());
            // console.log("letter: ", letter.getDisplayLtr());
            strLetterDisplay += letter.getLtr();
        });
        // console.log(strLetterDisplay.split(""));
        return strLetterDisplay;

    }


    this.updatePuzzle = function (char) {
        let isCharFound = false;
        arrWord.forEach(letter => {
            if (char === letter.getLtr()) {
                letter.setIsLtrGuess(true);
                isCharFound = true;
            }
        });
        return isCharFound;
    }

    this.isPuzzleSolved = function () {
        // console.log("starting isPuzzleSolved");
        let isPuzSolved;
        for (let i = 0; i < arrWord.length; i++) {
            const letter = arrWord[i];
            if (letter.getIsLtrGuess() === false) {
                // console.log("we should be returning false");
                return false;
            }
        }
        // arrWord.forEach(letter => {
        //     // if one of the letters has not been guessed, return false
        //     console.log("isPuzzleSolved letter: ", letter.getLtr(), letter.getIsLtrGuess());
        //     if (letter.getIsLtrGuess() === false) {
        //         console.log("we should be returning false");
        //         return false;
        //     }
        // });
        // console.log("isPuzzleSolved returns true");
        return true;
    }


  
  };

//   let myTestWord = new Word("test");
  
  module.exports = Word;