// Question 4
function printEachValueOfArray(myArray) {
  for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
  }
}

// const x = ["Samim", "Sina", "Anes", "Samin"];
// printEachValueOfArray(x);

// Question 2, Assignment 3
function getNoOfCharachters(word) {
  return word.length;
}

function isEven(number) {
  return number % 2 == 0;
  // if (number % 2 == 0) {
  //   return true;
  // }
  // return false;
}

function isNoCharsEven(word) {
  let noOfChars = getNoOfCharachters(word);
  let mIsEven = isEven(noOfChars);
  return mIsEven;
}

// console.log("Sina is odd: ", isNoCharsEven("Sina"));
// console.log("Arshak is odd: ", isNoCharsEven("Arshak"));
// console.log("Samim is odd: ", isNoCharsEven("Samim"));

function getPowerTwo(myArray) {
  for (let index = 0; index < myArray.length; index++) {
    let element = myArray[index];
    let powerTwo = element * element;
    myArray[index] = powerTwo;
  }
  return myArray;
}

// let p = getPowerTwo([1,2,3]);
// console.log(p)

function mergeArrays(array) {
  var resultArray = [];

  for (let index = 0; index < array.length; index++) {
    var innerArray = array[index]; // [1,2,3]
    for (let index = 0; index < innerArray.length; index++) {
      const element = innerArray[index];
      resultArray.push(element);
    }
  }

  return resultArray;
}

var x = [
  [1, 2, 3],
  [4, 5, 6],
];
var merged = mergeArrays(x);
// console.log(merged);

function reverseArray(myArray) {
  var result = [];

  for (let index = 0; index < myArray.length; index++) {
    const element = myArray.pop();
    result.unshift(element);
  }

  for (let index = myArray.length - 1; index >= 0; index--) {
    const element = myArray[index];
  }

  return result;
}

function getAverages(numbers) {
  var sum = 0;

  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    sum = sum + element;
  }

  var average = sum / numbers.length;
  console.log("Average is ", average);

  let distances = [];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    var distance = element - average;
    distances.push(distance);
  }

  console.log("Distances: ", distances);
}


const myArray = [3, 7, 2, 5, 1]; // [1, 2, 3, 5, 7]

function sort(array) {
  for (let i= 0; i< array.length; i++) {

    // Find the minimum
    let minIndex = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Swap with minimum
    const temp = array[i]; // Store current value in some place
    array[i] = array[minIndex]; // Put min into index i
    array[minIndex] = temp; // Put temp back into index min
  }

  return array;
}


const a = 10; // number
const b = "My name is"; // string
const c = true; // boolean
const d = [1, 3, 4, 5]; // array
const e = { name: "Samim" }; // Object


// Data structure
const user = { 
  name: "Samim",
  city: "Esfahan",
  id: 30,
  isAdmin: true,
  grades: [1, 2, 3, 4],
  class: { number: 10, teacher: 'Mr. Teacher' },
};

// const myArray = ["Sina", "Arshak", true, 10, [0, 1], { name: "Samim" } ];


let cart = [
  { "id": 1, "price": 3000, "type": "food" },
  { "id": 4, "price": 2000, "type": "food" },
  { "id": 8, "price": 1000, "type": "cloth" }
]

function numbersOfItems(myCart) {
  return myCart.length;
}

function getTotalAmount(myCart) {
  var sum = 0;
  for (let index = 0; index < myCart.length; index++) {
    const element = myCart[index];
    sum = sum + element.price;
  }
  return sum;
}

