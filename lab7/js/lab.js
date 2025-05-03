// index.js - Lab 7: Functions
// Author: Odette Garcia
// Date: May 3rd 2025

function sortUserName() {
    var userName = window.prompt("Err what's your name? It's kind of fucked up");
    console.log("userName = ", userName);
    // splitting string to array
    var nameArray = userName.split('');
    console.log("nameArray = ", nameArray);
    // sorts array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort = ", nameArraySort);
    //calls upon array joining back to string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted = ", nameSorted);

    return nameSorted;

}

document.writeln("Here's your fixed name :D : ",
    sortUserName(), "</br>");

// Constants

// Functions

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
  