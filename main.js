import './app.scss';

//Responsive menu
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

// first, find all the div.code blocks
document.querySelectorAll('code.code').forEach((el) => {
  // then highlight each
  hljs.highlightElement(el);
});
