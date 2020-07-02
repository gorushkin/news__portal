// function testWebP(callback) {

//   var webP = new Image();
//   webP.onload = webP.onerror = function () {
//     callback(webP.height == 2);
//   };
//   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }

// testWebP(function (support) {

//   if (support == true) {
//     document.querySelector('body').classList.add('webp');
//   }
// });

// Add this script before other scripts in HTML file
(function () {
  window.__listeners__ = {
    listenersCount: 0
  };


  Element.prototype.addEventListener = new Proxy(Element.prototype.addEventListener, {
    apply: function (target, thisArg, argumentsList) {
      let type = argumentsList[0];
      let fn = argumentsList[1];

      if (!window.__listeners__[type]) {
        window.__listeners__[type] = [];
      }

      console.log(`%cADD: event ${type} to`, 'color: blue; border: 1px solid blue; padding: 10px;', thisArg, fn);
      window.__listeners__[type].push({
        type: type,
        fn: fn,
        element: thisArg
      });
      window.__listeners__.listenersCount++;

      return target.apply(thisArg, argumentsList);
    }
  });

  Element.prototype.removeEventListener = new Proxy(Element.prototype.removeEventListener, {
    apply: function (target, thisArg, argumentsList) {
      let type = argumentsList[0];
      let fn = argumentsList[1];

      console.log(`%cATTEMPT TO REMOVE: event ${type} from`, 'color: green; border: 1px solid green; padding: 10px;', thisArg, fn);

      if (!window.__listeners__[type]) {
        return;
      }


      window.__listeners__[type].forEach(function (item) {
        if (!item.fn === fn && item.element === thisArg && item.type === type) {
          return;
        }
        let index = window.__listeners__[type].indexOf(item);

        window.__listeners__[type] = [
          ...window.__listeners__[type].slice(0, index),
          ...window.__listeners__[type].slice(index + 1)
        ];
        console.log(`%cREMOVE: event ${type} from`, 'color: orange; border: 1px solid orange; padding: 10px;', thisArg, fn);
        window.__listeners__.listenersCount--;
      });
    }
  });
});

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
  spaceBetween: 30,
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      pagination: {
        el: '.read-more__swiper-pagination',
        renderBullet: function (index, className) {
          return '<span class="read-more__swiper-bullet ' + className + '"></span>';
        },
      },
    },
    768: {
      slidesPerView: 4,
      navigation: {
        nextEl: '.swiper--next',
        prevEl: '.swiper--prev',
      },
    }
  }
});

(function () {
  const openBtn = document.querySelector('.header__menu-btn--open');
  const closeBtn = document.querySelector('.header__menu-btn--close');
  const navMenu = document.querySelector('.js__menu');

  const closeMenu = (evt) => {
    evt.preventDefault();
    navMenu.classList.remove('js__show');
    closeBtn.removeEventListener('click', closeMenu);
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    navMenu.classList.add('js__show');
    closeBtn.addEventListener('click', closeMenu);
    document.body.style.overflow = 'hidden';
  })

})();
