function factorial(n) {
  if (n < 0) return undefined; // Factorial is not defined for negative numbers

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i; // multiply result by current number
  }
  return result;
}

console.log(factorial(5)); 