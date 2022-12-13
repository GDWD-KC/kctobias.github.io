//Set initial image
let starter = document.getElementById("starter");

//Set rest of images in array
let heartArray = ["assets/images/Asset20.png", "assets/images/Asset21.png", "assets/images/Asset22.png", "assets/images/Asset23.png","assets/images/Asset24.png", "assets/images/Asset25.png", "assets/images/Asset26.png", "assets/images/Asset27.png"];

//Set a counter variable
let count = 0;

//Declare animate function 
function animate(){
    //Select initial image
    starter.src = heartArray[count];
    //Increment through array
    count++;
    //Increase count through full length of array
    if (heartArray.length == count) {
        //Reset and start over
        count = 0;
    }
}

setInterval(animate, 100)