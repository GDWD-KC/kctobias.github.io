  // Elements:
  var toggle = document.querySelector('.bodymovin_toggle');
  var monster = document.querySelector('.bodymovin_monster');

  // Counters:
  var toggle_c = 0;

  // Load Animations:
  let animationMonster =
    bodymovin.loadAnimation({
          container: monster,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: "https://assets3.lottiefiles.com/packages/lf20_nfnpez3w.json"
        });

    let animationToggle =
      bodymovin.loadAnimation({
              container: toggle,
              renderer: 'svg',
              loop: false,
              autoplay: false,
              path: "https://assets1.lottiefiles.com/packages/lf20_p6itexn5.json"
            });


  // Event Listeners:
    // Toggle animation check for forwards/backwards:
    toggle.addEventListener('click', function() {
      if( toggle_c == 0 ) {
        animationToggle.playSegments([20,60], true);
        toggle_c = toggle_c + 1;

      } else {
        animationToggle.playSegments([80,120], true);
        toggle_c = 0;
      }
   });

   // Monster Multifunction:
   //Play excited frames
   monster.addEventListener('click', function() {
       animationMonster.playSegments([110,235], true);
     });
    //play tickle frames
    monster.addEventListener('mouseenter', function() {
        animationMonster.playSegments([20,75], true);
    });
    // Play relief animation
    monster.addEventListener('mouseleave', function() {
        animationMonster.playSegments([230,300], true);
    });
