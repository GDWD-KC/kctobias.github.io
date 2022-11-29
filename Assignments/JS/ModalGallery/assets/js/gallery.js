let modal = document.getElementById("myModal");
let images = document.querySelectorAll(".images");
// gets the modal and all the images

let imageBox = document.getElementById("modalImg");
// gets the invisible imagebox insde the modal
for (let i = 0; i < images.length; i++) {
  // iterates through each of the images
  let img = images[i];
  img.onclick = function () {
    // adds an onclick event listener to each img that then triggers a function
    modal.style.display = "block";
    imageBox.src = this.src;
  };
}

//Close out Modal
let exit = document.getElementById("close");

exit.onclick = function () {
  modal.style.display = "none";
};
