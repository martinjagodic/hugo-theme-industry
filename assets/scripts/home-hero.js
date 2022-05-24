/* global Swiper */

const heroSwiper = document.querySelector('.home-hero .swiper')

function homeHero () {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper(heroSwiper, {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  })
}

if (heroSwiper) homeHero()
