const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}


const currentPath = window.location.pathname;
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  const linkPath = new URL(link.href).pathname;
  if (linkPath === currentPath || (linkPath === '/' && currentPath === '/index.html')) {
    link.classList.add('active');
  }
});