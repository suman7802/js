// To count vobels in words
const scan = (str) => {
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      count++;
    }
  }
  return count;
};

console.log(scan("suman"));
console.log(scan("shishir"));
console.log(scan("amrit"));
console.log(scan("maika chola")); // it's prove the function is working properly

// To count vobels in words 2.0
const vowel = ["a", "e", "i", "o", "u"];
const scan2 = (str) => {
  str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    // if (vowel.includes(str[i])) {
    //   count++;
    // }
    vowel.includes(str[i]) && count++;
  }
  return count;
};
console.log(scan2("amrit"));

