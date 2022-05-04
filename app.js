gsap.registerPlugin(MotionPathPlugin);


gsap.to(".ball",{
    motionPath:{
        path:".mainPath",
        align:".mainPath",
        alignOrigin:[.5,.5],
        autoRotate:true
    },
    duration:9,
    repeat:-1,
    ease:"linear",
})



gsap.to(".line",{
    rotateZ:137.2,
    marginTop:1,
    yoyo:true,
    yoyoEase:"power2",
    repeat:-1,
    delay:1,
    repeatDelay: .5,
    duration:4
})