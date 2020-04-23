const prevBtns = document.querySelectorAll('.card__arrow-btn--prev');
const nextBtns = document.querySelectorAll('.card__arrow-btn--next');

const disableBtns = (btnList) => {
  console.log(btnList);
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

var headerSwiper = new Swiper('.header__swiper', {
  navigation: {
    nextEl: '.swiper--next',
    prevEl: '.swiper--prev',
  },
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
