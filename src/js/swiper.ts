import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    slidesPerView: 3,
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
