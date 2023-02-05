// Value Comparison Operators ==, ===, object.is

const a = 5;
const b = 5;
const c = "5";
const d = NaN;
const e = NaN;
const f = +0;
const g = -0;
let test = Object.is(f, g);
let test2 = f === g;
console.log(test);
console.log(test2);
