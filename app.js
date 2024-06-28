let timeline = gsap.timeline();

timeline.to(".image-wrap", {
    height: "550px",
    backgroundSize: "100%",
    duration: 1.5,
    ease: "power4.inOut",
})
.to(
    ".image-wrap", {
        height: "250px",
        backgroundPosition: "50% 58%",
        duration: 1.3,
        y: "0",
        ease:"power3.inOut",
    },
    1.5 
)
.from(
    ".big-name",
    {
    y: "1000px", 
    duration: 1.3,
    ease: "power3.inOut",
},
1.5

);