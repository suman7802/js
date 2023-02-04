// sets
// it prevent to add data repeatly
const testSet = new Set(["suman", "shishir", "amrit", "A", "B", "C"]);
testSet.add("D");
testSet.add("apple");
testSet.delete("apple");
console.log(testSet);
