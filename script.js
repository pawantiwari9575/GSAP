// 
var tl= gsap.timeline();

tl
.from(".st",{
    stagger: .2,
    duration: 1,
    x:30,
    ease: "Expo.easeInOut",
    opacity: 0,
}) 

 .from("#main h1", {
    y:30,
    opacity:0,
    ease: "Expo.easeInOut",
    duration: 1,
    
}, '-=2')



// .to('#overly', {
//     width: '100%',
//     duration:2,
//     ease: "Expo.easeInOut",
// })

// .to('#overly', {
//     width: '0%',
//     duration:  2,
//     ease: "Expo.easeInOut",
// })