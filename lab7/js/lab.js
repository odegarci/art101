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

function displaySortedName() {
    const sortedName = sortUserName();

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `Here's your fixed name :D : <strong>${sortedName}</strong>`;
}

window.addEventListener("DOMContentLoaded", function () {
    displaySortedName();
});


/*document.writeln("Here's your fixed name :D : ",
    sortUserName(), "</br>");
*/
