const swiper = new Swiper('.swiper', {
  // slidesPerView: 2.5,
  spaceBetween: 20,
  // centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 1500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    375: {
      slidesPerView: 1.7,
    },
    425: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
