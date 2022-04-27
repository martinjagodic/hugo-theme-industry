/* global BREAKPOINTS, Swiper */

const sliders = document.querySelectorAll('.card-slider')

function cardSlider (slider, spvDesktop = 3) {
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
        slidesPerView: spvDesktop,
        spaceBetween: 32,
      },
    },
  })
}

sliders?.forEach((slider) => {
  const { spvDesktop } = slider.dataset
  cardSlider(slider, spvDesktop)
})
