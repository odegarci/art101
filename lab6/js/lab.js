// index.js -Lab 6: Arrays and Objects
// Author: Odette Garcia
// Date:April 25th, 2025


// Lab 6: Arrays and Objects

let myTransport = ["Mercedes-Benz E-Class", "bus", "legs"];

var myMainRide = {
  make: "Mercedes-Benz",
  model: "E-CLass",
  color: "Pewter",
  year: 2009,
  age: function() {
      return 2025 - this.year
  }
}

myTransport[1];

myMainRide.year;


// Outputs

document.writeln("Riding in my: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");











// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
