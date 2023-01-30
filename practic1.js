// hosting
console.log("hosting\n");
let userName = "suman sharma"; //camel casing
let UserName = "suman sharma"; //pascal casing
let user_name = "suman sharma"; //snake casing
let USER_NAME = "suman sharma"; //screaming casing
console.log(userName);

//  symbol
console.log("symbol\n");
const testSymbol = Symbol();
const test2Symbol = Symbol("hello world");
console.log(testSymbol);
console.log(test2Symbol);

const mySymbol = Symbol();
const person = {
  [mySymbol]: "John",
  name: () => {
    console.log("ee");
  },
};

person[mySymbol];
console.log(person[mySymbol]);

const mySymbol2 = Symbol();
person[mySymbol2] = () => "Hello World";
console.log(person[mySymbol2]());
console.log(typeof person.name);

//builtin function
console.log("function\n");
let firstNum = 9;
let secondNum = 5;
let answer = Math.sqrt(firstNum);
console.log(answer);
console.log(Math.abs(-5));
console.log(Math.acos(-1));
console.log(Math.max(-1, 6, 32, 67, 3, 88, 43));

//typeconverson/Coercion
console.log("typeconverson/Coercion\n");
const value1 = "5";
const value2 = 9;
let sum = String(value2) + "i" + value1;

console.log(sum);
