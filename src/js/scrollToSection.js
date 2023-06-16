function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (sectionId) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

const menuItems = document.querySelectorAll('a');
menuItems.forEach((menuItems) => {
  menuItems.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = menuItems.getAttribute('href').substring(1);
    scrollToSection(sectionId);
  });
});
