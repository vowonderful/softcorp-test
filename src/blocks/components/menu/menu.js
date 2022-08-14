const navMenu = document.getElementById('menu');
const links = navMenu.getElementsByClassName('menu__link');

const menu = document.getElementById('burger-menu').classList;
const body = document.body.classList;

Array.from(links).forEach(link => {
  link.addEventListener('click', () => {
    
    body.remove('menu-open');
    menu.remove('burger_active');

  });
});