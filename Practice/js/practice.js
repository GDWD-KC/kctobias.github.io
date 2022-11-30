let squareWidth = 100;
let squareHeight = 100;

let color1 = document.getElementById("square1");
let color2 = document.getElementById("square2");
let color3 = document.getElementById("square3");


color1.style.height = squareHeight + "px";
color1.style.width = squareWidth + "px";
color1.style.backgroundColor = "lightblue";

color2.style.height = squareHeight + "px";
color2.style.width = squareWidth + "px";
color2.style.backgroundColor = "lightgreen";

color3.style.height = squareHeight + "px";
color3.style.width = squareWidth + "px";
color3.style.backgroundColor = "plum";

function bgChange(bg) {
    document.body.style.background = bg;
}
