// lab.js - Lab 12: Conditionals
// using conditionals to create a Sorting Hat function
// Author: Odette Garcia
// Date: May 20th, 2025

// Script

function sortingTalent(str) {
  let len = str.length;
  let mod = len % 6;
  let image = document.getElementById("myImage");
  
  if (mod == 0) {
    image.src = "img/watertype.gif";
    text = " Water fairies are kind and helpful. They have an affinity for water and can control its flow and temperature.";
    color = "blue";
    return "Water Fairy" 
  }
  else if (mod == 1) {
    image.src = "img/gardentype.gif"
    text = "	Garden-talents appreciate nature's beauty. They have a special relationship with all plant-life and love the outdoors.Plus, they make sure they look good (the plants and themselves).";
    color = "red";
    return "Garden Fairy"
  }
  else if (mod == 2) {
    image.src = "img/lighttype.gif"
    text = "Light-talents keep Pixie Hollow aglow! They are strong, natural leaders who add sparkle wherever they go.";
    color = "gold";
    return "Light Fairy"
  }
  else if (mod == 3) {
    image.src = "img/tinkerfairy.gif"
    text = 	"Tinker-talents are best at fixing things. They are dedicated problem solvers and creative thinkers.";
    color = "green";
    return "Tinker Fairy"
  }
  else if (mod == 4) {
    image.src = "img/fastflyingfairy.gif"
    text = " Fast-Flying-Talents are confident in their abilities and are the fastest fairies there are. They control the element of air but can't seem to control their tricks and temper.";
    color = "purple";
    return "Fast-Flying Fairy"
  }
  else if (mod == 5) {
    image.src = "img/animaltype.gif"
    text = "	Animal-talents adore animals of all kinds. They are adventurous explorers and loyal, caring friends.";
    color = "orange";
    return "Animal Fairy"
  }
}



$("#button").click(function(){
  let name  = $("#input").val()
  console.log(name);

  let nameLength = name.length;
  console.log(nameLength);

  let talent = sortingTalent(name);
  console.log(talent);


  $("#output").html("<b>" + talent + "</b>: " + text).css("color", color);
})