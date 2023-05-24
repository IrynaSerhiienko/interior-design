const burger = document.querySelector('.js-burger-btn');
const header = document.querySelector('.js-header');
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdownMenu');
const item = document.querySelectorAll('.js-nav-item');
const link = document.querySelectorAll('.nav-link');

burger.addEventListener('click', () => {
  header.classList.toggle('activeBurger');
});

dropdown.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open');
});

item.forEach((item) => {
  item.addEventListener('click', (event) => {
    link.forEach((link, index) => {
      if (index !== link.length - 1) {
        link.classList.remove('active');
      } else {
        header.classList.remove('activeBurger');
      }
    });
    event.target.classList.add('active');
    header.classList.remove('activeBurger');
  });
});

// item.forEach((item) => {
//   item.addEventListener('click', (event) => {
//     link.forEach((link) => {
//       link.classList.remove('active');
//       header.classList.remove('activeBurger');
//     });
//     event.target.classList.add('active');
//   });
// });
