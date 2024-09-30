var tl =gsap.timeline();

tl.from("#nav h3",{
        y:-50,
        delay:0.2,
        opacity:0,
        duration:1,
        stagger:0.2
    })

tl.from("#main h1",{
    x:-500,
    duration:1,
    opacity:0,
    stagger:0.5
})
tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:2.4,
    stagger:0.7
})