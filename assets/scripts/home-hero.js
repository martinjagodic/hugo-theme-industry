/* global Swiper, gsap */

const hero = document.querySelector('.home-hero')
const heroSwiper = hero?.querySelector('.swiper')

function homeHero () {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper(heroSwiper, {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 8000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  })
}

function heroAnim () {
  const text = hero.querySelector('.home-hero__text')
  const image = hero.querySelector('.home-hero__image')

  gsap.from(text, {
    opacity: 0,
    ease: 'power2.out',
    duration: 2,
    delay: 0.5,
  })

  gsap.from(image, {
    right: '-20%',
    opacity: 0,
    ease: 'power2.out',
    duration: 2,
    delay: 0.2,
  })
}

if (heroSwiper) homeHero()
if (hero) heroAnim()
