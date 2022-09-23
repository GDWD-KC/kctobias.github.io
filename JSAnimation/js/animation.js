//Select the initial image from the DOM and set it to a variable called "start"
let starter = document.getElementById("starter");

//Create an array of the rest of the image sources/frames called "imgArray"
let imgArray = [
    "assets/imgs/Asset20.png",
    "assets/imgs/Asset21.png",
    "assets/imgs/Asset22.png",
    "assets/imgs/Asset23.png",
    "assets/imgs/Asset24.png",
    "assets/imgs/Asset25.png",
    "assets/imgs/Asset26.png",
    "assets/imgs/Asset27.png"
];

//Variable for the counter set to zero called "count"
let count = 0;

//Function to cycle through array 
function animate() {
    //Select initial starter image
    starter.src = imgArray[count];
    //Increase count
    count++;
    //Increase the count through the length of the array
    if (imgArray.length == count) {
        //Reset and replay the array
        count = 0;
    }
}

setInterval(animate, 100);

