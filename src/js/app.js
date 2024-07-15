import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 500,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is <= 499px
    320: {
      pagination: {
        el: '.swiper-pagination',
        clickable: false,
      }
    },
}
});

const buttonMenu = document.getElementById('menu-button');

buttonMenu.onclick = function()
{
  const headerWrap = document.getElementById('header-wrap');
  headerWrap.classList.add('none-display');
  const burgerMenu = document.getElementById('burger-menu');
  burgerMenu.classList.add('block-display');
  const header = document.getElementById('header');
  header.classList.add('full-screen');
  const html = document.getElementById('body')
  html.classList.add('no-scroll');
}

const closeButton = document.getElementById('close');
closeButton.onclick = function()
{
  const headerWrap = document.getElementById('header-wrap');
  headerWrap.classList.remove('none-display');
  const burgerMenu = document.getElementById('burger-menu');
  burgerMenu.classList.remove('block-display');
  const header = document.getElementById('header');
  header.classList.remove('full-screen');
  const html = document.getElementById('body')
  html.classList.remove('no-scroll');
}

