function findIndex(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return `Target is in array position ${i}`;
    }
  }
  return "Target does not exist in the array";
}

console.log(findIndex([4, 5, 1, 0, 9], 10));
