function findWaldo(arr, found) {
  arr.forEach(function (person, index){
    if (person === "Waldo") {
      found(index)
    }
  })
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
