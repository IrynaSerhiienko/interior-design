window.onscroll = function () {
  toggleScrollToTopButton();
};

function toggleScrollToTopButton() {
  const scrollToTopButton = document.getElementById('scrollToTopButton');
  if (document.documentElement.scrollTop > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
}

function scrollToTop() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
