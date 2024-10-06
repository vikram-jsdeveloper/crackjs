import './app.scss';

const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  const isClickInside =
    navMenu.contains(event.target) || mobileMenu.contains(event.target);

  if (!isClickInside) {
    navMenu.classList.remove('active');
  }
});
