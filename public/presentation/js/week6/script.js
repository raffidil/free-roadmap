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
console.log(merged);

