function findLargestLoop(arr) {
  if (arr.length === 0) return undefined; // handle empty array

  let max = arr[0]; // assume first element is largest
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findLargestLoop([4, 7, 1, 9, 3])); // Output: 9
console.log(findLargestLoop([-5, -2, -9])); // Output: -2
