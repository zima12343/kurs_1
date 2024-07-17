import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  effect:'coverflow',

  speed: 1000,

  autoplay: {
    delay: 3000,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const buttonMenu = document.getElementById('burger-menu-button');
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

