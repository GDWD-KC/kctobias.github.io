 // Moving the gear
 gsap.from("#gear_outer",{
    duration:18,
    rotation:360,
    transformOrigin: "50% 50%",
    color:"blanchedalmond",
    repeat:-1,
    ease:"none",
});
gsap.from("#main_text", {
    duration: 4,
    delay:2,
    y: -300,
    ease:"expo",
    stagger: 0.5,
});
gsap.from(".stagger", {
    duration: 3,
    delay: 2,
    y: 300,
    ease: "expo",
    stagger: 0.1,
})
gsap.to("#inner_ring", {
    duration: 1,
    transformOrigin: "50% 50%",
    delay: 8,
    repeatDelay: 2,
    scale: 1.05,
    ease: "elastic",
    repeat: -1,
    yoyo: true,
})