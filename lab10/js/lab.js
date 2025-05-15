// lab.js - Lab 10: JavaScript for the Web
// making a javascript code to make functioning buttons within a site using jquery
// Author: Odette Garcia
// Date: May 13th, 2025

//Script

function generateRandomText() {
  const text = "Me duele mucho el brazo y la pierna. No se que hacer mas que quedarme en la cama y dormir. El nervio sciatico me arde y tengo mucho sueno.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the text made
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random text fron the sentences created
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue
  const newText = generateRandomText();
  // append a new div to our output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
//appended it to the output div within the results div