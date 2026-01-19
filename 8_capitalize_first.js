function capitalizeWordsES6(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWordsES6("hello world"));
