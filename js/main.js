$(document).ready(function(){

    var swiper = new Swiper(".sec_2", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper(".sec_6", {
    slidesPerView: 2,
    spaceBetween: 16,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 100,
      disableOnInteraction: false,
    },
    speed: 5000,
    effect: "slide",
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3.7,
        spaceBetween: 20,
      },
    },
  });
});