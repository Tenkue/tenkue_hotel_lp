import '@babel/polyfill';
import 'intersection-observer';
import { initTriggerHamburger } from './Modules/hamburger';
import { initSwiper } from './Modules/swiper';

document.addEventListener('DOMContentLoaded', function() {
    initTriggerHamburger();
    initSwiper;
});
