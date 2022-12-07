//Variables for lightbox elements
let lightboxContainer = document.getElementById('lightboxContainer');
let lightboxBackground = document.getElementById('lightboxBackground');
let lightbox = document.getElementById('lightbox');
let lightboxCloser = document.getElementById('lightboxCloser');

//Function to open lightbox
function openLightbox(){
    //Turn on display class (from display:none to display: flex)
    lightboxContainer.classList.add('display');
    //Display image src inside lightbox
    lightbox.src = this.src;
}


//Grab all images
let galleryImages = document.getElementsByClassName('galleryImage');
//Create loop to iterate through all images infinitely
for (let i = 0; i < galleryImages.length; i++) {
    let galleryImage = galleryImages[i];
    galleryImage.onclick = openLightbox;
}


//Make Function to make closer clickable
function closeLightbox(){
    lightboxContainer.classList.remove('display');
    lightbox.src = "";
}

//Grab all closers from DOM
let closers = document.getElementsByClassName('closer');

//Create loop for closers
for (let i = 0; i < closers.length; i++) {
    let closer = closers[i];
    closer.onclick = closeLightbox;
}




