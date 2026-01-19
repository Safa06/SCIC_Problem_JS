function removeDuplicatesLoop(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log(removeDuplicatesLoop([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]
