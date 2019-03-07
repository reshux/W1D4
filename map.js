var words = ["ground", "control", "to", "major", "tom"]

// var wordLength = words.map(function(word) {
//   return word.length;
// });

// var wordUpper = words.map(function(word) {
//   return word.toUpperCase();
// });

// var wordReverse = words.map(function(word) {
//   return word.split('').reverse().join('');
// });

// console.log(wordLength, wordUpper, wordReverse)

function wordManipulation(array,callback) {
  var outputArray = []
  for (var word of array) {
    outputArray.push(callback(word))
  }
  console.log(outputArray)
}

function wordLength(word) {
  return word.length;
}

function wordUpper(word) {
  return word.toUpperCase();
}

function wordReverse(word) {
  return word.split('').reverse().join('');
}

wordManipulation(words, wordLength)
wordManipulation(words, wordUpper)
wordManipulation(words, wordReverse)