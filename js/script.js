// ---------------Menu---------------
const navMenu = document.querySelector("#nav-menu"),
  navToggle = document.querySelector("#nav-toggle"),
  navClose = document.querySelector("#nav-close"),
  navLink = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((l) => l.addEventListener("click", linkAction));
navClose.addEventListener("click", linkAction);
// ---------------typed animation---------------
const typed = new Typed(".name-input", {
  strings: ["Ice Cream"],
  typeSpeed: 125,
  backSpeed: 80,
  loop: true,
});
// ---------------GSAP ANIMATION---------------
TweenLite.from(".home-title", 1, {
  delay: 0.2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-description", 1, {
  delay: 0.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-liquid", 1, {
  delay: 0.6,
  opacity: 0,
  y: 200,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-milk", 1, {
  delay: 0.9,
  opacity: 0,
  y: 200,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-juice-animate", 1, {
  delay: 1.2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-button", 1, {
  delay: 0.7,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-apple1", 1, {
  delay: 0.8,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-apple2", 1, {
  delay: 1.1,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-leaf:nth-child(6)", 2, {
  delay: 1.3,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-leaf:nth-child(5)", 2, {
  delay: 1.5,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-leaf:nth-child(4)", 2, {
  delay: 1.7,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-leaf:nth-child(3)", 2, {
  delay: 1.8,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-leaf:nth-child(2)", 2, {
  delay: 2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-leaf:nth-child(1)", 2, {
  delay: 2.2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
// sale-slader
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 15,
  autoplay: true,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
