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

let coffeeImage = document.getElementById('coffeeImage1');
//When you click image, reference openLightBox function
coffeeImage.onclick = openLightbox;

//Make Function to make closer clickable
function closeLightbox(){
    lightboxContainer.classList.remove('display');
    lightbox.src = "";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;







