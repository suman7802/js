// weak map = it's like a object with limited functions only, folling function are as follows
// we can use set(), get(), has(), delete(), clear()
const weakMap1 = new Map();
weakMap1.set("studentInfo", {
  name: "suman sharma",
  campus: "patan multiple campus",
  location: "imadol",
});
weakMap1.set("systemInfo", {
  type: "laptop",
  brand: "dell",
  cpu: "intel i5",
  gpu: "amdRedon",
});

// printing the value of hole weak map
console.log(weakMap1);

// using get() to acess perticular part of weak-map = system
let laptop = weakMap1.get("systemInfo");
console.log(laptop);

// using get() to acess perticular part of weak-map = student
console.log(weakMap1.get("studentInfo"));

//using delete()
let iam = weakMap1.delete("systemInfo");
// console.log(iam); it's return true
console.log(iam);

//printing main weakMap for checking delete() was worked or not
console.log(weakMap1);

// using has() to check following key is availabel or not
let testHas = weakMap1.has("studentInfo");
console.log(testHas);

// using clear() to clear all the data and object will be impty
weakMap1.clear();
console.log(weakMap1);
