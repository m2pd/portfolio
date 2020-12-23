// SHOW MENU
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

// REMOVE MENU AFTER CLICK LINK
const navLinks = document.querySelectorAll('.nav__link')

const hideMenu = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLinks.forEach(item => item.addEventListener('click', hideMenu))

// SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav__item a[href*=${sectionId}]`).classList.add('active-link')
    } else {
      document.querySelector(`.nav__item a[href*=${sectionId}]`).classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

// CHANGE BACKGROUND HEADER
function scrollHeader() {
  const header = document.getElementById('header')
  if (this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// SHOW SCROLL TOP
function scrollTop() {
  const scroll = document.getElementById('scroll-top')
  if (this.scrollY >= 560) scroll.classList.add('show-scroll'); else scroll.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

// MIXITUP FILTER PORTFOLIO
const mixer = mixitup('.portfolio__container', {
  selectors: {
    target: '.portfolio__content'
  },
  animation: {
    duration: 400
  }
})

// Link active portfolio
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio() {
  if (linkPortfolio) {
    linkPortfolio.forEach(link => link.classList.remove('active-portfolio'))
    this.classList.add('active-portfolio')
  }
}

linkPortfolio.forEach(link => link.addEventListener('click', activePortfolio))

// SWIPER CAROUSEL
const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  spaceBetween: 16,
  loop: true,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

})


// GSAP
gsap.from('.home__img', { autoAlpha: 0, duration: 2, delay: 0.5, x: 60 })
gsap.from('.home__data', { autoAlpha: 0, duration: 2, delay: 0.8, y: 25 })
gsap.from('.home__greeting, .home__name, .home__profession, .home__button',
  { autoAlpha: 0, duration: 2, delay: 1, y: 25, stagger: 0.2, ease: "expo.out" })
gsap.from('.nav__logo, .nav__toggle',
  { autoAlpha: 0, duration: 2, delay: 1.5, y: 25, stagger: 0.2, ease: "expo.out" })
gsap.from('.nav__item',
  { autoAlpha: 0, duration: 2, delay: 1.8, y: 25, stagger: 0.2, ease: "expo.out" })
gsap.from('.home__social-icon',
  { autoAlpha: 0, duration: 2, delay: 2.3, y: 25, stagger: 0.2, ease: "expo.out" })


