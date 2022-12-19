//Create variables
let animationMonster = document.getElementById("animationMonster");
let animationToggle = document.getElementById("animationToggle");
let toggle_c = 0;

//Get Monster from Lottie
let monster = bodymovin.loadAnimation({
  container: animationMonster,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://lottie.host/bd5c67ba-bb23-4fb8-9e02-e17b4ee08d3f/Vygu3ovioR.json",
});

//Get Toggle Switch from Lottie
let toggle = bodymovin.loadAnimation({
  container: animationToggle,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://lottie.host/ae8bfa22-b8ca-4ee1-96a0-ba3c6ba61cd4/3I9wzGcxVQ.json",
});

//Monster emotes with Event Listeners
//Play excited frames
animationMonster.addEventListener("click", function () {
  monster.playSegments([110, 215], true);
});
//Emote 2 Event Listener
//Emote 3 Event Listener

//Toggle to one side
animationToggle.addEventListener("click", function () {
  if (toggle_c == 0) {
    toggle.playSegments([1, 20], true);
    toggle_c = toggle_c + 1;
  } else {
    toggle.playSegments([21, 60], true);
    let toggle_c = 0;
  }
});
