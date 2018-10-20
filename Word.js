// Word.js

// Create the Word constructor

var Letter = require("./Letter");

var Word = function(strWord) {
    //
    arrString = strWord.split("");
    console.log("arrString: ", arrString);
    let arrWord = [];
    for (let i = 0; i < arrString.length; i++) {
        const element = new Letter(arrString[i]);
        arrWord.push(element);
    }
    console.log("arrWord: ", arrWord);

    this.displayPuzzle = function() {
        console.log("displayPuzzle");

    }
  
  };

//   let myTestWord = new Word("test");
  
  module.exports = Word;