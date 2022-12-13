//Get animation container
let animationMonster = document.getElementById("animationMonster");
let animationToggle = document.getElementById("animationToggle");

var toggle_c = 0;

//Get monster animation
let monster =
bodymovin.loadAnimation({
      container: animationMonster,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: "https://lottie.host/6ca25e81-9654-4be2-ab72-2f883033941e/zNfeTNS7l6.json"
    });

//Get toggle animation
let toggle =
bodymovin.loadAnimation({
    container: animationToggle,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "https://lottie.host/4ab2e24f-2304-4cec-8a11-9284fe28758b/6AMehIY15H.json"
});

//Create event listeners
//Toggle
animationToggle.addEventListener('click', function() {
    if( toggle_c == 0 ) {
      toggle.playSegments([1,20], true);
      toggle_c = toggle_c + 1;

    } else {
      toggle.playSegments([21,60], true);
      toggle_c = 0;
    }
 });

//Monster
//Play excited frames
animationMonster.addEventListener('click', function() {
    monster.playSegments([110,235], true);
});
 //play tickle frames
animationMonster.addEventListener('mouseenter', function() {
    monster.playSegments([20,75], true);
});
 // Play relief animation
animationMonster.addEventListener('mouseleave', function() {
    monster.playSegments([230,300], true);
});
