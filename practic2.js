// type conversion
let num1 = 5;
let num2 = 6.5;

// implicit converson
console.log(num1 * num2);
let newNum2 = Math.round(num2);
console.log(newNum2); // implicit converson

//explicite converson
let mixFormate = String(num2) + " I " + num1;
console.log(mixFormate); //explicite converson

//typed array
const typedArray = new Int8Array(5);
typedArray[0] = 13;
typedArray[1] = 125;
typedArray[2] = 130; // can't print 130 so it will print between -128 to 127
typedArray[3] = 140; // can't print
typedArray[4] = 150; // can't print
for (let index = 0; index < 5; index++) {
  console.log(typedArray[index]);
}
// print between -128 to 127

// array
let normalArray = [];
for (let index = 0; index < 5; index++) {
  normalArray.push(index);
}
console.log(normalArray);
