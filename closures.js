// Exercice 1 - Loaded Die

var rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}

// console.log(rollDie());  // 1 (for example)


function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var indexer = -1;

  return function() {
    indexer++;
    return list[indexer];
  }

}

var rollLoadedDie = makeLoadedDie();

// console.log(rollLoadedDie());  // 5
// console.log(rollLoadedDie());  // 4
// console.log(rollLoadedDie());  // 6

//////////////////////////////

// Exercice 2 - Countdown Generator

var countdownGenerator = function (x) {
  var countdown = x
  return function() {
    if (countdown > 0) {
      console.log("T-minus " + countdown)
    } else if (countdown === 0) {
      console.log("Blast Off!")
    } else {
      console.log("Rockets already gone, bub!")
    }
    countdown--
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!