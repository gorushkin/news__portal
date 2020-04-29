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
  pagination: {
    el: '.slider__pagination',
    // dynamicBullets: true,
    // type: 'fraction',
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
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

  const closeMenu = (evt) => {
    evt.preventDefault();
    navMenu.classList.remove('js__show');
    closeBtn.removeEventListener('click', closeMenu);
  }

  openBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    navMenu.classList.add('js__show');
    closeBtn.addEventListener('click', closeMenu);
  })

})();
