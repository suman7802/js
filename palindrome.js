const palondrome = (str) => {
  // length of string
  let len = str.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    //checking for the semilarity
    if (str[i] !== str[len - 1 - i]) {
      return "Following word is not a palindrome!";
    }
  }
  return "Following word is a palindrome!";
};

console.log("welcome in palindrome");
console.log(palondrome("mom"));
console.log(palondrome("momo"));
console.log(palondrome("dad"));
