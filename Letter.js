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
        console.log("calling getDisplayLtr")
        console.log("bool: ", this.isLtrGuess)
        if (this.strLtr === " ") {
            console.log("return space");
            return " ";
        } else if (this.isLtrGuess === true) {
            console.log("bool2: ", this.isLtrGuess);
          return this.strLtr;
      } else {
          console.log("Returning underscore");
        return "_";
      }
    };

    this.setLtr = function (strletter) {
        this.strltr = strletter;
    }

    this.getLtr = function() {
        return this.strLtr;
    }

    // set the value of isltrGuess. 
    this.setIsLtrGuess = function( isLetterGuess) {
        this.isLtrGuess = isLetterGuess;
        console.log("set isLtrGuess: ", this.isLtrGuess);
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