const burgerMenu = document.getElementById('burger-menu');
burgerMenu.addEventListener('click', () => {
  const body = document.body.classList;
  const menu = burgerMenu.classList;
  if (!body.contains('menu-open')) {
    body.add('menu-open');
    menu.add('burger_active');
  } else {
    body.remove('menu-open');
    menu.remove('burger_active');
  }
});