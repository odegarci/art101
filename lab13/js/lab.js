// lab.js - Lab 13: Loops
// using loops
// Author: Odette Garcia
// Date: May 25th, 2025

// Script

for (i=1; i <= 200; i++) { 
  str = "";
  if (i%105 == 0) {
    str += "Fizz" + "Buzz" + "Boom";
    $("#output").append("<p>" + str + "</p>");
    console.log ("FizzBuzzBoom")
  } else if (i%35 == 0) { 
    console.log("BuzzBoom");
    str += "Buzz" +"Boom";
    $("#output").append("<p>" + str + "</p>");
  } else if (i%21 == 0) {
    console.log("FizzBoom");
    str += "Fizz" + "Boom";
    $("#output").append("<p>" + str + "</p>");
  } else if (i%15 == 0){
    console.log ("FizzBuzz");
    str += "Fizz" + "Buzz";
    $("#output").append("<p>" + str + "</p>");
  } else if (i%7 == 0){
    console.log ("Boom");
    str += "Boom";
    $("#output").append("<p>" + str + "</p>");
  } else if (i%5 == 0) {
    console.log ("Buzz");
    str += "Buzz";
    $("#output").append("<p>" + str + "</p>");
  } else if (i%3 == 0){
    console.log("Fizz");
    str += "Fizz"
    $("#output").append("<p>" + str + "</p>");
  } else {
    console.log(i);
     str += i
    $("#output").append("<p>" + str + "</p>");
  }
}
