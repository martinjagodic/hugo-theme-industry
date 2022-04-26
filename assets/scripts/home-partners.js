/* global BREAKPOINTS, Swiper */

const partnersSwiper = document.querySelector('.home-partners .swiper')

function homePartners () {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper(partnersSwiper, {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 1500,
    },
    breakpoints: {
      [BREAKPOINTS.xs]: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      [BREAKPOINTS.md]: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
      [BREAKPOINTS.xl]: {
        slidesPerView: 5,
        spaceBetween: 100,
      },
      [BREAKPOINTS.xxxl]: {
        slidesPerView: 6,
        spaceBetween: 120,
      },
    },
  })
}

if (partnersSwiper) homePartners()
