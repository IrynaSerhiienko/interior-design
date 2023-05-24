const burger = document.querySelector('.js-burger-btn');
const header = document.querySelector('.js-header');
// const link = document.querySelectorAll('.js-nav-item');

burger.addEventListener('click', () => {
  header.classList.toggle('activeBurger');
});

// link.addEventListener('click', () => {
//   link.classList.toggle('activeLink');
// });
