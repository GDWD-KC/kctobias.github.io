//Selecting the initial image from the DOM and setting it as a variable
let starter = document.getElementById("starter");
//Create an array for rest of frames/images
let imgArray = [
  "assets/imgs/Asset20.png",
  "assets/imgs/Asset21.png",
  "assets/imgs/Asset22.png",
  "assets/imgs/Asset23.png",
  "assets/imgs/Asset24.png",
  "assets/imgs/Asset25.png",
  "assets/imgs/Asset26.png",
  "assets/imgs/Asset27.png",
];
//Variable for counter
let count = 0;
//Animation function
function animate() {
  //Select initial starter image
  starter.src = imgArray[count];
  //Increase count
  count++;
  //Increase count through the length of the array
  if (imgArray.length == count) {
    //Reset and start over
    count = 0;
  }
}

setInterval(animate, 100);
