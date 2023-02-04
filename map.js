// map
// array
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// map mathode using index from min(0)
const mapedArray = testArray.map((num, i) => {
  return num * i;
});

// map mathode using index from max(array.length)
const mapedArray2 = testArray.map((num, i) => {
  const len = testArray.length;
  return num * (len - i);
});

// printing the array after applying array mathod
console.log(mapedArray);
console.log(mapedArray2);
