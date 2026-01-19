function sumArrayLoop(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // add each element to sum
  }
  return sum;
}

console.log(sumArrayLoop([1, 2, 3, 4])); // Output: 10
