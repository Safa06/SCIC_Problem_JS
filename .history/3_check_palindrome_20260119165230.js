function isPalindrome(str) {
  str = str.toLowerCase();

  // Reverse the string
  let reversed = str.split("").reverse().join("");

  // Check if original and reversed are the same
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("RaceCar")); // true
console.log(isPalindrome("programming")); // false
