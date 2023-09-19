gsap.to("#nav", {
    backgroundColor: '#000',
    duration: 0.5,
    height: '110px',
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})


var crsr = document.querySelector(".cursor")
var blur = document.querySelector(".cursor-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 30 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200 + "px"
})


var h4all = document.querySelectorAll("#nav h4",)
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3
        crsr.style.backgroundColor = "transparent"
        crsr.style.transition = "all ease 0.5s"
        crsr.style.border = "1px solid #fff"

    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.transition = "   "
        crsr.style.border = "0px solid  #95C11E"
        crsr.style.backgroundColor = " #95C11E"

    })
})

gsap.to("#main", {
    backgroundColor: '#000',
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})


gsap.from("#about-us img, #about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger: 0.9,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 58%",
        scrub: 3

    }

})

gsap.from(".card", {
    scale: 0.75,
    opacity: 0,
    duration: 0.7,
    stagger: 0.9,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1

    }

})


gsap.from("#colon1", {
    y: -70,
    x: -70,
    duration: 1,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#colon2", {
    y: 70,
    x: 70,
    duration: 1,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "top 47%",
        scrub: 4
    }
})




gsap.from("#page5 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page5 h1",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top 70%",
        scrub: 3,
    },
});


var page5Cursor = document.querySelector("#page5 .elem",)
page5Cursor.forEach(function (elm) {
    elm.addEventListener("mouseenter", function () {
        crsr.style.scale = 3
        crsr.style.backgroundColor = "transparent"
        crsr.style.transition = "all ease 0.5s"
        crsr.style.border = "1px solid #fff"

    })
    elm.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.transition = "   "
        crsr.style.border = "0px solid  #95C11E"
        crsr.style.backgroundColor = " #95C11E"

    })
})
