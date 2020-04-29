const prevBtns = document.querySelectorAll('.card__arrow-btn--prev');
const nextBtns = document.querySelectorAll('.card__arrow-btn--next');

const disableBtns = (btnList) => {
  btnList.forEach((btn) => {
    btn.classList.toggle('card__arrow-btn--disable');
  });
}

const resetBtns = () => {
  prevBtns.forEach((btn) => {
    btn.classList.remove('card__arrow-btn--disable');
  });
  nextBtns.forEach((btn) => {
    btn.classList.remove('card__arrow-btn--disable');
  });
}

const headerSwiper = new Swiper('.header__swiper', {
  navigation: {
    nextEl: '.swiper--next',
    prevEl: '.swiper--prev',
  },
  loop: true,
  on: {
    init: function () {
      disableBtns(prevBtns);
    },
    fromEdge: function () {
      resetBtns();
    },
    reachBeginning: function () {
      disableBtns(prevBtns);
    },
    reachEnd: function () {
      disableBtns(nextBtns);
    },
  },
});

const readMoreSwiper = new Swiper('.read-more__swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper--next',
    prevEl: '.swiper--prev',
  },
});

(function() {
  const openBtn = document.querySelector('.header__menu-btn--open');
  const closeBtn = document.querySelector('.header__menu-btn--close');
  const navMenu = document.querySelector('.js__menu');

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navMenu.classList.add('js__show');
    closeBtn.classList.add('js__show');
  })

})();
