$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    responsive: {
      loop: true,
      // breakpoint from 0 up
      0: {
        items: 2,
        margin: 32,
        loop: true,
        dots: false,
      },
      // breakpoint from 600 up
      601: {
        items: 3,
        margin: 32,
        loop: true,
        dots: false,
      },
      // breakpoint from 1000 up
      1001: {
        items: 3,
        margin: 48,
        loop: true,
        dots: false,
      },
    },
  });
});

/* Video */

const videoBtn = document.querySelector("#video-btn");
const videoPicture = document.querySelector(".video__picture");
const videoWrapper = document.querySelector(".video");
const video = document.querySelector("#video-file");

videoWrapper.addEventListener("click", function () {
  if (video.paused) {
    videoPicture.classList.add("hidden");
    videoWrapper.classList.remove("video-overlay");
    videoBtn.classList.add("hidden");
    video.play();
  } else {
    videoBtn.classList.remove("hidden");
    videoWrapper.classList.add("video-overlay");
    video.pause();
  }
});

/* Mobile Nav */

const openNavbtn = document.querySelector("#openMobileNav");
const closeNavbtn = document.querySelector("#closeMobileNav");
const mobileNav = document.querySelector("#mobileNav");

openNavbtn.onclick = function () {
  mobileNav.classList.remove('none')
  document.body.classList.add('no-scroll')
}

closeMobileNav.onclick = function () {
  mobileNav.classList.add('none')
  document.body.classList.remove('no-scroll')
}

