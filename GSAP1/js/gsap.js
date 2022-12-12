// Squares Animation
gsap.from(".chucked", {
    duration: 5,
    rotation: 720,
    ease: "bounce",
    stagger: 0.5,
    x: -500,
    y: -500,
});


//Text animation
gsap.from(".headline", {
    duration: 2.5,
    stagger: 0.3,
    opacity: 0,
    y: 300
})

  