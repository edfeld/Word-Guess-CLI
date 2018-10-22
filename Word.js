// Word.js

// Create the Word constructor

var Letter = require("./Letter");

var Word = function(strWord) {
    console.log("strWord: ", strWord);
    arrString = strWord.split("");
    console.log("arrString: ", arrString);
    let arrWord = [];
    for (let i = 0; i < arrString.length; i++) {
        const element = new Letter(arrString[i]);
        console.log("14 letter: ", element.getLtr());
        arrWord.push(element);
    }
    console.log("arrWord: ", arrWord);

    this.displayPuzzle = function() {
        console.log("displayPuzzle");
        let strLetterDisplay = "";
        arrWord.forEach(letter => {
            console.log("getletter: ", letter.getLtr());
            console.log("letter: ", letter.getDisplayLtr());
            strLetterDisplay += letter.getDisplayLtr();
        });
        // console.log(strLetterDisplay.split(""));
        console.log("Guess this word:\n\n\t" + strLetterDisplay.split("").join(" ") + "\n");

    }

    this.updatePuzzle = function (char) {
        let isCharFound = false;
        arrWord.forEach(letter => {
            if (char === letter.getLtr()) {
                letter.setIsLtrGuess(true);
                ischarfound = true;
            }

        });
    }

    
  
  };

//   let myTestWord = new Word("test");
  
  module.exports = Word;