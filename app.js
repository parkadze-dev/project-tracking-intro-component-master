function openMenu() {
  var menuBtn = document.getElementById('menu-btn');
  var menu = document.getElementById('popup-menu');

  // menu.style.visibility = 'visible';
  // menuBtn.src = 'img/icon-close.svg';
  if (menu.classList.contains('disabled')) {
    menu.classList.remove('disabled');
    menuBtn.classList.add('is-active');
  } else {
    menu.classList.add('disabled');
    menuBtn.classList.remove('is-active');
  }
}
