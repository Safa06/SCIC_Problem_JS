function isPalindrome(str) {
  // Convert to lowercase and remove non-alphanumeric characters (optional)
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reverse the string
  let reversed = str.split("").reverse().join("");

  // Check if original and reversed are the same
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("RaceCar")); // true
console.log(isPalindrome("programming")); // false
