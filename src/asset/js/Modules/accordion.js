const initAccordion = () => {

    var accordionTrigger = document.querySelectorAll('.js-accordion-trigger');
    var accordionElem = document.querySelectorAll('.js-accordion-element');

    for (let i = 0; i < accordionTrigger.length; i++) {
        accordionTrigger[i].addEventListener('click', () => {
            accordionTrigger[i].classList.toggle('is-active');
            accordionElem[i].classList.toggle('is-active');
        });
    }
}

export { initAccordion };
