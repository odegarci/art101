// lab.js - Lab 11: JavaScript Events and Forms
//
// Author: Odette Garcia
// Date: May 15th, 2025

// Script

function sortString(inputString) {
    return inputString.split('').sort().join("");
}

$("#submit").click(function(){
    const userName = $("#user-name").val();
  userNameSorted = sortString(userName);
    $("#output").html('<div class = "text"><p>' + userNameSorted + '</p></div>');
})