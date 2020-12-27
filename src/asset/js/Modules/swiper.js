const initSwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 4000,
    },
    speed: 1500,
    effect: 'fade',
})

export { initSwiper };


