/**
 * methods to get a refence to an HTML element
 * 
 * getElementById - returns a single element witth the matching id
 * getElementsByClassName - returns a list of element with the matching class name
 * 
 * querySelector - use CSS selectors and return the first match
 * querySelectorall - use CSS selector and return a list of matches
 */

// get a reference to the element with the id of #one
let heading = document.getElementById("one");
console.log(heading);

// tells us all props and methods
console.dir(heading);

// change the style of element throught the DOM

heading.style["background-color"] = "#ff0000";

// get a ref to all elements with the class title
let allHeadings = document.getElementsByClassName("title");
console.log(allHeadings);

let colors = ["#00ff00", "#0000ff", "#00ffff", "ff00ff"];

for (let i = 0; i < allHeadings.length; i++) {
    // select a random idx
    let randomColor= Math.random();
    randomColor = randomColor * colors.length;
    randomColor = Math.floor(randomColor);

    allHeadings[i].style["color"] = colors[randomColor];
}

let heading2 = document.querySelector("#one");
heading2.innerHTML = "Hi, my name is Brandon.";

let allHeadings2 = document.querySelectorAll("h1");
for (let i = 0; i < allHeadings2.length; i++) {
    allHeadings2[i].style["font-size"] = "4em";
}

// get a ref to the button with the id of background-button
let button = document.getElementById("background-button");
//or: let button = document.querySelector("background-button");

// set the onclick prop to an anonymous function
button.onclick = function() {
    let divContainer = document.querySelector("#container");
    divContainer.style["background-color"] = "#EEEE38";
}