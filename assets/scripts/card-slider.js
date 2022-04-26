/* global BREAKPOINTS, Swiper */

const sliders = document.querySelectorAll('.card-slider')

function cardSlider (slider) {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.card-slider .swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      [BREAKPOINTS.xs]: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      [BREAKPOINTS.md]: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  })
}

if (sliders) sliders.forEach((slider) => cardSlider(slider))
