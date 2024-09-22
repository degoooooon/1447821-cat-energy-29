let navMain = document.querySelector('.page-nav');
let navToggle = document.querySelector('.page-nav__toggle');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('toggle-menu--close')) {
    navMain.classList.remove('toggle-menu--close');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('toggle-menu--close');
    navMain.classList.remove('main-nav--opened');
  }
});
