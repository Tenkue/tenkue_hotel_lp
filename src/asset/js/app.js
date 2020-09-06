import '@babel/polyfill';
import 'intersection-observer';
import { initTriggerHamburger } from './Modules/hamburger';

document.addEventListener('DOMContentLoaded', function() {
    initTriggerHamburger();
});
