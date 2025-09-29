$(document).ready(function(){

    var swiper = new Swiper(".sec_1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    loop: true
  });

    var swiper = new Swiper(".mo_sec_1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    loop: true
  });

    var swiper = new Swiper(".sec_2", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper(".mo_sec_2", {
      pagination: {
        el: ".swiper-pagination",
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