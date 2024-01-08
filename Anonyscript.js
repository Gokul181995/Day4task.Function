//Anonymous function :

//Syatax :

// const myFunction = function () {
//   // code for the function
// };
// myFunction();

//Print odd numbers in an array:

const printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 458, 589, 689, 700, 898, 120]);

//Convert all the strings to title caps in a string array:

const convertToTitleCaps = (strArr) => {
  return strArr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
};

console.log(convertToTitleCaps(["apple", "gokul", "appu", "dhruva", "annam"]));

//Sum of all numbers in an array:

const sumOfNumbers = (arr) => {
  return arr.reduce((sum, num) => sum + num, 0);
};

console.log(sumOfNumbers([10, 25, 36, 18, 87, 25]));

// Return all the prime numbers in an array:

const getPrimeNumbers = (arr) => {
  return arr.filter((num) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  });
};

console.log(getPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]));

//All the palindromes in an array:

const getPalindromes = (arr) => {
  return arr.filter((str) => str === str.split("").reverse().join(""));
};

console.log(getPalindromes(["level", "hello", "radar", "world"]));

//Remove duplicates from an array:

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//Rotate an array by k times:

const rotateArray = (arr, k) => {
  k = k % arr.length;
  const rotated = [...arr.slice(k), ...arr.slice(0, k)];
  return rotated;
};

console.log(rotateArray([1, 2, 3, 4, 5], 2));
