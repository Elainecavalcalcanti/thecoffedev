const openBtn = document.querySelector("#menu-open-button");
const closeBtn = document.querySelector("#menu-close-button");
const navMenu = document.querySelector(".nav-menu");

openBtn.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
});

closeBtn.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});



const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 20,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    640: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    }
  }
});