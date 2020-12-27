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

var accordionTrigger = document.querySelectorAll('.js-accordion-trigger');
var accordionElem = document.querySelectorAll('.js-accordion-element');

for (let i = 0; i < accordionTrigger.length; i++) {
    accordionTrigger[i].addEventListener('click', () => {
        accordionTrigger[i].classList.toggle('is-active');
        accordionElem[i].classList.toggle('is-active');
    });
}