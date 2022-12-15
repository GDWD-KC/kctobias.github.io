//Set variables to utilize content
const shows = document.getElementById("shows");
const tabs = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");

shows.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    tabs.forEach(function (btn) {
      btn.classList.remove("active");
      btn.classList.remove("highlight");
    });
    e.target.classList.add("active");
    e.target.classList.add("highlight");
    // hide other articles
    content.forEach(function (images) {
      images.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
//On scroll nav event
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
// }
