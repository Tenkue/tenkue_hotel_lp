import '@babel/polyfill';
import 'intersection-observer';
import { initTriggerHamburger } from './Modules/hamburger';
import { initSwiper } from './Modules/swiper';
import { initModal } from './Modules/modal';

document.addEventListener('DOMContentLoaded', function() {
    initTriggerHamburger();
    initSwiper;
    initModal();
});
