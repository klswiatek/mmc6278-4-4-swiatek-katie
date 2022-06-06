var words = [
    'bananas',
    'grapes',
    'carousel',
    'milkshake',
    'javascript',
    'limousine',
    'chocolate',
    'programming',
    'meatloaf',
    'ukulele',
    'mango'
  ]

var chooseRandomWord = function (array) {
      return array[Math.floor(Math.random() * array.length)];
  }

  var chosenWord = chooseRandomWord(words);
  console.log(chosenWord) 

//*Word to Guess
var wordToGuess = () => {
    for (var i=0; i<chosenWord.length; i++) {
        wordToGuess.push("_");
    }
    return underScore; 
}
document.getElementById("word-to-guess").innerHTML = wordToGuess;
//*Previous Word

//*Inncorect Guesses


//*Remaining Guesses
var remainingGuessDisplay = 10;
document.getElementById("remaining-guesses").innerHTML = remainingGuessDisplay;

