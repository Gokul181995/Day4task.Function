//Arrow Function :

//Print odd numbers in an array:

const printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//Convert all the strings to title caps in a string array:

const convertToTitleCaps = (strArr) => {
  return strArr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
};

console.log(convertToTitleCaps(["apple", "banana", "cherry"]));

//Sum of all numbers in an array:

const sumOfNumbers = (arr) => {
  return arr.reduce((sum, num) => sum + num, 0);
};

console.log(sumOfNumbers([1, 2, 3, 4, 5]));

//Return all the prime numbers in an array:

const getPrimeNumbers = (arr) => {
  return arr.filter((num) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  });
};

console.log(getPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]));

//Return all the palindromes in an array:

const getPalindromes = (arr) => {
  return arr.filter((str) => str === str.split("").reverse().join(""));
};

console.log(getPalindromes(["level", "hello", "radar", "world"]));
