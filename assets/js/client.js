const menuButton = document.querySelector('.navigation-button');
const nav = document.querySelector('.navigation');
const link = document.querySelectorAll('.navigation__link')
const header = document.querySelector('.header')

// Events
menuButton.addEventListener('click', function () {
  nav.classList.toggle('is-open');
  menuButton.classList.toggle('is-open');
  header.classList.toggle('is-open');

});

link.forEach((e)=>{
  e.addEventListener('click', function () {  
    menuButton.classList.toggle('opened')
    nav.classList.toggle('movein'); 
  })
})