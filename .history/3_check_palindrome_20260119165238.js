function isPalindrome(str) {
  str = str.toLowerCase();
 
  let reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("RaceCar")); // true
console.log(isPalindrome("programming")); // false
