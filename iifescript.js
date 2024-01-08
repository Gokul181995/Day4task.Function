// IIFE Function:

//Systax:
// (function (param1, param2) {
//   // code using param1 and param2
// })(value1, value2);

//Print odd numbers in an array:

((arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//Convert all the strings to title caps in a string array:

const convertedArray = ((strArr) => {
  return strArr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
})(["apple", "bike", "car", "ktm", "yamaha"]);

console.log(convertedArray);

//Sum of all numbers in an array:

const sum = ((arr) => {
  return arr.reduce((acc, num) => acc + num, 0);
})([1, 2, 3, 4, 5]);

console.log(sum);

//Return all the prime numbers in an array:

const primes = ((arr) => {
  return arr.filter((num) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  });
})([2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(primes);

//Return all the palindromes in an array:

const palindromes = ((arr) => {
  return arr.filter((str) => str === str.split("").reverse().join(""));
})(["level", "hello", "radar", "world"]);

console.log(palindromes);

//Return median of two sorted arrays of the same size:

const median = ((arr1, arr2) => {
  const merged = arr1.concat(arr2).sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);
  return merged.length % 2 === 0
    ? (merged[mid - 1] + merged[mid]) / 2
    : merged[mid];
})([1, 3, 5], [2, 4, 6]);

console.log(median);

//Remove duplicates from an array:

const uniqueArray = ((arr) => {
  return [...new Set(arr)];
})([1, 2, 2, 3, 4, 4, 5]);

console.log(uniqueArray);

//Rotate an array by k times:

const rotatedArray = ((arr, k) => {
  k = k % arr.length;
  const rotated = [...arr.slice(k), ...arr.slice(0, k)];
  return rotated;
})([1, 2, 3, 4, 5], 2);

console.log(rotatedArray);
