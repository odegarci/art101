// lab.js - Lab 9: Libraries and jQuery
// This lab script has us play around with elements on the page using jQuery
// Author: Odette Garcia
// Date: May 11th, 2025

//Script

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>disappear</button>");
// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggle("challenge");
})

//added button to problem section
$("#problems").append("<button id='button-problems'>poof</button>");
// add a click listener to the problems button
$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggle("problems");
})

//add button to results section
$("#results").append("<button id='button-results'>vanish</button>");
// add a click listener to the results button
$("#button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggle("results");
})
