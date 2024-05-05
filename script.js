// function imageScalingAnimationPage1() {
//   var elemHover = document.querySelectorAll(".elem-hover");

//   elemHover.forEach(function (val) {
//     var images = val.querySelector("#image-div img");

//     val.addEventListener("mouseenter", function () {
//       images.style.transform = "scale(1.1)";
//     });

//     val.addEventListener("mouseleave", function () {
//       images.style.transform = "scale(1)";
//     });
//   });
// }

// imageScalingAnimationPage1();

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var tl = gsap.timeline();

tl.to("#page1", {
  y: "100vh",
  scale: 0.6,
  duration: 0,
});

tl.to("#page1", {
  y: "20vh",
  duration: 0.8,
});

tl.to("#page1", {
  y: "0vh",
  scale: 1,
  rotate: 360,
  duration: 0.8,
});
