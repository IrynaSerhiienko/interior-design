const swiper = new Swiper('.swiper', {
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    350: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    425: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
