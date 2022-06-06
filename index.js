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