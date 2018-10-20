// Create the Letter constructor
var Letter = function(strLetter) {
    //

    this.strLtr;
    if (strLetter.search(/[a-zA-Z\s]/g) > -1) {
        this.strLtr = strLetter
        console.log("strLtr: ", this.strLtr);

    }
    
    this.isLtrGuess = false;

    this.getDisplayLtr = function() {
        if (strLtr === " ") {
            return " ";
        } else if (this.isLtrGuess === true) {
          return strltr;
      } else {
        return "_";
      }
    };

    this.setLtr = function (strletter) {
        this.strltr = strletter;
    }

    // set the value of isltrGuess. 
    this.setIsLtrGuess = function( isLetterGuess) {
        this.isLtrGuess = isLetterGuess;
    }

    this.getIsLtrGuess = function() {
        return this.isLtrGuess;
    }

    // pass the user's letter guess to determine if it's a match. return true or false.
    this.LetterGuessed = function (strLetter) {
        if (this.strltr === strLetter) {
            return true;
        } else {
            return false;
        }
    }

  };

//   let arrLetters = [];

//   let first = new Letter("A")
//   arrLetters.push(first);
//   console.log(first)
//   let third = new Letter(" ");
//   arrLetters.push(third);
//   let second = new Letter("B");
//   arrLetters.push(second);

//   console.log("arrLetters: ", arrLetters);
//   console.log("first found?: ", arrLetters[0].isLtrGuess);
//   console.log("isLetterGuessed: ", arrLetters[0].LetterGuessed("A"));
//   arrLetters[0].setIsLtrGuess(true);
//   console.log(first.getIsLtrGuess());
//   console.log("isLetterGuess: ", arrLetters[0].getIsLtrGuess());
  
  module.exports = Letter;