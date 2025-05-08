// index.js - Lab 8: Anon Functions and Callbacks
// Author: Odette Garcia
// Date: May 8th, 2025

function multiplyFour(x) {
    return (x * 4)
}

//function test
console.log("4 x 4 = ",multiplyFour(4));
console.log("6 x 4 = ", multiplyFour(6));

array = [2, 4, 6, 8, 10]
console.log("My array: ", array);

var result =  array.map(multiplyFour);
//should return an array with all the numbers multiplied by 4
console.log("Test of 4x of array: ", result);

var result = array.map(function(x) {
    return (x / 2);
})
  //should return (5) [1, 2, 3, 4, 5]
  console.log("Array numbers divided by 2 = ", result);