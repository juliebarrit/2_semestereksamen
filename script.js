const burger = document.getElementById('burger');
const close = document.getElementById('close');
const burgerMenu = document.getElementById('burgerMenu');



function toggleBurgerMenu() {
  burgerMenu.classList.toggle('show');
}

function showBurgerMenu() {
  burger.style.display = 'none';
  close.style.display = 'block';
  toggleBurgerMenu();
}

function hideBurgerMenu() {
  burger.style.display = 'block';
  close.style.display = 'none';
  toggleBurgerMenu();
}

burger.addEventListener('click', () => {
  showBurgerMenu();
});

close.addEventListener('click', () => {
  hideBurgerMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 680) {
    burgerMenu.classList.remove('show');
    burger.style.display = 'block';
    close.style.display = 'none';
  }
});
