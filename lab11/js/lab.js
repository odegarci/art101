// lab.js - Lab 11: JavaScript Events and Forms
// jquery to create events, in this came an anagram 
// Author: Odette Garcia
// Date: May 15th, 2025

// Script

//characters sorted into alphabetical order
function sortString(inputString) {
    return inputString.split('').sort().join("");
}

$("#submit").click(function(){
    const userName = $("#user-name").val();
  userNameSorted = sortString(userName);
  //appended new div to output div
    $("#output").html('<div class = "text"><p>' + userNameSorted + '</p></div>');
})