/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/polyfill/lib/noConflict.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/noConflict.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/es6 */ "./node_modules/core-js/es6/index.js");

__webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");

__webpack_require__(/*! core-js/fn/array/flat-map */ "./node_modules/core-js/fn/array/flat-map.js");

__webpack_require__(/*! core-js/fn/string/pad-start */ "./node_modules/core-js/fn/string/pad-start.js");

__webpack_require__(/*! core-js/fn/string/pad-end */ "./node_modules/core-js/fn/string/pad-end.js");

__webpack_require__(/*! core-js/fn/string/trim-start */ "./node_modules/core-js/fn/string/trim-start.js");

__webpack_require__(/*! core-js/fn/string/trim-end */ "./node_modules/core-js/fn/string/trim-end.js");

__webpack_require__(/*! core-js/fn/symbol/async-iterator */ "./node_modules/core-js/fn/symbol/async-iterator.js");

__webpack_require__(/*! core-js/fn/object/get-own-property-descriptors */ "./node_modules/core-js/fn/object/get-own-property-descriptors.js");

__webpack_require__(/*! core-js/fn/object/values */ "./node_modules/core-js/fn/object/values.js");

__webpack_require__(/*! core-js/fn/object/entries */ "./node_modules/core-js/fn/object/entries.js");

__webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");

__webpack_require__(/*! core-js/web */ "./node_modules/core-js/web/index.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./src/modules/burger-menu.js":
/*!************************************!*\
  !*** ./src/modules/burger-menu.js ***!
  \************************************/
/***/ (() => {

const burgerIcon = document.querySelector(".burger");
const navigation = document.querySelector(".top-nav");
const navList = document.querySelector(".top-nav__list");
const navItems = document.querySelectorAll(".top-nav__item");
const header = document.querySelector("header");
document.addEventListener("click", burgerHandler);
function burgerHandler(e) {
  const burgerOpened = isBurgerOpen();
  if (e.target.classList.contains("burger") || e.target.closest(".burger")) {
    toggleBurger();
    document.querySelector(".plug") ? makeLight() : makeDark();
  } else if (burgerOpened && (e.target.classList.contains("top-nav") || e.target.closest(".top-nav"))) {
    openBurger();
  } else if (burgerOpened) {
    closeBurger();
    makeLight();
  }
}
function isBurgerOpen() {
  return burgerIcon.classList.contains("burger-opened");
}
function openBurger() {
  burgerIcon.classList.add("burger-opened");
  navigation.classList.add("top-nav-opened");
}
function closeBurger() {
  burgerIcon.classList.remove("burger-opened");
  navigation.classList.remove("top-nav-opened");
}
function toggleBurger() {
  console.log("toggleBurger");
  burgerIcon.classList.toggle("burger-opened");
  navigation.classList.toggle("top-nav-opened");
}
function makeDark() {
  const div = document.createElement("div");
  div.classList.add("plug");
  header.append(div);
  document.body.classList.add("fixed");
}
function makeLight() {
  const plug = document.querySelector(".plug");
  plug.remove();
  document.body.classList.remove("fixed");
}
navList.addEventListener("click", navHandler);
function navHandler(e) {
  console.log(e.target);
  if (e.target.closest(".top-nav__item")) {
    changeSelectedItem(e);
    closeBurger();
    makeLight();
  }
}
function changeSelectedItem(e) {
  [...navItems].forEach(item => item.classList.remove("top-nav__item-active"));
  e.target.closest(".top-nav__item").classList.add("top-nav__item-active");
}

/***/ }),

/***/ "./src/modules/grade.js":
/*!******************************!*\
  !*** ./src/modules/grade.js ***!
  \******************************/
/***/ (() => {

console.log("Самооценка\n1. Реализация burger menu на обеих страницах: +26\n2. Реализация слайдера-карусели на странице Main: +36\n3. Реализация пагинации на странице Pets: +36\n4. Реализация попап на обеих страницах: +12");

// console.log("Самооценка\nСтраница Main (60)\n1.Проверка верстки +7\n2. Вёрстка соответствует макету +35\n3. Требования к css +6\n4. Интерактивность элементов +12\nСтраница Pets (40)\n5. Проверка верстки +7\n6.Вёрстка соответствует макету +15\n7. Требования к css +4\n8. Интерактивность элементов +14");

// console.log("Shelter-2. Самооценка\n1.Вёрстка страницы Main соответствует макету при ширине экрана 1280px +14\n2.Вёрстка страницы Main соответствует макету при ширине экрана 768px +14\n3.Вёрстка страницы Main соответствует макету при ширине экрана 320px +14\n4.Вёрстка страницы Pets соответствует макету при ширине экрана 1280px +6\n5.Вёрстка страницы Pets соответствует макету при ширине экрана 768px +6\n6.Вёрстка страницы Pets соответствует макету при ширине экрана 320px +6\n7.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +20\n8.Верстка резиновая: при плавном изменении размера экрана элементы верстки так же плавно меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции +8\n9.При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню +4\n10.Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ . +8")

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
class Modal {
  constructor(classes) {
    this.classes = classes;
    this.modal = "";
    this.modalContent = "";
    this.closeButton = "";
    this.overlay = "";
  }
  buildModal(content) {
    this.overlay = this.createNode(this.overlay, "div", "overlay");
    this.modal = this.createNode(this.modal, "div", this.classes);
    this.modalWrapper = this.createNode(this.modalWrapper, "div", "modal__wrapper");
    this.modalCloseButton = this.createNode(this.modalCloseButton, "div", "modal__button");
    this.modalCloseButton.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/>
        </svg>
        `;
    this.setContent(content);
    this.appendElements();
    this.openModal();
    this.bindEvents();
  }
  createNode(node, element) {
    node = document.createElement(element);
    for (var _len = arguments.length, classes = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      classes[_key - 2] = arguments[_key];
    }
    node.classList.add(classes);
    return node;
  }
  setContent(content) {
    this.modalWrapper.innerHTML = content;
  }
  appendElements() {
    this.overlay.append(this.modal);
    this.modal.append(this.modalCloseButton);
    this.modal.append(this.modalWrapper);
  }
  bindEvents() {
    this.modalCloseButton.addEventListener("click", this.closeModal);
    this.overlay.addEventListener("click", this.closeModal);
  }
  openModal() {
    //Анимация на плавное появление можалки
    this.modal.classList.add("make-visible");
    this.modal.classList.remove("make-hidden");

    //Присоединяем модалку к DOM
    document.body.append(this.overlay);

    //Фиксируем задник
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = "fixed";
  }
  closeModal(e) {
    if (e.target.classList.contains("overlay") || e.target.closest(".modal__button")) {
      //Останавливаем всплытие события, чтобы closeModal(e) сработл только один раз
      e.stopPropagation();
      //Анимация на плавное исчезновение модалки
      document.querySelector(".modal").classList.remove("make-visible");
      document.querySelector(".modal").classList.add("make-hidden");
      const doAfterAnimation = e => {
        if (e.animationName === "make-hidden") {
          //Получаем текущее значение top
          const scrollY = document.body.style.top;

          //Обнуляем стили body
          document.body.style.position = "";
          document.body.style.top = "";

          //Перематываем до нужного значения top
          window.scrollTo(0, parseInt(scrollY || '0') * -1);

          //Убираем overlay и заглушку у body
          document.querySelector(".overlay").remove();
        }
      };
      document.querySelector(".modal").addEventListener("animationend", doAfterAnimation);
    }
  }
}

/***/ }),

/***/ "./src/modules/pagination.js":
/*!***********************************!*\
  !*** ./src/modules/pagination.js ***!
  \***********************************/
/***/ (() => {

if (document.location.href.includes("pets")) {
  let currentPage = 1;
  const container = document.querySelector(".gallery");
  const firstButton = document.querySelector(".pagination__first");
  const prevButton = document.querySelector(".pagination__prev");
  const currentButton = document.querySelector(".pagination__page");
  const nextButton = document.querySelector(".pagination__next");
  const lastButton = document.querySelector(".pagination__last");
  let cards = selectCardsNumber();
  (async () => {
    const pets = await getData();
    const allCardsIndexes = getUniqueIndexes(pets, cards.cardsPerPage, cards.pages);
    const changeView = () => {
      cards = selectCardsNumber();

      //Выводим картоки на 1 странице
      renderData(allCardsIndexes, pets);
    };
    const runListeners = () => {
      nextButton.addEventListener("click", showNext);
      function showNext() {
        currentPage += 1;
        changeButtonsStyle();
        renderData(allCardsIndexes, pets);
      }
      prevButton.addEventListener("click", showPrev);
      function showPrev() {
        currentPage -= 1;
        changeButtonsStyle();
        renderData(allCardsIndexes, pets);
      }
      lastButton.addEventListener("click", showLast);
      function showLast() {
        currentPage = cards.pages;
        changeButtonsStyle();
        renderData(allCardsIndexes, pets);
      }
      firstButton.addEventListener("click", showFirst);
      function showFirst() {
        currentPage = 1;
        changeButtonsStyle();
        renderData(allCardsIndexes, pets);
      }
    };
    changeView();
    runListeners();
    window.addEventListener('resize', () => {
      let currentCards = selectCardsNumber();
      if (currentCards.pages !== cards.pages) {
        resetCurrentPage();
        changeView();
      }
    });
  })();
  async function getData() {
    try {
      const path = "./data/pets.json";
      const res = await fetch(path);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  }
  function selectCardsNumber() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1209) {
      return {
        cardsPerPage: 8,
        pages: 6
      };
    }
    if (windowWidth >= 767) {
      return {
        cardsPerPage: 6,
        pages: 8
      };
    }
    return {
      cardsPerPage: 3,
      pages: 16
    };
  }
  function getRandom(array) {
    const min = 0;
    const max = array.length - 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function getUniqueIndexes(array, cardsPerPage, pages) {
    // Создаем массив с 48 животными, каждого по 6
    const pets = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < 6; j++) {
        pets.push(i);
      }
    }
    const groups = [];
    let output = [];
    for (let i = 0; i < pages; i++) {
      const group = [];
      for (let j = 0; j < cardsPerPage; j++) {
        const petIndex = i + j * pages;
        group.push(pets[petIndex]);
      }
      shuffle(group);
      groups.push(group);
      output = groups.flat();
    }
    console.log("Массив генерится один раз при обновлении страницы", output);
    return output;
  }
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  function renderData(array, json) {
    const petsForPage = cards.cardsPerPage;
    const onePageItems = array.slice((currentPage - 1) * petsForPage, (currentPage - 1) * petsForPage + cards.cardsPerPage);
    const template = onePageItems.map(element => `<div class="gallery__item" data-id="${element}"><img class="pet__photo" src=${json[element].img} alt="pet"><div class="pet__name">${json[element].name}</div><button class="button button-secondary" type="button">Learn more</button></div>`);
    container.addEventListener("animationend", doAfterAnimation);
    container.classList.remove("make-visible");
    container.classList.add("make-hidden");
    function doAfterAnimation(e) {
      if (e.animationName === "make-hidden") {
        container.innerHTML = ``;
        container.insertAdjacentHTML("afterbegin", template.join(""));
        container.classList.remove("make-hidden");
        container.classList.add("make-visible");
      }
    }
  }
  function changeButtonsStyle() {
    currentButton.innerText = currentPage;
    if (currentPage === 1) {
      prevButton.classList.remove("state-available");
      prevButton.classList.add("state-disable");
      firstButton.classList.remove("state-available");
      firstButton.classList.add("state-disable");
    }
    if (currentPage > 1) {
      prevButton.classList.remove("state-disable");
      prevButton.classList.add("state-available");
      firstButton.classList.remove("state-disable");
      firstButton.classList.add("state-available");
    }
    if (currentPage < cards.pages) {
      nextButton.classList.remove("state-disable");
      nextButton.classList.add("state-available");
      lastButton.classList.remove("state-disable");
      lastButton.classList.add("state-available");
    }
    if (currentPage === cards.pages) {
      lastButton.classList.remove("state-available");
      lastButton.classList.add("state-disable");
      nextButton.classList.remove("state-available");
      nextButton.classList.add("state-disable");
    }
  }
  function resetCurrentPage() {
    currentPage = 1;
    changeButtonsStyle();
  }
}

/***/ }),

/***/ "./src/modules/run-modal.js":
/*!**********************************!*\
  !*** ./src/modules/run-modal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "runModal": () => (/* binding */ runModal)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modules/modal.js");

const runModal = (data, containerClass, itemClass) => {
  const sliderContainer = document.querySelector(`.${containerClass}`);
  const sliderHandler = e => {
    if (e.target.closest(`.${itemClass}`)) {
      const currentIndex = e.target.closest(`.${itemClass}`).getAttribute("data-id");
      const content = `<img src="${data[currentIndex].img}" alt="${data[currentIndex].name}"><div class="modal__info"><div class="modal__title">${data[currentIndex].name}</div><div class="modal__subtitle">${data[currentIndex].type} - ${data[currentIndex].breed}</div><div class="modal__text">${data[currentIndex].description}</div><ul class="modal__list"><li class="modal__item"><span>Age: </span>${data[currentIndex].age}</li><li class="modal__item"><span>Inoculations: </span>${data[currentIndex].inoculations}</li><li class="modal__item"><span>Diseases: </span>${data[currentIndex].diseases}</li><li class="modal__item"><span>Parasites: </span>${data[currentIndex].parasites}</li></ul></div>`;

      //Нарисуем модалку
      const modal = new _modal__WEBPACK_IMPORTED_MODULE_0__.Modal("modal");
      modal.buildModal(content);
    }
  };
  sliderContainer.addEventListener("click", sliderHandler);
};

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ (() => {

if (!document.location.href.includes("pets")) {
  const sliderContainer = document.querySelector(".slider__container");
  const prevButton = document.querySelector(".slider__prev");
  const nextButton = document.querySelector(".slider__next");
  (async () => {
    const pets = await getData();
    const state = {
      current: [],
      prev: [],
      next: [],
      cardsNumber: 0
    };

    //Посчитаем число карточек для отображения
    let cardsNumber = selectCardsNumber();
    const changeView = () => {
      cardsNumber = selectCardsNumber();
      state.cardsNumber = cardsNumber;

      //Сгенерируем индексы для отображения карточек на текущей странице
      const currentPets = getUniqueIndexes(pets, "current");
      state.current = currentPets;

      //Сгенерируем индексы для отображения карточек на next странице
      const nextPets = getUniqueIndexes(pets, "current");
      state.next = nextPets;

      //Сгенерируем индексы для отображения карточек на prev странице
      const prevPets = getUniqueIndexes(pets, "current");
      state.prev = prevPets;

      //Выведем карточки на страницу
      const allCardsIndexes = [...state.prev, ...state.current, ...state.next];
      renderData(allCardsIndexes, pets);

      //Генерим и отображаем карточки при листании
      prevButton.addEventListener("click", showPrev);
      nextButton.addEventListener("click", showNext);
      sliderContainer.addEventListener("animationend", doAfterAnimation);
    };
    changeView();
    window.addEventListener('resize', () => {
      cardsNumber = selectCardsNumber();
      if (cardsNumber !== state.cardsNumber) {
        changeView();
      }
    });
    function selectCardsNumber() {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1279) {
        return 3;
      }
      if (windowWidth > 767) {
        return 2;
      }
      return 1;
    }
    function getRandom(array) {
      const min = 0;
      const max = array.length - 1;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function getUniqueIndexes(array, stateName) {
      const currentPets = [];
      while (currentPets.length < cardsNumber) {
        let randomIndex = getRandom(array);
        if (!currentPets.includes(randomIndex) && !state[stateName].includes(randomIndex)) {
          currentPets.push(randomIndex);
        }
      }
      return currentPets;
    }
    function renderData(array, json) {
      const template = array.map(element => `<div class="slider__item" data-id="${element}"><img class="pet__photo" src=${json[element].img} alt="pet"><div class="pet__name">${json[element].name}</div><button class="button button-secondary" type="button">Learn more</button></div>`);
      sliderContainer.innerHTML = ``;
      sliderContainer.insertAdjacentHTML("afterbegin", template.join(""));
    }
    function showNext() {
      sliderContainer.classList.add("transition-right");
      // prevButton.removeEventListener("click", showPrev);
      // nextButton.removeEventListener("click", showNext);
    }
    ;
    function showPrev() {
      sliderContainer.classList.add("transition-left");
      // prevButton.removeEventListener("click", showPrev);
      // nextButton.removeEventListener("click", showNext);
    }
    ;
    function doAfterAnimation(e) {
      let movedItems;
      if (e.animationName === "move-right") {
        sliderContainer.classList.remove("transition-right");
        const nextItems = getUniqueIndexes(pets, "next");
        state.prev = state.current;
        state.current = state.next;
        state.next = nextItems;
        const allCardsIndexes = [...state.prev, ...state.current, ...state.next];
        renderData(allCardsIndexes, pets);
      } else {
        sliderContainer.classList.remove("transition-left");
        const prevItems = getUniqueIndexes(pets, "prev");
        state.next = state.current;
        state.current = state.prev;
        state.prev = prevItems;
        const allCardsIndexes = [...state.prev, ...state.current, ...state.next];
        renderData(allCardsIndexes, pets);
      }
    }
  })();
  async function getData() {
    try {
      const path = "./data/pets.json";
      const res = await fetch(path);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}

/***/ }),

/***/ "./node_modules/core-js/es6/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/es6/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! ../modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");
__webpack_require__(/*! ../modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
__webpack_require__(/*! ../modules/es6.object.define-properties */ "./node_modules/core-js/modules/es6.object.define-properties.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.object.get-prototype-of */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-names */ "./node_modules/core-js/modules/es6.object.get-own-property-names.js");
__webpack_require__(/*! ../modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");
__webpack_require__(/*! ../modules/es6.object.seal */ "./node_modules/core-js/modules/es6.object.seal.js");
__webpack_require__(/*! ../modules/es6.object.prevent-extensions */ "./node_modules/core-js/modules/es6.object.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.object.is-frozen */ "./node_modules/core-js/modules/es6.object.is-frozen.js");
__webpack_require__(/*! ../modules/es6.object.is-sealed */ "./node_modules/core-js/modules/es6.object.is-sealed.js");
__webpack_require__(/*! ../modules/es6.object.is-extensible */ "./node_modules/core-js/modules/es6.object.is-extensible.js");
__webpack_require__(/*! ../modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
__webpack_require__(/*! ../modules/es6.object.is */ "./node_modules/core-js/modules/es6.object.is.js");
__webpack_require__(/*! ../modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
__webpack_require__(/*! ../modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
__webpack_require__(/*! ../modules/es6.function.has-instance */ "./node_modules/core-js/modules/es6.function.has-instance.js");
__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/core-js/modules/es6.parse-int.js");
__webpack_require__(/*! ../modules/es6.parse-float */ "./node_modules/core-js/modules/es6.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! ../modules/es6.number.to-fixed */ "./node_modules/core-js/modules/es6.number.to-fixed.js");
__webpack_require__(/*! ../modules/es6.number.to-precision */ "./node_modules/core-js/modules/es6.number.to-precision.js");
__webpack_require__(/*! ../modules/es6.number.epsilon */ "./node_modules/core-js/modules/es6.number.epsilon.js");
__webpack_require__(/*! ../modules/es6.number.is-finite */ "./node_modules/core-js/modules/es6.number.is-finite.js");
__webpack_require__(/*! ../modules/es6.number.is-integer */ "./node_modules/core-js/modules/es6.number.is-integer.js");
__webpack_require__(/*! ../modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
__webpack_require__(/*! ../modules/es6.number.is-safe-integer */ "./node_modules/core-js/modules/es6.number.is-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.max-safe-integer */ "./node_modules/core-js/modules/es6.number.max-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.min-safe-integer */ "./node_modules/core-js/modules/es6.number.min-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.parse-float */ "./node_modules/core-js/modules/es6.number.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.parse-int */ "./node_modules/core-js/modules/es6.number.parse-int.js");
__webpack_require__(/*! ../modules/es6.math.acosh */ "./node_modules/core-js/modules/es6.math.acosh.js");
__webpack_require__(/*! ../modules/es6.math.asinh */ "./node_modules/core-js/modules/es6.math.asinh.js");
__webpack_require__(/*! ../modules/es6.math.atanh */ "./node_modules/core-js/modules/es6.math.atanh.js");
__webpack_require__(/*! ../modules/es6.math.cbrt */ "./node_modules/core-js/modules/es6.math.cbrt.js");
__webpack_require__(/*! ../modules/es6.math.clz32 */ "./node_modules/core-js/modules/es6.math.clz32.js");
__webpack_require__(/*! ../modules/es6.math.cosh */ "./node_modules/core-js/modules/es6.math.cosh.js");
__webpack_require__(/*! ../modules/es6.math.expm1 */ "./node_modules/core-js/modules/es6.math.expm1.js");
__webpack_require__(/*! ../modules/es6.math.fround */ "./node_modules/core-js/modules/es6.math.fround.js");
__webpack_require__(/*! ../modules/es6.math.hypot */ "./node_modules/core-js/modules/es6.math.hypot.js");
__webpack_require__(/*! ../modules/es6.math.imul */ "./node_modules/core-js/modules/es6.math.imul.js");
__webpack_require__(/*! ../modules/es6.math.log10 */ "./node_modules/core-js/modules/es6.math.log10.js");
__webpack_require__(/*! ../modules/es6.math.log1p */ "./node_modules/core-js/modules/es6.math.log1p.js");
__webpack_require__(/*! ../modules/es6.math.log2 */ "./node_modules/core-js/modules/es6.math.log2.js");
__webpack_require__(/*! ../modules/es6.math.sign */ "./node_modules/core-js/modules/es6.math.sign.js");
__webpack_require__(/*! ../modules/es6.math.sinh */ "./node_modules/core-js/modules/es6.math.sinh.js");
__webpack_require__(/*! ../modules/es6.math.tanh */ "./node_modules/core-js/modules/es6.math.tanh.js");
__webpack_require__(/*! ../modules/es6.math.trunc */ "./node_modules/core-js/modules/es6.math.trunc.js");
__webpack_require__(/*! ../modules/es6.string.from-code-point */ "./node_modules/core-js/modules/es6.string.from-code-point.js");
__webpack_require__(/*! ../modules/es6.string.raw */ "./node_modules/core-js/modules/es6.string.raw.js");
__webpack_require__(/*! ../modules/es6.string.trim */ "./node_modules/core-js/modules/es6.string.trim.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/es6.string.code-point-at */ "./node_modules/core-js/modules/es6.string.code-point-at.js");
__webpack_require__(/*! ../modules/es6.string.ends-with */ "./node_modules/core-js/modules/es6.string.ends-with.js");
__webpack_require__(/*! ../modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__(/*! ../modules/es6.string.repeat */ "./node_modules/core-js/modules/es6.string.repeat.js");
__webpack_require__(/*! ../modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");
__webpack_require__(/*! ../modules/es6.string.anchor */ "./node_modules/core-js/modules/es6.string.anchor.js");
__webpack_require__(/*! ../modules/es6.string.big */ "./node_modules/core-js/modules/es6.string.big.js");
__webpack_require__(/*! ../modules/es6.string.blink */ "./node_modules/core-js/modules/es6.string.blink.js");
__webpack_require__(/*! ../modules/es6.string.bold */ "./node_modules/core-js/modules/es6.string.bold.js");
__webpack_require__(/*! ../modules/es6.string.fixed */ "./node_modules/core-js/modules/es6.string.fixed.js");
__webpack_require__(/*! ../modules/es6.string.fontcolor */ "./node_modules/core-js/modules/es6.string.fontcolor.js");
__webpack_require__(/*! ../modules/es6.string.fontsize */ "./node_modules/core-js/modules/es6.string.fontsize.js");
__webpack_require__(/*! ../modules/es6.string.italics */ "./node_modules/core-js/modules/es6.string.italics.js");
__webpack_require__(/*! ../modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
__webpack_require__(/*! ../modules/es6.string.small */ "./node_modules/core-js/modules/es6.string.small.js");
__webpack_require__(/*! ../modules/es6.string.strike */ "./node_modules/core-js/modules/es6.string.strike.js");
__webpack_require__(/*! ../modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");
__webpack_require__(/*! ../modules/es6.string.sup */ "./node_modules/core-js/modules/es6.string.sup.js");
__webpack_require__(/*! ../modules/es6.date.now */ "./node_modules/core-js/modules/es6.date.now.js");
__webpack_require__(/*! ../modules/es6.date.to-json */ "./node_modules/core-js/modules/es6.date.to-json.js");
__webpack_require__(/*! ../modules/es6.date.to-iso-string */ "./node_modules/core-js/modules/es6.date.to-iso-string.js");
__webpack_require__(/*! ../modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! ../modules/es6.date.to-primitive */ "./node_modules/core-js/modules/es6.date.to-primitive.js");
__webpack_require__(/*! ../modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
__webpack_require__(/*! ../modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
__webpack_require__(/*! ../modules/es6.array.of */ "./node_modules/core-js/modules/es6.array.of.js");
__webpack_require__(/*! ../modules/es6.array.join */ "./node_modules/core-js/modules/es6.array.join.js");
__webpack_require__(/*! ../modules/es6.array.slice */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! ../modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
__webpack_require__(/*! ../modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
__webpack_require__(/*! ../modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
__webpack_require__(/*! ../modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__(/*! ../modules/es6.array.some */ "./node_modules/core-js/modules/es6.array.some.js");
__webpack_require__(/*! ../modules/es6.array.every */ "./node_modules/core-js/modules/es6.array.every.js");
__webpack_require__(/*! ../modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");
__webpack_require__(/*! ../modules/es6.array.reduce-right */ "./node_modules/core-js/modules/es6.array.reduce-right.js");
__webpack_require__(/*! ../modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
__webpack_require__(/*! ../modules/es6.array.last-index-of */ "./node_modules/core-js/modules/es6.array.last-index-of.js");
__webpack_require__(/*! ../modules/es6.array.copy-within */ "./node_modules/core-js/modules/es6.array.copy-within.js");
__webpack_require__(/*! ../modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
__webpack_require__(/*! ../modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
__webpack_require__(/*! ../modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
__webpack_require__(/*! ../modules/es6.array.species */ "./node_modules/core-js/modules/es6.array.species.js");
__webpack_require__(/*! ../modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! ../modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__(/*! ../modules/es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
__webpack_require__(/*! ../modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__(/*! ../modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
__webpack_require__(/*! ../modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__(/*! ../modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! ../modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
__webpack_require__(/*! ../modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");
__webpack_require__(/*! ../modules/es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js");
__webpack_require__(/*! ../modules/es6.weak-set */ "./node_modules/core-js/modules/es6.weak-set.js");
__webpack_require__(/*! ../modules/es6.typed.array-buffer */ "./node_modules/core-js/modules/es6.typed.array-buffer.js");
__webpack_require__(/*! ../modules/es6.typed.data-view */ "./node_modules/core-js/modules/es6.typed.data-view.js");
__webpack_require__(/*! ../modules/es6.typed.int8-array */ "./node_modules/core-js/modules/es6.typed.int8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-array */ "./node_modules/core-js/modules/es6.typed.uint8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-clamped-array */ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
__webpack_require__(/*! ../modules/es6.typed.int16-array */ "./node_modules/core-js/modules/es6.typed.int16-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint16-array */ "./node_modules/core-js/modules/es6.typed.uint16-array.js");
__webpack_require__(/*! ../modules/es6.typed.int32-array */ "./node_modules/core-js/modules/es6.typed.int32-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint32-array */ "./node_modules/core-js/modules/es6.typed.uint32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float32-array */ "./node_modules/core-js/modules/es6.typed.float32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float64-array */ "./node_modules/core-js/modules/es6.typed.float64-array.js");
__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/core-js/fn/array/flat-map.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/flat-map.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.array.flat-map */ "./node_modules/core-js/modules/es7.array.flat-map.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.flatMap;


/***/ }),

/***/ "./node_modules/core-js/fn/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/includes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.includes;


/***/ }),

/***/ "./node_modules/core-js/fn/object/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/object/entries.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.entries;


/***/ }),

/***/ "./node_modules/core-js/fn/object/get-own-property-descriptors.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "./node_modules/core-js/fn/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/object/values.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/fn/promise/finally.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/promise/finally.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ../../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../../modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Promise["finally"];


/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-end.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-end.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.pad-end */ "./node_modules/core-js/modules/es7.string.pad-end.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padEnd;


/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-start.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-start.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.pad-start */ "./node_modules/core-js/modules/es7.string.pad-start.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padStart;


/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-end.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-end.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.trim-right */ "./node_modules/core-js/modules/es7.string.trim-right.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimRight;


/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-start.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-start.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.trim-left */ "./node_modules/core-js/modules/es7.string.trim-left.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimLeft;


/***/ }),

/***/ "./node_modules/core-js/fn/symbol/async-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/fn/symbol/async-iterator.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
module.exports = (__webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js").f)('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/fn/global.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/library/fn/global.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es7.global */ "./node_modules/core-js/library/modules/es7.global.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").global;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.global.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.global.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.G, { global: __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey);
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak);
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/***/ ((module) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/***/ ((module) => {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = (__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set);
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/***/ ((module) => {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/***/ ((module) => {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/***/ ((module) => {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/***/ ((module) => {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  (__webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild)(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = (__webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat)('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var isEnum = (__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f);
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect);
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseFloat = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseFloat);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseInt = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseInt);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

(__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource) = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f)(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var def = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")) {
  var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
  var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
  var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
  var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
  var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
  var $buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
  var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
  var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
  var propertyDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
  var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
  var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
  var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
  var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
  var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
  var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
  var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
  var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
  var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
  var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
  var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
  var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js");
  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
  var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
  var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
  var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js");
  var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
  var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/***/ ((module) => {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol);
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = (__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod) = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $every = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $some = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Array');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "./node_modules/core-js/modules/_date-to-iso-string.js");

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ "./node_modules/core-js/modules/_date-to-primitive.js"));


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var HAS_INSTANCE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var log1p = __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js");
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var gOPD = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var _isFinite = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").isFinite);

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isInteger = __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js");
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperty: (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return (__webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js").f);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: (__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = ((__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect) || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = ((__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect) || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY);
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f) = gOPNExt.f = $getOwnPropertyNames;
  (__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f) = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var ArrayBuffer = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").ArrayBuffer);
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.G + $export.W + $export.F * !(__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js").ABV), {
  DataView: (__webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js").DataView)
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "./node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('flatMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js");
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/core-js/web/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/web/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! ../modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/georgia.woff2 */ "./src/assets/fonts/georgia.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/georgia.woff */ "./src/assets/fonts/georgia.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/georgia.ttf */ "./src/assets/fonts/georgia.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/georgiab.woff2 */ "./src/assets/fonts/georgiab.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/georgiab.woff */ "./src/assets/fonts/georgiab.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/georgiab.ttf */ "./src/assets/fonts/georgiab.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/georgiai.woff2 */ "./src/assets/fonts/georgiai.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/georgiai.woff */ "./src/assets/fonts/georgiai.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/georgiai.ttf */ "./src/assets/fonts/georgiai.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/arial.woff2 */ "./src/assets/fonts/arial.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/arial.woff */ "./src/assets/fonts/arial.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/arial.ttf */ "./src/assets/fonts/arial.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/ariali.woff2 */ "./src/assets/fonts/ariali.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/ariali.woff */ "./src/assets/fonts/ariali.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/ariali.ttf */ "./src/assets/fonts/ariali.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/icomoon.eot?gjaarj */ "./src/assets/fonts/icomoon.eot?gjaarj"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/icomoon.ttf?gjaarj */ "./src/assets/fonts/icomoon.ttf?gjaarj"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/icomoon.woff?gjaarj */ "./src/assets/fonts/icomoon.woff?gjaarj"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/icomoon.svg?gjaarj */ "./src/assets/fonts/icomoon.svg?gjaarj"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/svg/dot.svg */ "./src/assets/svg/dot.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/background/noise_transparent.png */ "./src/assets/img/background/noise_transparent.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/background/start-screen-puppy.png */ "./src/assets/img/background/start-screen-puppy.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/arrow.png */ "./src/assets/img/arrow.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/footer-puppy.png */ "./src/assets/img/footer-puppy.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/about-pets.png */ "./src/assets/img/about-pets.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/donation-dog.png */ "./src/assets/img/donation-dog.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___, { hash: "#icomoon" });
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  -webkit-text-decoration: underline;\n  text-decoration: underline; /* 2 */\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n@font-face {\n  font-family: \"Georgia\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  /* Браузер сначала попробует найти шрифт локально */\n  src: local(\"Georgia\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"ttf\");\n}\n@font-face {\n  font-family: \"Georgia\", sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  /* Браузер сначала попробует найти шрифт локально */\n  src: local(\"Georgia\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"ttf\");\n}\n@font-face {\n  font-family: \"Georgia\", sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  /* Браузер сначала попробует найти шрифт локально */\n  src: local(\"Georgia\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"ttf\");\n}\n@font-face {\n  font-family: \"Arial\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  /* Браузер сначала попробует найти шрифт локально */\n  src: local(\"Arial\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format(\"ttf\");\n}\n@font-face {\n  font-family: \"Arial\", sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  /* Браузер сначала попробует найти шрифт локально */\n  src: local(\"Arial\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format(\"ttf\");\n}\n@font-face {\n  font-family: \"icomoon\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n}\n[class^=icon-], [class*=\" icon-\"] {\n  font-family: \"icomoon\" !important;\n}\n[class^=icon-], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  speak: never;\n  font-style: normal;\n  font-weight: normal;\n  font-feature-settings: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-credit:before {\n  content: \"\\e900\";\n  margin-right: 15px;\n}\n\n.icon-email:before {\n  content: \"\\e901\";\n  margin-right: 20px;\n}\n\n.icon-phone:before {\n  content: \"\\e902\";\n  margin-right: 20px;\n}\n\n.icon-pin:before {\n  content: \"\\e903\";\n  margin-right: 20px;\n}\n\n/* Убираем внешние отступы */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n.in-addition__container h2, .our-friends__container h2, .about__title h2, .footer__title > h2 {\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 2.1875rem;\n  line-height: 1.3;\n  color: #545454;\n  letter-spacing: 0.06em;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  background-color: rgba(41, 41, 41, 0.6);\n}\n\n.modal {\n  position: relative;\n  width: 900px;\n  height: 500px;\n  border-radius: 9px;\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n  background-color: #FAFAFA;\n}\n.modal__button {\n  position: absolute;\n  top: -52px;\n  right: -42px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  border: 2px solid #F1CDB3;\n  color: #292929;\n  background-color: #7f7f7f;\n  cursor: pointer;\n  transition: all 0.5s linear;\n}\n.modal__button:hover {\n  background-color: #F1CDB3;\n  transition: all 0.5s linear;\n}\n.modal__wrapper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.modal img {\n  width: 500px;\n  height: 500px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 9px 0 0 9px;\n}\n.modal__info {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  width: 351px;\n  margin: 50px 20px 88px 29px;\n}\n.modal__title {\n  margin-bottom: 10px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 2.1875rem;\n  line-height: 1.3;\n  color: #000;\n  letter-spacing: 0.06em;\n}\n.modal__subtitle {\n  margin-bottom: 40px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.15;\n  color: #000;\n  letter-spacing: 0.06em;\n}\n.modal__text {\n  margin-bottom: 40px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.1;\n  color: #000;\n  letter-spacing: 0.06em;\n}\n.modal__list {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  margin-left: 0;\n  padding: 0;\n  list-style: none;\n}\n.modal__list > * + * {\n  margin-top: 11px;\n}\n.modal__item {\n  position: relative;\n  margin-left: 14px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.1;\n  color: #000;\n  letter-spacing: 0.06em;\n}\n.modal__item:before {\n  position: absolute;\n  top: -3px;\n  left: -14px;\n  width: 4px;\n  height: 4px;\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");\n  color: #F1CDB3;\n}\n.modal__item > span {\n  font-weight: 700;\n}\n\n@media (max-width: 1279px) {\n  .modal {\n    width: 630px;\n    height: 350px;\n  }\n  .modal img {\n    width: 350px;\n    height: 350px;\n  }\n  .modal__info {\n    width: 260px;\n    margin: 10px 9px 37px 11px;\n  }\n  .modal__subtitle {\n    margin-bottom: 20px;\n  }\n  .modal__text {\n    margin-bottom: 20px;\n    font-size: 0.8125rem;\n  }\n  .modal__list > * + * {\n    margin-top: 5px;\n  }\n}\n@media (max-width: 730px) {\n  .modal {\n    width: 240px;\n    min-height: 341px;\n    height: auto;\n  }\n  .modal img {\n    display: none;\n  }\n  .modal__button {\n    right: -30px;\n  }\n  .modal__info {\n    width: 220px;\n    margin: 10px 10px;\n  }\n  .modal__title {\n    margin-bottom: 10px;\n  }\n  .modal__title, .modal__subtitle {\n    text-align: center;\n  }\n  .modal__text {\n    margin-bottom: 24px;\n    text-align: justify;\n  }\n}\n.burger {\n  display: none;\n}\n\n@media (max-width: 767px) {\n  .burger {\n    position: sticky;\n    top: 48px;\n    right: 20px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex-wrap: nowrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n    width: 30px;\n    height: 22px;\n    z-index: 20;\n    cursor: pointer;\n  }\n  .burger__line {\n    position: relative;\n    width: 100%;\n    height: 2px;\n    background-color: #F1CDB3;\n    transition: all 0.5s linear;\n  }\n  .header-light .burger__line {\n    background-color: #000;\n  }\n  .burger__line:before, .burger__line:after {\n    position: absolute;\n    content: \"\";\n    left: 0;\n    width: 100%;\n    height: 2px;\n    background-color: #F1CDB3;\n  }\n  .header-light .burger__line:before, .header-light .burger__line:after {\n    background-color: #000;\n  }\n  .burger__line:before {\n    top: 10px;\n  }\n  .burger__line:after {\n    top: 20px;\n  }\n  .burger-opened > .burger__line {\n    transform: rotate(90deg);\n    transform-origin: 20px 5px;\n    transition: all 0.5s linear;\n  }\n}\nheader {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ") repeat, radial-gradient(100% 215.42% at 0% 0%, #5B483A 0%, #262425 100%), #211F20;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  height: 878px;\n  padding-top: 30px;\n  padding-left: 40px;\n  padding-right: 40px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ");\n  background-size: 698px 728px;\n  background-position: right 40px bottom 0;\n  background-repeat: no-repeat;\n}\n\n.top {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n\n.header-light {\n  background: 0;\n  background-color: #fff;\n}\n.header-light__container {\n  padding-left: 40px;\n  padding-right: 40px;\n}\n.header-light .top {\n  height: 120px;\n}\n\n@media (max-width: 1260px) {\n  .header {\n    height: 1135px;\n    padding: 30px 30px 0;\n    background-size: 569px 593px;\n    background-position: right 30px bottom 0;\n    background-repeat: no-repeat;\n  }\n  .header-light__container {\n    padding: 0 30px;\n  }\n}\n@media (max-width: 767px) {\n  .header {\n    height: 793px;\n    padding: 30px 20px 0;\n    background-size: 260px 272px;\n    background-position: right 10px bottom 0;\n    background-repeat: no-repeat;\n  }\n  .header-light__container {\n    padding: 0 20px;\n  }\n}\n.button {\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 13px 43px;\n  border: 2px solid #F1CDB3;\n  border-radius: 100px;\n  white-space: nowrap;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.0625rem;\n  line-height: 1.3;\n  color: #292929;\n  letter-spacing: 0.06em;\n  cursor: pointer;\n  transition: all 0.5s linear;\n}\n.button:hover {\n  background: #FDDCC4;\n  border-color: #FDDCC4;\n  transition: all 0.5s linear;\n}\n\n.button-primary {\n  background: #F1CDB3;\n}\n\n.button-secondary {\n  background: #fff;\n}\n\n.button-link {\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 13px 43px;\n  border: 2px solid #F1CDB3;\n  border-radius: 100px;\n  white-space: nowrap;\n  background: #F1CDB3;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.0625rem;\n  line-height: 1.3;\n  color: #292929;\n  letter-spacing: 0.06em;\n  cursor: pointer;\n  transition: all 0.5s linear;\n}\n.button-link:hover {\n  background: #FDDCC4;\n  border-color: #FDDCC4;\n  transition: all 0.5s linear;\n}\n\n.logo {\n  text-align: right;\n}\n.logo:hover a {\n  color: #292929;\n}\n.logo a {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n.logo a span {\n  transition: all 0.5s linear;\n}\n.logo a:hover span {\n  color: #fff;\n  transition: all 0.5s linear;\n}\n.logo__title {\n  margin-bottom: 10px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 2rem;\n  line-height: 1.1;\n  color: #F1CDB3;\n  letter-spacing: 0.06em;\n}\n.logo__subtitle {\n  font-family: \"Arial\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.8125rem;\n  line-height: 1.15;\n  color: #fff;\n  letter-spacing: 0.1em;\n}\n\n.header-light .logo__title {\n  color: #545454;\n}\n.header-light .logo__subtitle {\n  color: #292929;\n}\n.header-light .logo a span {\n  transition: all 0.5s linear;\n}\n.header-light .logo a:hover span {\n  color: #292929;\n  transition: all 0.5s linear;\n}\n\n.top-nav {\n  margin-top: 16px;\n}\n.top-nav__list {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  margin: 0;\n  list-style: none;\n}\n.top-nav__list * + * {\n  margin-left: 35px;\n}\n.top-nav__item {\n  padding: 0;\n}\n.top-nav__item a {\n  font-family: \"Arial\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #CDCDCD;\n  letter-spacing: normal;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  transition: all 0.5s linear;\n}\n.top-nav__item a:hover {\n  font-family: \"Arial\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #FAFAFA;\n  letter-spacing: normal;\n  transition: all 0.5s linear;\n}\n.top-nav__item-active > a {\n  padding-bottom: 4px;\n  border-bottom: 3px solid #F1CDB3;\n  font-family: \"Arial\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #FAFAFA;\n  letter-spacing: normal;\n  pointer-events: none;\n}\n\n.header-light .logo, .header-light .top-nav__list {\n  margin-top: 30px;\n}\n.header-light .top-nav__item a {\n  color: #545454;\n}\n.header-light .top-nav__item a:hover {\n  color: #292929;\n}\n.header-light .top-nav__item-active a {\n  color: #545454;\n}\n\n@media (max-width: 767px) {\n  .top-nav {\n    display: block;\n    position: fixed;\n    top: 0;\n    right: 0;\n    margin-top: 0;\n    width: 320px;\n    height: 100vh;\n    background-color: #292929;\n    transform: translateX(320px);\n    transition: transform 0.5s linear;\n  }\n  .header-light .top-nav {\n    background-color: #fff;\n  }\n  .top-nav__list {\n    position: absolute;\n    top: 248px;\n    right: 0;\n    width: 320px;\n    padding: 0;\n    z-index: 12;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: nowrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n  }\n  .top-nav__list * + * {\n    margin-left: 0;\n    margin-top: 40px;\n  }\n  .top-nav__item a, .top-nav__item a:hover {\n    font-family: \"Arial\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 2rem;\n    line-height: 1.6;\n    color: #CDCDCD;\n    letter-spacing: normal;\n  }\n  .top-nav__item-active > a {\n    font-family: \"Arial\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 2rem;\n    line-height: 1.6;\n    color: #FAFAFA;\n    letter-spacing: normal;\n    padding-bottom: 6px;\n  }\n  .top-nav-opened {\n    transform: translateX(0);\n    transition: transform 0.5s linear;\n    z-index: 11;\n  }\n}\n.slider {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.slider__wrapper {\n  width: 1096px;\n  height: 435px;\n  overflow: hidden;\n}\n.slider__prev {\n  position: relative;\n  width: 52px;\n  height: 52px;\n  align-self: center;\n  border: 2px solid #F1CDB3;\n  border-radius: 100px;\n  cursor: pointer;\n  transition: all 0.5s linear;\n}\n.slider__prev:after {\n  position: absolute;\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");\n  top: 13px;\n  left: calc(50% - 7px);\n  width: 14px;\n  height: 6px;\n}\n.slider__prev:hover {\n  background-color: #FDDCC4;\n  border-color: #FDDCC4;\n  transition: all 0.5s linear;\n}\n.slider__container {\n  position: relative;\n  left: -1027px;\n  display: inline-flex;\n  height: 435px;\n}\n.slider__container > * + * {\n  margin-left: 90px;\n}\n.slider__item {\n  width: 270px;\n  height: 435px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  border-radius: 9px;\n  background-color: #FAFAFA;\n  cursor: pointer;\n  transition: all 0.5s linear;\n}\n.slider__item:hover {\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n  background-color: #fff;\n  transition: all 0.5s linear;\n}\n.slider__item:hover button {\n  background: #FDDCC4;\n  border-color: #FDDCC4;\n  transition: all 0.5s linear;\n}\n.slider__item > button {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.slider__next {\n  position: relative;\n  width: 52px;\n  height: 52px;\n  align-self: center;\n  border: 2px solid #F1CDB3;\n  border-radius: 100px;\n  cursor: pointer;\n  transition: all 0.5s linear;\n}\n.slider__next:after {\n  position: absolute;\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");\n  transform: rotate(180deg);\n  top: 34px;\n  left: calc(50% - 7px);\n  width: 14px;\n  height: 6px;\n}\n.slider__next:hover {\n  background-color: #FDDCC4;\n  border-color: #FDDCC4;\n  transition: all 0.5s linear;\n}\n\n.pet__photo {\n  margin-bottom: 30px;\n  width: 270px;\n  height: 270px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 9px 9px 0 0;\n}\n.pet__name {\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.136;\n  color: #545454;\n  letter-spacing: 0.06em;\n}\n\n@keyframes move-right {\n  from {\n    left: -1027px;\n  }\n  to {\n    left: -2107px;\n  }\n}\n.transition-right {\n  animation-name: move-right;\n  animation-duration: 3s;\n}\n\n@keyframes move-left {\n  from {\n    left: -1027px;\n  }\n  to {\n    left: 53px;\n  }\n}\n.transition-left {\n  animation-name: move-left;\n  animation-duration: 3s;\n}\n\n@media (max-width: 1279px) {\n  .slider__wrapper {\n    width: 604px;\n  }\n  .slider__container {\n    left: -608px;\n  }\n  .slider__container > * + * {\n    margin-left: 40px;\n  }\n  @keyframes move-right {\n    from {\n      left: -608px;\n    }\n    to {\n      left: -1228px;\n    }\n  }\n  @keyframes move-left {\n    from {\n      left: -608px;\n    }\n    to {\n      left: 12px;\n    }\n  }\n}\n@media (max-width: 767px) {\n  .slider {\n    flex-wrap: wrap;\n    width: 100%;\n  }\n  .slider__wrapper {\n    width: 100%;\n  }\n  .slider__prev {\n    order: 1;\n    margin-top: 20px;\n    margin-left: auto;\n    margin-right: 80px;\n  }\n  .slider__next {\n    order: 2;\n    margin-top: 20px;\n    margin-right: auto;\n  }\n  .slider__container {\n    left: calc((670px - (100% - 270px) / 2) * -1);\n    flex: 1 1 100%;\n    order: 0;\n  }\n  .slider__container > * + * {\n    margin-left: 400px;\n  }\n  @keyframes move-right {\n    from {\n      left: calc((670px - (100% - 270px) / 2) * -1);\n    }\n    to {\n      left: calc((670px - (100% - 270px) / 2) * -1 - 270px - 400px);\n    }\n  }\n  @keyframes move-left {\n    from {\n      left: calc((670px - (100% - 270px) / 2) * -1);\n    }\n    to {\n      left: calc((100% - 270px) / 2);\n    }\n  }\n}\n@media (max-width: 450px) {\n  .slider__container {\n    left: calc((370px - (100% - 270px) / 2) * -1);\n    flex: 1 1 100%;\n    order: 0;\n  }\n  .slider__container > * + * {\n    margin-left: 100px;\n  }\n  @keyframes move-right {\n    from {\n      left: calc((370px - (100% - 270px) / 2) * -1);\n    }\n    to {\n      left: calc((370px - (100% - 270px) / 2) * -1 - 270px - 100px);\n    }\n  }\n  @keyframes move-left {\n    from {\n      left: calc((370px - (100% - 270px) / 2) * -1);\n    }\n    to {\n      left: calc((100% - 270px) / 2);\n    }\n  }\n}\n.footer {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + "), radial-gradient(110.67% 538.64% at 5.73% 50%, #513D2F 0%, #1A1A1C 100%), #211F20;\n}\n.footer__container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  height: 350px;\n  padding: 0 40px 0;\n  overflow: hidden;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ");\n  background-size: 300px 310px;\n  background-position: bottom 0 right 40px;\n  background-repeat: no-repeat;\n}\n.footer__container > * {\n  margin-top: 56px;\n}\n.footer__first {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  max-width: 280px;\n}\n.footer__title > h2 {\n  color: #fff;\n  margin-bottom: 40px;\n}\n.footer__list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.footer__list > * + * {\n  margin-top: 40px;\n}\n.footer__item a {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n.footer__item a:hover span, .footer__item a:hover i {\n  color: #FDDCC4;\n  transition: all 0.5s linear;\n}\n.footer__item a span {\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.15;\n  color: #F1CDB3;\n  letter-spacing: 0.06em;\n}\n.footer__second {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  max-width: 302px;\n  margin-left: 158px;\n}\n.footer__second h2 {\n  margin-bottom: 32px;\n}\n.footer__second .footer__list > .footer__item:nth-child(2) {\n  margin-top: 32px;\n}\n\n@media (max-width: 1160px) {\n  .footer__container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: nowrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n    height: 639px;\n    padding: 0 30px 0;\n    overflow: hidden;\n    background-position: bottom 0 right 234px;\n    background-repeat: no-repeat;\n  }\n  .footer__container > * {\n    margin-top: 30px;\n  }\n  .footer__second {\n    margin-left: 60px;\n  }\n  .footer__second h2 {\n    margin-bottom: 32px;\n  }\n  .footer__second .footer__list > .footer__item:nth-child(2) {\n    margin-top: 32px;\n  }\n}\n@media (max-width: 767px) {\n  .footer__container {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: nowrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n    height: 779px;\n    padding: 30px 10px 0;\n    background-size: 260px 269px;\n    background-position: bottom 0 right 50%;\n  }\n  .footer__container > * {\n    margin-top: 0;\n  }\n  .footer__first {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: nowrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n    margin-top: 0;\n    margin-left: 10px;\n  }\n  .footer__title > h2 {\n    width: 280px;\n    font-family: \"Georgia\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 1.5625rem;\n    line-height: 1.3;\n    color: #fff;\n    letter-spacing: 0.06em;\n    text-align: center;\n    margin-bottom: 40px;\n  }\n  .footer__list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: nowrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n  }\n  .footer__second {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: nowrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n    margin-top: 40px;\n    margin-left: 0;\n  }\n  .footer__second h2 {\n    margin-bottom: 40px;\n  }\n  .footer__second .footer__list > .footer__item:nth-child(2) {\n    margin-top: 40px;\n    align-self: flex-start;\n  }\n}\n@media (max-width: 320px) {\n  .footer__container {\n    align-items: flex-start;\n  }\n}\n.gallery__pagination {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  margin-top: 60px;\n}\n.gallery__pagination * + * {\n  margin-left: 20px;\n}\n\n.pagination__state {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  width: 50px;\n  height: 50px;\n  border: 2px solid;\n  border-radius: 50%;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.15;\n  color: #CDCDCD;\n  letter-spacing: 0.06em;\n  cursor: pointer;\n}\n\n.state-disable {\n  border-color: #CDCDCD;\n  color: #CDCDCD;\n  background-color: transparent;\n  pointer-events: none;\n}\n.state-active {\n  border-color: #F1CDB3;\n  color: #292929;\n  background-color: #F1CDB3;\n}\n.state-available {\n  border-color: #F1CDB3;\n  color: #292929;\n  background-color: transparent;\n  transition: all 0.5s linear;\n}\n.state-available:hover {\n  background: #FDDCC4;\n  border-color: #FDDCC4;\n  transition: all 0.5s linear;\n}\n\n@media (max-width: 768px) {\n  .gallery__pagination {\n    margin-top: 40px;\n  }\n}\n@media (max-width: 376px) {\n  .gallery__pagination {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: nowrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n    margin-top: 42px;\n  }\n  .gallery__pagination * + * {\n    margin-left: 10px;\n  }\n}\nhtml {\n  scroll-behavior: smooth;\n  font-size: 1rem;\n}\n\nbody {\n  background: #fff;\n  font-family: \"Arial\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #4C4C4C;\n  letter-spacing: normal;\n  overflow-x: hidden;\n}\n\n.wrapper {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n\n@media (max-width: 768px) {\n  .wrapper {\n    max-width: 768px;\n  }\n}\n@media (max-width: 320px) {\n  .wrapper {\n    max-width: 320px;\n  }\n}\n[class^=icon-] {\n  color: #F1CDB3;\n  font-size: 2rem;\n}\n\n.plug {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(41, 41, 41, 0.6);\n  cursor: pointer;\n  z-index: 9;\n}\n\n.fixed {\n  overflow-y: hidden;\n  position: fixed;\n}\n\n.hidden {\n  display: none;\n}\n\n@keyframes make-hidden {\n  from {\n    opacity: 1;\n    visibility: visible;\n  }\n  to {\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n.make-hidden {\n  animation-name: make-hidden;\n  animation-duration: 0.5s;\n}\n\n@keyframes make-visible {\n  from {\n    opacity: 0;\n    visibility: hidden;\n  }\n  to {\n    opacity: 1;\n    visibility: visible;\n  }\n}\n.make-visible {\n  animation-name: make-visible;\n  animation-duration: 0.5s;\n}\n\n.not-only > .wrapper {\n  position: relative;\n}\n\n.header-slogan {\n  position: absolute;\n  bottom: 243px;\n  left: 40px;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.header-slogan__title h1 {\n  width: 310px;\n  margin-bottom: 42px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 2.75rem;\n  line-height: 1.3;\n  color: #fff;\n  letter-spacing: normal;\n}\n.header-slogan__text {\n  width: 460px;\n  margin-bottom: 42px;\n  font-family: \"Arial\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #CDCDCD;\n  letter-spacing: normal;\n}\n\n@media (max-width: 1260px) {\n  .header-slogan {\n    bottom: 693px;\n    left: 154px;\n  }\n  .header-slogan .button-link {\n    align-self: center;\n  }\n}\n@media (max-width: 767px) {\n  .header-slogan {\n    width: 500px;\n    bottom: 377px;\n    left: calc(50% - 250px);\n    padding-left: 0;\n    padding-right: 10px;\n  }\n  .header-slogan__title h1 {\n    width: 200px;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    letter-spacing: 0.06em;\n    font-size: 1.5625rem;\n  }\n  .header-slogan__text {\n    width: 100%;\n    text-align: center;\n    font-size: 0.9375rem;\n  }\n}\n@media (max-width: 560px) {\n  .header-slogan {\n    width: 300px;\n    bottom: 377px;\n    left: calc(50% - 150px);\n    padding-left: 0;\n    padding-right: 10px;\n  }\n  .header-slogan__title h1 {\n    width: 200px;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    letter-spacing: 0.06em;\n    font-size: 1.5625rem;\n  }\n  .header-slogan__text {\n    width: 100%;\n    text-align: center;\n    font-size: 0.9375rem;\n  }\n}\n.about {\n  background-color: #fff;\n}\n.about__container {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  padding-top: 94px;\n  padding-bottom: 114px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ");\n  background-repeat: no-repeat;\n  background-size: 300px 408px;\n  background-position: left 215px top 80px;\n}\n.about__title {\n  width: 370px;\n  margin-left: 50%;\n  margin-bottom: 25px;\n}\n.about__title h2 {\n  text-align: left;\n}\n.about__text {\n  width: 430px;\n  margin-left: 50%;\n  text-align: left;\n}\n.about__text p {\n  font-family: \"Arial\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #4C4C4C;\n  letter-spacing: normal;\n}\n.about__text * + * {\n  margin-top: 25px;\n}\n\n@media (max-width: 1200px) {\n  .about__container {\n    background-position: left 40px top 80px;\n  }\n  .about__title {\n    margin-left: 45%;\n  }\n  .about__text {\n    margin-left: 45%;\n  }\n}\n@media (max-width: 900px) {\n  .about__container {\n    padding-top: 80px;\n    padding-bottom: 588px;\n    background-repeat: no-repeat;\n    background-position: left 50% top 540px;\n  }\n  .about__title {\n    margin-left: 169px;\n  }\n  .about__text {\n    margin-left: 169px;\n  }\n}\n@media (max-width: 767px) {\n  .about__title {\n    width: 250px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .about__title h2 {\n    font-family: \"Georgia\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 1.5625rem;\n    line-height: 1.3;\n    color: #545454;\n    letter-spacing: 0.06em;\n    text-align: center;\n  }\n  .about__text {\n    padding-left: 25px;\n    padding-right: 25px;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: justify;\n  }\n}\n@media (max-width: 480px) {\n  .about__text {\n    width: auto;\n  }\n}\n@media (max-width: 320px) {\n  .about__container {\n    padding-top: 42px;\n    padding-bottom: 438px;\n    background-position: left 50% top 578px;\n    background-size: 260px 354px;\n  }\n}\n.our-friends {\n  background-color: #F6F6F6;\n}\n.our-friends__container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  padding: 80px 40px 100px;\n}\n.our-friends__container h2 {\n  width: 400px;\n  margin-bottom: 60px;\n  text-align: center;\n}\n.our-friends__container > a {\n  margin-top: 60px;\n}\n\n@media (max-width: 820px) {\n  .our-friends__container {\n    padding: 80px 30px 100px;\n  }\n}\n@media (max-width: 767px) {\n  .our-friends__container {\n    padding: 42px 10px;\n  }\n  .our-friends__container h2 {\n    width: 100%;\n    margin-bottom: 42px;\n    font-family: \"Georgia\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 1.5625rem;\n    line-height: 1.3;\n    color: #545454;\n    letter-spacing: 0.06em;\n  }\n  .our-friends__container > a {\n    margin-top: 42px;\n  }\n}\n.help {\n  background-color: #fff;\n}\n.help__container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  padding: 80px 127px 100px;\n}\n.help__container h2 {\n  width: 310px;\n  margin-bottom: 60px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 2.1875rem;\n  line-height: 1.3;\n  color: #545454;\n  letter-spacing: 0.06em;\n  text-align: center;\n}\n.help__list {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.help__item {\n  flex: 1 1 20%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.help__item:nth-child(n+6) {\n  margin-top: 55px;\n}\n.help__item > img {\n  width: 60px;\n  height: 60px;\n}\n.help__item > p {\n  margin-top: 30px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.15;\n  color: #545454;\n  letter-spacing: 0.06em;\n  white-space: nowrap;\n}\n\n@media (max-width: 1280px) {\n  .help__container {\n    padding: 80px 125px 100px;\n  }\n  .help__list {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n  }\n  .help__list > * + * {\n    margin-left: 120px;\n  }\n  .help__item {\n    flex: 1 1 0%;\n  }\n  .help__item:nth-child(1) {\n    margin-right: auto;\n  }\n  .help__item:nth-child(6) {\n    margin-left: 84px;\n  }\n  .help__item:nth-child(9) {\n    margin-right: 84px;\n  }\n}\n@media (max-width: 1279px) {\n  .help__list {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: wrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n  }\n  .help__item {\n    flex: 1 1 25%;\n  }\n  .help__item:nth-child(n) {\n    margin: 0;\n  }\n  .help__item:nth-child(n+5) {\n    margin-top: 55px;\n  }\n}\n@media (max-width: 1000px) {\n  .help__list {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: wrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n  }\n  .help__item {\n    flex: 1 1 33.333%;\n  }\n  .help__item:nth-child(n) {\n    margin: 0;\n  }\n  .help__item:nth-child(n+4) {\n    margin-top: 55px;\n  }\n}\n@media (max-width: 768px) {\n  .help__container {\n    padding: 80px 40px 100px;\n  }\n  .help__list {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n  }\n  .help__item {\n    flex: 1 1 33.333%;\n  }\n  .help__item:nth-child(n) {\n    margin: 0;\n  }\n  .help__item:nth-child(n+4) {\n    margin-top: 55px;\n  }\n}\n@media (max-width: 600px) {\n  .help__container {\n    padding: 42px 15px 42px;\n  }\n  .help__list > * + * {\n    margin: 0;\n  }\n  .help__item {\n    flex: 0 1 calc(50% - 15px);\n  }\n  .help__item:nth-child(2n) {\n    margin-left: 30px;\n  }\n  .help__item:nth-child(n+4) {\n    margin-top: 0;\n  }\n  .help__item:nth-child(n+3) {\n    margin-top: 30px;\n  }\n  .help__item > img {\n    width: 50px;\n    height: 50px;\n  }\n  .help__item > p {\n    margin-top: 20px;\n    font-family: \"Georgia\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 0.9375rem;\n    line-height: 1.1;\n    color: #545454;\n    letter-spacing: 0.06em;\n  }\n}\n@media (max-width: 320px) {\n  .help__container h2 {\n    width: 230px;\n    margin-bottom: 42px;\n    font-family: \"Georgia\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 1.5625rem;\n    line-height: 1.3;\n    color: #545454;\n    letter-spacing: 0.06em;\n  }\n}\n.in-addition {\n  background-color: #F6F6F6;\n}\n.in-addition__background {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ");\n  background-position: top 91px left 183px;\n  background-size: 505px 261px;\n  background-repeat: no-repeat;\n}\n.in-addition__container {\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  padding: 80px 182px 100px 183px;\n  margin-left: auto;\n}\n.in-addition__container h2 {\n  width: 300px;\n  margin-bottom: 20px;\n}\n.in-addition__subtitle {\n  margin-bottom: 20px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.1;\n  color: #545454;\n  letter-spacing: 0.06em;\n}\n.in-addition__number {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-bottom: 20px;\n  padding: 10px 15px 10px 0;\n  background-color: #F1CDB3;\n  border-radius: 9px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.15;\n  color: #545454;\n  letter-spacing: 0.06em;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  transition: all 0.5s linear;\n}\n.in-addition__number:hover {\n  background: #FDDCC4;\n  border-color: #FDDCC4;\n  transition: all 0.5s linear;\n}\n.in-addition__number i {\n  color: #545454;\n  font-size: 1.4375rem;\n  padding-left: 15px;\n}\n.in-addition__comment {\n  font-family: \"Arial\";\n  font-style: italic;\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 1.5;\n  color: #B2B2B2;\n  letter-spacing: normal;\n}\n\n@media (max-width: 1275px) {\n  .in-addition__background {\n    background-position: top 422px left 50%;\n  }\n  .in-addition__container {\n    padding: 80px 194px 421px 194px;\n    margin-right: auto;\n  }\n}\n@media (max-width: 768px) {\n  .in-addition__background {\n    background-position: top 422px left 131px;\n  }\n  .in-addition__container {\n    padding: 80px 194px 421px 194px;\n  }\n}\n@media (max-width: 767px) {\n  .in-addition__background {\n    background-position: top 365px left 50%;\n    background-size: 260px 135px;\n  }\n  .in-addition__container {\n    width: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: nowrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n    padding: 42px 20px 219px;\n  }\n  .in-addition__container h2 {\n    width: 220px;\n    font-family: \"Georgia\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 1.5625rem;\n    line-height: 1.3;\n    color: #545454;\n    letter-spacing: 0.06em;\n    text-align: center;\n  }\n  .in-addition__subtitle {\n    font-family: \"Georgia\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 0.9375rem;\n    line-height: 1.6;\n    color: #545454;\n    letter-spacing: normal;\n    text-align: center;\n  }\n  .in-addition__number {\n    align-items: center;\n    padding: 10px 13px 10px 0;\n    font-family: \"Georgia\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 0.9375rem;\n    line-height: 1.1;\n    color: #545454;\n    letter-spacing: 0.06em;\n  }\n  .in-addition__comment {\n    text-align: justify;\n  }\n}\n.friends {\n  background-color: #F6F6F6;\n}\n.friends__container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  padding: 80px 40px 100px;\n}\n.friends__container h1 {\n  width: 400px;\n  margin-bottom: 60px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 2.1875rem;\n  line-height: 1.3;\n  color: #545454;\n  letter-spacing: 0.06em;\n  text-align: center;\n}\n.friends__container > a {\n  margin-top: 60px;\n}\n\n.gallery {\n  display: flex;\n  flex-direction: row;\n  align-content: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  width: 100%;\n  height: 900px;\n  opacity: 1;\n  visibility: visible;\n  transition: all 2s linear;\n}\n.gallery > * + * {\n  margin-left: 40px;\n}\n.gallery > * {\n  margin-left: 0;\n}\n.gallery > *:nth-child(n+5) {\n  margin-top: 30px;\n}\n.gallery__item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  width: 270px;\n  height: 435px;\n  overflow: hidden;\n  border-radius: 9px;\n  background-color: #FAFAFA;\n  cursor: pointer;\n  transition: all 0.5s linear;\n}\n.gallery__item:hover {\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n  background-color: #fff;\n  transition: all 0.5s linear;\n}\n.gallery__item:hover button {\n  background: #FDDCC4;\n  border-color: #FDDCC4;\n  transition: all 0.5s linear;\n}\n.gallery__item > button {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.gallery .pet__photo {\n  width: 270px;\n  height: 270px;\n  margin-bottom: 30px;\n}\n.gallery .pet__name {\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.136;\n  color: #545454;\n  letter-spacing: 0.06em;\n}\n\n@media (max-width: 1209px) {\n  .gallery > * + * {\n    margin-left: 40px;\n  }\n  .gallery > *:nth-child(3n+4) {\n    margin-left: 0;\n  }\n  .gallery > *:nth-child(n+4) {\n    margin-top: 30px;\n  }\n}\n@media (max-width: 1050px) {\n  .friends__container {\n    padding: 80px 94px 76px;\n  }\n  .friends__container h1 {\n    margin-bottom: 30px;\n  }\n  .gallery {\n    height: 1365px;\n  }\n  .gallery > * {\n    margin-left: 0;\n    margin-top: 0;\n  }\n  .gallery > *:nth-child(2n) {\n    margin-left: 40px;\n  }\n  .gallery > *:nth-child(n+3) {\n    margin-top: 40px;\n  }\n}\n@media (max-width: 790px) {\n  .gallery > * + * {\n    margin-left: auto;\n  }\n  .gallery > * {\n    margin-left: 0;\n    margin-top: 0;\n  }\n  .gallery > *:nth-child(2n) {\n    margin-left: auto;\n  }\n  .gallery > *:nth-child(n+3) {\n    margin-top: 30px;\n  }\n}\n@media (max-width: 767px) {\n  .friends__container {\n    padding: 42px 10px;\n  }\n  .friends__container h1 {\n    width: 100%;\n    margin-bottom: 42px;\n    padding: 0 10px;\n    font-size: 1.5625rem;\n    text-align: center;\n  }\n  .gallery {\n    justify-content: center;\n  }\n  .gallery > * {\n    margin-left: 50%;\n    margin-right: 50%;\n    margin-top: 0;\n  }\n  .gallery > *:nth-child(2n) {\n    margin-left: 50%;\n    margin-right: 50%;\n  }\n  .gallery > *:nth-child(n+2) {\n    margin-top: 30px;\n  }\n  .gallery > *:nth-child(n+4) {\n    display: none;\n  }\n}\n@media (max-width: 376px) {\n  .gallery {\n    justify-content: center;\n  }\n  .gallery > * {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n  }\n  .gallery > *:nth-child(n+2) {\n    margin-top: 30px;\n  }\n  .gallery > *:nth-child(n+4) {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/styles/vendors/_normalize.css","webpack://./src/styles/base/_typography.scss","webpack://./src/styles/base/_reset.scss","webpack://./src/styles/abstracts/_placeholders.scss","webpack://./src/styles/abstracts/_mixins.scss","webpack://./src/styles/abstracts/_variables.scss","webpack://./src/styles/base/_modal.scss","webpack://./src/styles/components/_burger.scss","webpack://./src/styles/components/_header.scss","webpack://./src/styles/components/_buttons.scss","webpack://./src/styles/components/_logo.scss","webpack://./src/styles/components/_top-navigation.scss","webpack://./src/styles/components/_slider.scss","webpack://./src/styles/components/_footer.scss","webpack://./src/styles/components/_pagination.scss","webpack://./src/styles/base/_common-styles.scss","webpack://./src/styles/pages/_main.scss","webpack://./src/styles/pages/_pets.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKC;EACG,iBAAA,EAAA,MAAA;EACA,8BAAA,EAAA,MAAA;ADDJ;;ACIE;+EAAA;AAGA;;EAAA;AAIA;EACE,SAAA;ADHJ;;ACME;;EAAA;AAIA;EACE,cAAA;ADJJ;;ACOE;;;EAAA;AAKA;EACE,cAAA;EACA,gBAAA;ADLJ;;ACQE;+EAAA;AAGA;;;EAAA;AAKA;EACE,uBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;ADPJ;;ACUE;;;EAAA;AAKA;EACE,iCAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;ADRJ;;ACWE;+EAAA;AAGA;;EAAA;AAIA;EACE,6BAAA;ADVJ;;ACaE;;;EAAA;AAKA;EACE,mBAAA,EAAA,MAAA;EACA,kCAAA;EAAA,0BAAA,EAAA,MAAA;EACA,0BAAA;EAAA,yCAAA;UAAA,iCAAA,EAAA,MAAA;ADXJ;;ACcE;;EAAA;AAIA;;EAEE,mBAAA;ADZJ;;ACeE;;;EAAA;AAKA;;;EAGE,iCAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;ADbJ;;ACgBE;;EAAA;AAIA;EACE,cAAA;ADdJ;;ACiBE;;;EAAA;AAKA;;EAEE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;ADfJ;;ACkBE;EACE,eAAA;ADfJ;;ACkBE;EACE,WAAA;ADfJ;;ACkBE;+EAAA;AAGA;;EAAA;AAIA;EACE,kBAAA;ADjBJ;;ACoBE;+EAAA;AAGA;;;EAAA;AAKA;;;;;EAKE,oBAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;ADnBJ;;ACsBE;;;EAAA;AAKA;QACQ,MAAA;EACN,iBAAA;ADpBJ;;ACuBE;;;EAAA;AAKA;SACS,MAAA;EACP,oBAAA;ADrBJ;;ACwBE;;EAAA;AAIA;;;;EAIE,0BAAA;ADtBJ;;ACyBE;;EAAA;AAIA;;;;EAIE,kBAAA;EACA,UAAA;ADvBJ;;AC0BE;;EAAA;AAIA;;;;EAIE,8BAAA;ADxBJ;;AC2BE;;EAAA;AAIA;EACE,8BAAA;ADzBJ;;AC4BE;;;;;EAAA;AAOA;EACE,sBAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;AD1BJ;;AC6BE;;EAAA;AAIA;EACE,wBAAA;AD3BJ;;AC8BE;;EAAA;AAIA;EACE,cAAA;AD5BJ;;AC+BE;;;EAAA;AAKA;;EAEE,sBAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;AD7BJ;;ACgCE;;EAAA;AAIA;;EAEE,YAAA;AD9BJ;;ACiCE;;;EAAA;AAKA;EACE,6BAAA,EAAA,MAAA;EACA,oBAAA,EAAA,MAAA;AD/BJ;;ACkCE;;EAAA;AAIA;EACE,wBAAA;ADhCJ;;ACmCE;;;EAAA;AAKA;EACE,0BAAA,EAAA,MAAA;EACA,aAAA,EAAA,MAAA;ADjCJ;;ACoCE;+EAAA;AAGA;;EAAA;AAIA;EACE,cAAA;ADnCJ;;ACsCE;;EAAA;AAIA;EACE,kBAAA;ADpCJ;;ACuCE;+EAAA;AAGA;;EAAA;AAIA;EACE,aAAA;ADtCJ;;ACyCE;;EAAA;AAIA;EACE,aAAA;ADvCJ;;AEpTA;EACI,kCAAA;EACA,gBAAA;EACA,kBAAA;EACA,mDAAA;EACA,6LAAA;AFuTJ;AE/SA;EACI,kCAAA;EACA,gBAAA;EACA,kBAAA;EACA,mDAAA;EACA,6LAAA;AFiTJ;AEzSA;EACI,kCAAA;EACA,gBAAA;EACA,kBAAA;EACA,mDAAA;EACA,6LAAA;AF2SJ;AEnSA;EACI,gCAAA;EACA,gBAAA;EACA,kBAAA;EACA,mDAAA;EACA,6LAAA;AFqSJ;AE7RA;EACI,gCAAA;EACA,gBAAA;EACA,kBAAA;EACA,mDAAA;EACA,8LAAA;AF+RJ;AEvRA;EACK,sBAAA;EACA,6CAAA;EACA,uPAAA;EAIA,mBAAA;EACA,kBAAA;EACA,mBAAA;AFsRL;AEnRG;EAEE,iCAAA;AF8RL;AEhSG;EACE,+EAAA;EAEA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,6BAAA;EAAA,oBAAA;EACA,oBAAA;EACA,cAAA;EAEA,sCAAA;EACA,mCAAA;EACA,kCAAA;AFoRL;;AEjRG;EACE,gBAAA;EACA,kBAAA;AFoRL;;AElRG;EACE,gBAAA;EACA,kBAAA;AFqRL;;AEnRG;EACE,gBAAA;EACA,kBAAA;AFsRL;;AEpRG;EACE,gBAAA;EACA,kBAAA;AFuRL;;AGjYA,4BAAA;AACA;;;;;;;;;;;;;;EAcE,SAAA;AHoYF;;AInZA;EC2CQ,sBDzCc;EC0Cd,kBAPS;EAQT,gBAPU;EAQV,oBD3CY;EC4CZ,gBD3Cc;EC4Cd,cCtCK;EDuCL,sBD3CiB;AJuZzB;;AO7ZA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EAEA,WAAA;EACA,YAAA;EFOA,aAZU;EAaV,mBAZY;EAgBU,uBETL;EFeG,mBEdP;EFoBb,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;EEMP,uCDCY;AN+ZhB;;AO7ZA;EACI,kBAAA;EAEA,YAAA;EACA,aAAA;EAEA,kBAAA;EACA,oDAAA;EACA,yBDhBiB;AN8arB;AO3ZI;EACI,kBAAA;EACA,UAAA;EACA,YAAA;EAEA,sBAAA;EFnBJ,aAZU;EAaV,mBAZY;EAgBU,uBEiBG;EFXL,mBEYC;EFNrB,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;EEgCH,WAAA;EACA,YAAA;EAEA,kBAAA;EACA,yBAAA;EACA,cDjCU;ECkCV,yBAAA;EAEA,eAAA;EAEA,2BAAA;AP0ZR;AOxZQ;EACI,yBDpDI;ECqDJ,2BAAA;AP0ZZ;AOtZI;EF5CA,aAZU;EAaV,mBAZY;EA4BZ,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;EEqDH,gBAAA;EACA,kBAAA;AP2ZR;AOxZI;EACI,YAAA;EACA,aAAA;EACA,oBAAA;KAAA,iBAAA;EAEA,0BAAA;APyZR;AOtZI;EF3DA,aAZU;EAaV,sBE2DiC;EF3CjC,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;EEoEH,YAAA;EAEA,2BAAA;AP0ZR;AOvZI;EACI,mBAAA;EFtCA,sBEyCkB;EFxClB,kBAPS;EAQT,gBAPU;EAQV,oBEuCgB;EFtChB,gBEuCkB;EFtClB,WC3CG;ED4CH,sBEuCqB;APyZ7B;AOrZI;EACI,mBAAA;EFlDA,sBEqDkB;EFpDlB,kBAPS;EAQT,gBAPU;EAQV,kBEmDgB;EFlDhB,iBEmDkB;EFlDlB,WC3CG;ED4CH,sBEmDqB;APuZ7B;AOnZI;EACI,mBAAA;EF9DA,sBEiEkB;EFhElB,kBAPS;EAQT,gBAPU;EAQV,oBE+DgB;EF9DhB,gBE+DkB;EF9DlB,WC3CG;ED4CH,sBE+DqB;APqZ7B;AOjZI;EFvGA,aAZU;EAaV,sBEuGiC;EFvFjC,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;EEgHH,cAAA;EACA,UAAA;EACA,gBAAA;APsZR;AOpZQ;EACI,gBAAA;APsZZ;AOlZI;EACI,kBAAA;EAEA,iBAAA;EFxFA,sBE2FkB;EF1FlB,kBAPS;EAQT,gBAPU;EAQV,oBEyFgB;EFxFhB,gBEyFkB;EFxFlB,WC3CG;ED4CH,sBEyFqB;APmZ7B;AOhZQ;EACI,kBAAA;EACA,SAAA;EACA,WAAA;EAEA,UAAA;EACA,WAAA;EAEA,iDAAA;EACA,cDtJI;ANsiBhB;AO7YQ;EACQ,gBAAA;AP+YhB;;AO1YA;EACI;IAEI,YAAA;IACA,aAAA;EP4YN;EO1YM;IACI,YAAA;IACA,aAAA;EP4YV;EOzYM;IACI,YAAA;IAEA,0BAAA;EP0YV;EOvYM;IACI,mBAAA;EPyYV;EOtYM;IACI,mBAAA;IAEA,oBAAA;EPuYV;EOnYU;IACI,eAAA;EPqYd;AACF;AOhYA;EACI;IACI,YAAA;IACA,iBAAA;IACA,YAAA;EPkYN;EOhYM;IACG,aAAA;EPkYT;EO/XM;IACI,YAAA;EPiYV;EO9XM;IACI,YAAA;IAEA,iBAAA;EP+XV;EO5XM;IACI,mBAAA;EP8XV;EO3XM;IACI,kBAAA;EP6XV;EO1XM;IACI,mBAAA;IACA,mBAAA;EP4XV;AACF;AQ7lBA;EACI,aAAA;AR+lBJ;;AK/hBI;EG3DA;IACI,gBAAA;IACA,SAAA;IACA,WAAA;IHIJ,aAZU;IAaV,mBAZY;IAsBQ,mBGZC;IHkBrB,iBAzBO;IA0BP,cAzBS;IA0BT,YAzBO;IGQH,WAAA;IACA,YAAA;IAEA,WAAA;IAEA,eAAA;ER6lBN;EQ3lBE;IACI,kBAAA;IAEA,WAAA;IACA,WAAA;IAEA,yBF5BQ;IE8BR,2BAAA;ER0lBN;EQxlBM;IACI,sBF5BD;ENsnBT;EQvlBM;IACI,kBAAA;IACA,WAAA;IACA,OAAA;IAEA,WAAA;IACA,WAAA;IAEA,yBF5CI;ENmoBd;EQrlBU;IACI,sBF1CL;ENioBT;EQnlBM;IACI,SAAA;ERqlBV;EQnlBM;IACI,SAAA;ERqlBV;EQ/kBU;IACI,wBAAA;IACA,0BAAA;IAEA,2BAAA;ERglBd;AACF;AShpBA;EACI,sIHsBQ;AN4nBZ;;AShpBA;EJQI,aAZU;EAaV,sBIP6B;EJuB7B,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;EIEP,aHeY;EGbZ,iBHWiB;EGVjB,kBHWkB;EGVlB,mBHUkB;EGRlB,0DHaS;EGZT,4BAAA;EACA,wCAAA;EACA,4BAAA;ATmpBJ;;AShpBA;EJRI,aAZU;EAaV,mBAZY;EAgBU,8BIIY;EJQlC,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;ALuqBX;;ASnpBA;EACI,aAAA;EACA,sBH1Ba;ANgrBjB;ASppBI;EAEI,kBHVc;EGWd,mBHXc;ANgqBtB;ASlpBI;EACI,aAAA;ATopBR;;AS/oBA;EACI;IACI,cAAA;IAEA,oBAAA;IAEA,4BAAA;IACA,wCAAA;IACA,4BAAA;ETgpBN;ES1oBM;IACI,eAAA;ET4oBV;AACF;ASxoBA;EACI;IACI,aAAA;IAEA,oBAAA;IAEA,4BAAA;IACA,wCAAA;IACA,4BAAA;ETwoBN;ESloBM;IACI,eAAA;ETooBV;AACF;AUntBA;EACI,uBAAA;EAAA,kBAAA;EAEA,kBAAA;EAEA,yBAAA;EACA,oBAAA;EACA,mBAAA;ELoCI,sBKlCwB;ELmCxB,kBAPS;EAQT,gBAPU;EAQV,oBKpCQ;ELqCR,gBKpCU;ELqCV,cC5CK;ED6CL,sBKpCY;EAEhB,eAAA;EACA,2BAAA;AVmtBJ;AUjtBI;EACI,mBJlBc;EImBd,qBJnBc;EIoBd,2BAAA;AVmtBR;;AUhtBA;EACI,mBJzBY;AN4uBhB;;AUhtBA;EACI,gBJ1Ba;AN6uBjB;;AUhtBA;EACI,uBAAA;EAAA,kBAAA;EAEA,kBAAA;EAEA,yBAAA;EACA,oBAAA;EACA,mBAAA;EAEA,mBJzCY;EI2CZ,6BAAA;EAAA,qBAAA;ELAI,sBKEwB;ELDxB,kBAPS;EAQT,gBAPU;EAQV,oBAAA;EACA,gBAAA;EACA,cCrCU;EDsCV,sBAAA;EKEJ,eAAA;EACA,2BAAA;AV+sBJ;AU7sBI;EACI,mBJtDc;EIuDd,qBJvDc;EIwDd,2BAAA;AV+sBR;;AWxwBA;EACI,iBAAA;AX2wBJ;AWzwBI;EACI,cLOU;ANowBlB;AWxwBI;ENMA,aAZU;EAaV,sBMNiC;ENsBjC,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;EMGH,6BAAA;EAAA,qBAAA;AX6wBR;AW3wBQ;EACI,2BAAA;AX6wBZ;AW1wBQ;EACI,WLdK;EKgBL,2BAAA;AX2wBZ;AWvwBE;EACU,mBAAA;ENmBJ,sBMhBsB;ENiBtB,kBAPS;EAQT,gBAPU;EAQV,eMlBoB;ENmBpB,gBMlBsB;ENmBtB,cChDQ;EDiDR,sBMlBwB;AXywBhC;AWtwBE;ENSM,oBAPU;EAQV,kBAPS;EAQT,gBAPU;EAQV,oBMVoB;ENWpB,iBMVsB;ENWtB,WC7CS;ED8CT,qBMVwB;AX0wBhC;;AWrwBI;EACI,cLnCK;AN2yBb;AWtwBI;EACI,cLrCU;AN6yBlB;AWrwBI;EACI,2BAAA;AXuwBR;AWpwBI;EACI,cL7CU;EK+CV,2BAAA;AXqwBR;;AY/zBA;EACI,gBAAA;AZk0BJ;AYh0BE;EPUE,aAZU;EAaV,mBAZY;EAgBU,yBOdoB;EP0B1C,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;EOFC,SAAA;EACA,gBAAA;AZu0BZ;AYp0BQ;EACI,iBAAA;AZs0BZ;AYn0BE;EACU,UAAA;AZq0BZ;AYp0BY;EP4BJ,oBAPU;EAQV,kBAPS;EAQT,gBAPU;EAQV,oBAPQ;EAQR,gBAPU;EAQV,cCzCK;ED0CL,sBAPa;EOxBL,6BAAA;EAAA,qBAAA;EAEJ,2BAAA;AZ00BZ;AYx0BY;EPqBJ,oBAPU;EAQV,kBAPS;EAQT,gBAPU;EAQV,oBAPQ;EAQR,gBAPU;EAQV,cCxCa;EDyCb,sBAPa;EOhBL,2BAAA;AZ80BhB;AY50BY;EACI,mBAAA;EACA,gCAAA;EPaR,oBAPU;EAQV,kBAPS;EAQT,gBAPU;EAQV,oBAPQ;EAQR,gBAPU;EAQV,cCxCa;EDyCb,sBAPa;EOPL,oBAAA;AZi1BhB;;AY10BI;EACI,gBAAA;AZ60BR;AY10BI;EACI,cNrCK;ANi3Bb;AY10BQ;EACI,cNvCM;ANm3BlB;AYv0BI;EACI,cN9CK;ANu3Bb;;AKh0BI;EOJA;IACI,cAAA;IACA,eAAA;IACA,MAAA;IACA,QAAA;IAEA,aAAA;IAEA,YAAA;IACA,aAAA;IAEA,yBN7DU;IM+DV,4BAAA;IAEA,iCAAA;EZm0BN;EYj0BM;IACI,sBN5EK;EN+4Bf;EYh0BM;IACI,kBAAA;IACA,UAAA;IACA,QAAA;IAEA,YAAA;IAEA,UAAA;IAEA,WAAA;IP9ER,aAZU;IAaV,sBO+EoC;IP3Ed,uBO4EG;IPtEL,mBOuEA;IPjEpB,iBAzBO;IA0BP,cAzBS;IA0BT,YAzBO;EL05BT;EY/zBM;IACI,cAAA;IACA,gBAAA;EZi0BV;EY5zBU;IP9DJ,oBAPU;IAQV,kBAPS;IAQT,gBAPU;IAQV,eO6DoB;IP5DpB,gBAPU;IAQV,cCzCK;ID0CL,sBAPa;ELo4BnB;EY/zBU;IPpEJ,oBAPU;IAQV,kBAPS;IAQT,gBAPU;IAQV,eOmEwB;IPlExB,gBAPU;IAQV,cCxCa;IDyCb,sBAPa;IO0EL,mBAAA;EZo0Bd;EY9zBF;IAEQ,wBAAA;IAEA,iCAAA;IAEA,WAAA;EZ6zBN;AACF;Aa97BA;EACI,WAAA;ERYA,aAZU;EAaV,mBAZY;EAgBU,8BQfY;ER2BlC,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;ALg8BX;Aal8BI;EACI,aAAA;EACA,aAAA;EACA,gBAAA;Abo8BR;Aal8BI;EACI,kBAAA;EAEA,WAAA;EACA,YAAA;EAEA,kBAAA;EAEA,yBAAA;EACA,oBAAA;EAEA,eAAA;EAEA,2BAAA;Ab+7BR;Aa77BQ;EACI,kBAAA;EACA,iDAAA;EACA,SAAA;EACA,qBAAA;EACA,WAAA;EACA,WAAA;Ab+7BZ;Aa57BQ;EACI,yBPlCU;EOmCV,qBPnCU;EOqCV,2BAAA;Ab67BZ;Aaz7BI;EACI,kBAAA;EACA,aAAA;EAEA,oBAAA;EAEA,aAAA;Aby7BR;Aap7BQ;EACI,iBAAA;Abs7BZ;Aal7BI;EACI,YAAA;EACA,aAAA;ER/CJ,aAZU;EAaV,sBQiDoB;ERvCA,mBQwCC;ERlCrB,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;EQ2DH,kBAAA;EACA,yBP3Da;EO6Db,eAAA;EAEA,2BAAA;Abm7BR;Aaj7BQ;EACI,oDAAA;EACA,sBPxEK;EOyEL,2BAAA;Abm7BZ;Aah7BQ;EACI,mBP/EU;EOgFV,qBPhFU;EOiFV,2BAAA;Abk7BZ;Aa/6BQ;EACI,gBAAA;EACA,mBAAA;Abi7BZ;Aa76BI;EACI,kBAAA;EAEA,WAAA;EACA,YAAA;EAEA,kBAAA;EAEA,yBAAA;EACA,oBAAA;EAEA,eAAA;EAEA,2BAAA;Ab06BR;Aax6BQ;EACI,kBAAA;EACA,iDAAA;EACA,yBAAA;EACA,SAAA;EACA,qBAAA;EACA,WAAA;EACA,WAAA;Ab06BZ;Aav6BQ;EACI,yBPpHU;EOqHV,qBPrHU;EOuHV,2BAAA;Abw6BZ;;Aal6BI;EACI,mBAAA;EAEA,YAAA;EACA,aAAA;EACA,oBAAA;KAAA,iBAAA;EAEA,0BAAA;Abm6BR;Aah6BI;ER7FI,sBQ+FkB;ER9FlB,kBAPS;EAQT,gBAPU;EAQV,kBQ6FgB;ER5FhB,kBQ6FkB;ER5FlB,cCtCK;EDuCL,sBQ6FqB;Abm6B7B;;Aa/5BA;EACI;IAAM,aAAA;Ebm6BR;Eal6BE;IAAI,aAAA;Ebq6BN;AACF;Aan6BA;EACI,0BAAA;EACA,sBAAA;Abq6BJ;;Aal6BA;EACI;IAAM,aAAA;Ebs6BR;Ear6BE;IAAI,UAAA;Ebw6BN;AACF;Aat6BA;EACI,yBAAA;EACA,sBAAA;Abw6BJ;;Aar6BA;EAGQ;IACI,YAAA;Ebs6BV;Eap6BM;IACI,YAAA;Ebs6BV;Eap6BU;IACI,iBAAA;Ebs6Bd;Eaj6BE;IACI;MAAM,YAAA;Ibo6BV;Ian6BI;MAAI,aAAA;Ibs6BR;EACF;Eap6BE;IACI;MAAM,YAAA;Ibu6BV;Iat6BI;MAAI,UAAA;Iby6BR;EACF;AACF;Aav6BA;EACI;IACI,eAAA;IAEA,WAAA;Ebw6BN;Eat6BM;IACI,WAAA;Ebw6BV;Eap6BM;IACI,QAAA;IAEA,gBAAA;IACA,iBAAA;IACA,kBAAA;Ebq6BV;Ean6BM;IAEI,QAAA;IAEA,gBAAA;IACA,kBAAA;Ebm6BV;Eah6BM;IACI,6CAAA;IAEA,cAAA;IACA,QAAA;Ebi6BV;Ea/5BU;IACI,kBAAA;Ebi6Bd;Ea35BE;IACI;MAAM,6CAAA;Ib85BV;Ia75BI;MAAI,6DAAA;Ibg6BR;EACF;Ea95BE;IACI;MAAM,6CAAA;Ibi6BV;Iah6BI;MAAI,8BAAA;Ibm6BR;EACF;AACF;Aaj6BA;EAEQ;IACI,6CAAA;IAEA,cAAA;IACA,QAAA;Ebi6BV;Ea/5BU;IACI,kBAAA;Ebi6Bd;Ea35BE;IACI;MAAM,6CAAA;Ib85BV;Ia75BI;MAAI,6DAAA;Ibg6BR;EACF;Ea95BE;IACI;MAAM,6CAAA;Ibi6BV;Iah6BI;MAAI,8BAAA;Ibm6BR;EACF;AACF;Ac7qCA;EACI,sIR8BQ;ANipCZ;Ac7qCE;ETUE,aAZU;EAaV,mBAZY;EA4BZ,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;ESDC,aRwBI;EQtBJ,iBAAA;EAEA,gBAAA;EAEA,0DRqBC;EQpBD,4BAAA;EACA,wCAAA;EACA,4BAAA;Ad+qCZ;Ac7qCY;EACI,gBAAA;Ad+qChB;Ac3qCE;ETTE,aAZU;EAaV,sBSSqC;ETOrC,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;ESkBC,gBAAA;AdgrCZ;Ac7qCE;EAEU,WR3BK;EQ6BL,mBAAA;Ad6qCZ;Ac1qCE;EACU,SAAA;EACA,UAAA;EAEA,gBAAA;Ad2qCZ;AczqCY;EACI,gBAAA;Ad2qChB;AcrqCY;ETnCR,aAZU;EAaV,mBAZY;EAsBQ,mBSyBsB;ETnB1C,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;ES4CK,6BAAA;EAAA,qBAAA;Ad2qChB;AczqCgB;EACI,cRrDE;EQsDF,2BAAA;Ad2qCpB;AcvqCY;EThBJ,sBSiBoC;EThBpC,kBAPS;EAQT,gBAPU;EAQV,kBSeoB;ETdpB,iBSesB;ETdtB,cChDQ;EDiDR,sBSeyB;Ad2qCjC;AcvqCE;ETvDE,aAZU;EAaV,sBSuDqC;ETvCrC,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;ESgEC,gBAAA;EAEA,kBAAA;Ad2qCZ;AczqCY;EACI,mBAAA;Ad2qChB;AcxqCY;EACI,gBAAA;Ad0qChB;;AcrqCA;EAEY;IT1ER,aAZU;IAaV,mBAZY;IAgBU,uBSsEuB;IT1D7C,iBAzBO;IA0BP,cAzBS;IA0BT,YAzBO;ISmFK,aAAA;IAEA,iBAAA;IAEA,gBAAA;IAEA,yCAAA;IACA,4BAAA;EdwqCd;EctqCc;IACI,gBAAA;EdwqClB;EcpqCU;IACI,iBAAA;EdsqCd;EcpqCc;IACI,mBAAA;EdsqClB;EcnqCc;IACI,gBAAA;EdqqClB;AACF;AchqCA;EAEY;IT3GR,aAZU;IAaV,sBS2GwC;ITvGlB,2BSwGO;ITlGT,mBSmGI;IT7FxB,iBAzBO;IA0BP,cAzBS;IA0BT,YAzBO;ISsHK,aAAA;IAEA,oBAAA;IAEA,4BAAA;IACA,uCAAA;EdkqCd;EchqCc;IACI,aAAA;EdkqClB;Ec9pCU;IT5HR,aAZU;IAaV,sBS4HyC;ITlHrB,mBSmHI;IT7GxB,iBAzBO;IA0BP,cAzBS;IA0BT,YAzBO;ISsIK,aAAA;IACA,iBAAA;EdmqCd;EchqCU;IACI,YAAA;ITvGR,sBSyGoC;ITxGpC,kBAPS;IAQT,gBAPU;IAQV,oBSuGoB;ITtGpB,gBSuGsB;ITtGtB,WC7CS;ID8CT,sBSuGyB;IACjB,kBAAA;IAEA,mBAAA;EdkqCd;Ec/pCU;ITjJR,aAZU;IAaV,sBSkJwB;ITxIJ,mBSyIK;ITnIzB,iBAzBO;IA0BP,cAzBS;IA0BT,YAzBO;EL8zCT;EcjqCU;ITvJR,aAZU;IAaV,sBSuJyC;IT7IrB,mBS8II;ITxIxB,iBAzBO;IA0BP,cAzBS;IA0BT,YAzBO;ISiKK,gBAAA;IACA,cAAA;EdsqCd;EcpqCc;IACI,mBAAA;EdsqClB;EcnqCc;IACI,gBAAA;IACA,sBAAA;EdqqClB;AACF;AKzxCI;ES0HQ;IACI,uBAAA;EdkqCd;AACF;Ae11CI;EVWA,aAZU;EAaV,mBAZY;EAgBU,uBUfgB;EV2BtC,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;EUFH,gBAAA;Afg2CR;Ae91CQ;EACI,iBAAA;Afg2CZ;;Aez1CI;EVFA,aAZU;EAaV,mBAZY;EAgBU,uBUDgB;EVOlB,mBUNH;EVYjB,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;EUaH,WAAA;EACA,YAAA;EAEA,iBAAA;EACA,kBAAA;EVmBA,sBUjB4B;EVkB5B,kBAPS;EAQT,gBAPU;EAQV,kBUnBY;EVoBZ,iBUnBc;EVoBd,cCzCK;ED0CL,sBUnBiB;EAEjB,eAAA;Af81CR;;Aex1CI;EACI,qBThCK;ESiCL,cTjCK;ESkCL,6BAAA;EAEA,oBAAA;Af01CR;Aev1CI;EACI,qBT/CQ;ESgDR,cTrCU;ESsCV,yBTjDQ;AN04ChB;Aet1CI;EACI,qBTrDQ;ESsDR,cT3CU;ES4CV,6BAAA;EAEA,2BAAA;Afu1CR;Aer1CQ;EACI,mBT3DU;ES4DV,qBT5DU;ES6DV,2BAAA;Afu1CZ;;AK71CI;EUcI;IACI,gBAAA;Efm1CV;AACF;AKh2CI;EUmBI;IVjEJ,aAZU;IAaV,mBAZY;IAgBU,uBU6DoB;IVjD1C,iBAzBO;IA0BP,cAzBS;IA0BT,YAzBO;IU0EC,gBAAA;Efo1CV;Eel1CU;IACI,iBAAA;Efo1Cd;AACF;AgBz6CA;EACI,uBAAA;EACA,eAAA;AhB26CJ;;AgBx6CA;EACI,gBVHa;EDwCT,oBAPU;EAQV,kBAPS;EAQT,gBAPU;EAQV,oBAPQ;EAQR,gBAPU;EAQV,cC9CU;ED+CV,sBAPa;EWhCjB,kBAAA;AhB+6CJ;;AgB56CA;EACI,iBVEY;EUDZ,cAAA;AhB+6CJ;;AKt4CI;EWrCA;IACA,gBVHW;ENk7Cb;AACF;AKt4CI;EWrCA;IACA,gBVNiB;ENo7CnB;AACF;AgB36CA;EACI,cV/BY;EUgCZ,eAAA;AhB66CJ;;AgB16CA;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EAEA,YAAA;EACA,aAAA;EAEA,iCV7BY;EU+BZ,eAAA;EAEA,UAAA;AhBy6CJ;;AgBt6CA;EACI,kBAAA;EACA,eAAA;AhBy6CJ;;AgBt6CA;EACI,aAAA;AhBy6CJ;;AgBt6CA;EACI;IAAM,UAAA;IAAU,mBAAA;EhB26ClB;EgB16CE;IAAI,UAAA;IAAU,kBAAA;EhB86ChB;AACF;AgB56CA;EACI,2BAAA;EACA,wBAAA;AhB86CJ;;AgB36CA;EACI;IAAM,UAAA;IAAU,kBAAA;EhBg7ClB;EgB/6CE;IAAI,UAAA;IAAU,mBAAA;EhBm7ChB;AACF;AgBj7CA;EACI,4BAAA;EACA,wBAAA;AhBm7CJ;;AiB7/CA;EACI,kBAAA;AjBggDJ;;AiB7/CA;EACI,kBAAA;EAEA,aAAA;EACA,UAAA;EAEA,UAAA;EZCA,aAZU;EAaV,sBAAA;EAgBA,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;ALwgDX;AiB//CE;EACU,YAAA;EAEA,mBAAA;EZwBJ,sBYtBgC;EZuBhC,kBAPS;EAQT,gBAPU;EAQV,kBYxBgB;EZyBhB,gBYxBkB;EZyBlB,WC7CS;ED8CT,sBAPa;ALg/CrB;AiB//CE;EACU,YAAA;EAEA,mBAAA;EZaJ,oBAPU;EAQV,kBAPS;EAQT,gBAPU;EAQV,oBAPQ;EAQR,gBAPU;EAQV,cCzCK;ED0CL,sBAPa;AL2/CrB;;AiBjgDA;EACI;IACI,aAAA;IACA,WAAA;EjBogDN;EiBlgDM;IACI,kBAAA;EjBogDV;AACF;AiBhgDA;EACI;IACI,YAAA;IAEA,aAAA;IACA,uBAAA;IAEA,eAAA;IACA,mBAAA;EjBggDN;EiB9/CM;IACI,YAAA;IAEA,iBAAA;IACA,kBAAA;IAEA,kBAAA;IAEA,sBAAA;IAEA,oBAAA;EjB4/CV;EiBx/CA;IACU,WAAA;IAEA,kBAAA;IAEA,oBAAA;EjBw/CV;AACF;AiBp/CA;EACI;IACI,YAAA;IAEA,aAAA;IACA,uBAAA;IAEA,eAAA;IACA,mBAAA;EjBo/CN;EiBl/CM;IACI,YAAA;IAEA,iBAAA;IACA,kBAAA;IAEA,kBAAA;IAEA,sBAAA;IAEA,oBAAA;EjBg/CV;EiB5+CA;IACU,WAAA;IAEA,kBAAA;IAEA,oBAAA;EjB4+CV;AACF;AiBt+CA;EACI,sBXnHa;AN2lDjB;AiBt+CI;EZ3GA,aAZU;EAaV,sBY2GiC;EZ3FjC,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;EYqHH,iBAAA;EACA,qBAAA;EAEA,0DAAA;EACA,4BAAA;EACA,4BAAA;EACA,wCAAA;AjBy+CR;AiBt+CI;EACI,YAAA;EAEA,gBAAA;EACA,mBAAA;AjBu+CR;AiBp+CI;EAEI,gBAAA;AjBq+CR;AiBl+CI;EACI,YAAA;EAEA,gBAAA;EAEA,gBAAA;AjBk+CR;AiB/9CI;EZ9GI,oBAPU;EAQV,kBAPS;EAQT,gBAPU;EAQV,oBAPQ;EAQR,gBAPU;EAQV,cC9CU;ED+CV,sBAPa;ALulDrB;AiBp+CI;EACI,gBAAA;AjBs+CR;;AiBl+CA;EAEQ;IACI,uCAAA;EjBo+CV;EiBj+CM;IACI,gBAAA;EjBm+CV;EiBh+CM;IACI,gBAAA;EjBk+CV;AACF;AiB99CA;EAGI;IACI,iBAAA;IACA,qBAAA;IAEA,4BAAA;IACA,uCAAA;EjB69CN;EiB19CE;IACI,kBAAA;EjB49CN;EiBz9CE;IACI,kBAAA;EjB29CN;AACF;AiBv9CA;EAEQ;IACI,YAAA;IAEA,iBAAA;IACA,kBAAA;EjBu9CV;EiBp9CM;IZrKA,sBYsKgC;IZrKhC,kBAPS;IAQT,gBAPU;IAQV,oBYoKgB;IZnKhB,gBYoKkB;IZnKlB,cCtCK;IDuCL,sBYoKqB;IACjB,kBAAA;EjBw9CV;EiBr9CM;IAEI,kBAAA;IACA,mBAAA;IAEA,iBAAA;IACA,kBAAA;IAEA,mBAAA;EjBo9CV;AACF;AiBh9CA;EAEQ;IACA,WAAA;EjBi9CN;AACF;AK7nDI;EYmLI;IAEI,iBAAA;IACA,qBAAA;IAEA,uCAAA;IACA,4BAAA;EjB28CV;AACF;AiBp8CA;EACI,yBXpPU;AN0rDd;AiBp8CI;EZrPA,aAZU;EAaV,sBYsPoB;EZ5OA,mBY6OC;EZvOrB,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;EYgQH,wBAAA;AjBw8CR;AiBp8CQ;EACI,YAAA;EAEA,mBAAA;EAGA,kBAAA;AjBm8CZ;AiBh8CQ;EACI,gBAAA;AjBk8CZ;;AiB77CA;EAEQ;IACI,wBAAA;EjB+7CV;AACF;AiB37CA;EAEQ;IACI,kBAAA;EjB47CV;EiB17CU;IACI,WAAA;IAEA,mBAAA;IZ/PR,sBYiQoC;IZhQpC,kBAPS;IAQT,gBAPU;IAQV,oBY+PwB;IZ9PxB,gBY+P0B;IZ9P1B,cCtCK;IDuCL,sBY+P6B;EjB47CnC;EiBx7CU;IACI,gBAAA;EjB07Cd;AACF;AiBn7CA;EACI,sBX3Ta;ANgvDjB;AiBn7CI;EZnTA,aAZU;EAaV,sBYoToB;EZ1SA,mBY2SC;EZrSrB,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;EY8TH,yBAAA;AjBu7CR;AiBr7CQ;EACI,YAAA;EAEA,mBAAA;EZ/RJ,sBYkSkB;EZjSlB,kBAPS;EAQT,gBAPU;EAQV,oBYgSgB;EZ/RhB,gBYgSkB;EZ/RlB,cCtCK;EDuCL,sBYgSqB;EACjB,kBAAA;AjBs7CZ;AiBl7CI;EZzUA,aAZU;EAaV,mBAZY;EAgBU,uBYsUD;EZ1TrB,eYyT4B;EZxT5B,cAzBS;EA0BT,YAzBO;EYmVH,SAAA;EACA,UAAA;EAEA,gBAAA;AjBs7CR;AiBn7CI;EACI,aAAA;EZpVJ,aAZU;EAaV,sBYsVoB;EZ5UA,mBY6UC;EZvUrB,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;ALqxDX;AiBr7CQ;EACI,gBAAA;AjBu7CZ;AiBp7CQ;EACI,WAAA;EACA,YAAA;AjBs7CZ;AiBn7CQ;EACI,gBAAA;EZtUJ,sBYyUkB;EZxUlB,kBAPS;EAQT,gBAPU;EAQV,kBYuUgB;EZtUhB,iBYuUkB;EZtUlB,cCtCK;EDuCL,sBYuUqB;EAEjB,mBAAA;AjBo7CZ;;AKzvDI;EY4UA;IACI,yBAAA;EjBi7CN;EiB96CE;IZxXA,aAZU;IAaV,mBAZY;IAgBU,2BYqXD;IZzWrB,eYwW4B;IZvW5B,cAzBS;IA0BT,YAzBO;ELozDT;EiBl7CM;IACI,kBAAA;EjBo7CV;EiBh7CE;IACI,YAAA;EjBk7CN;EiBh7CM;IACI,kBAAA;EjBk7CV;EiBh7CM;IACI,iBAAA;EjBk7CV;EiBh7CM;IACI,kBAAA;EjBk7CV;AACF;AiB76CA;EAEQ;IZnZJ,aAZU;IAaV,mBAZY;IAgBU,uBYgZG;IZpYzB,eYmYgC;IZlYhC,cAzBS;IA0BT,YAzBO;EL60DT;EiB/6CM;IACI,aAAA;EjBi7CV;EiB/6CU;IACI,SAAA;EjBi7Cd;EiB96CU;IACI,gBAAA;EjBg7Cd;AACF;AiB36CA;EAEQ;IZxaJ,aAZU;IAaV,mBAZY;IAgBU,uBYqaG;IZzZzB,eYwZgC;IZvZhC,cAzBS;IA0BT,YAzBO;ELg2DT;EiB76CM;IACI,iBAAA;EjB+6CV;EiB76CU;IACI,SAAA;EjB+6Cd;EiB56CU;IACI,gBAAA;EjB86Cd;AACF;AKzzDI;EYkZI;IACI,wBAAA;EjB06CV;EiBv6CM;IZjcJ,aAZU;IAaV,mBAZY;IAgBU,8BY8bG;IZlbzB,eYibgC;IZhbhC,cAzBS;IA0BT,YAzBO;ELs3DT;EiB16CM;IACI,iBAAA;EjB46CV;EiB16CU;IACI,SAAA;EjB46Cd;EiBz6CU;IACI,gBAAA;EjB26Cd;AACF;AiBt6CA;EAEQ;IACI,uBAAA;EjBu6CV;EiBn6CU;IACI,SAAA;EjBq6Cd;EiBj6CM;IACI,0BAAA;EjBm6CV;EiBj6CU;IACI,iBAAA;EjBm6Cd;EiBh6CU;IACI,aAAA;EjBk6Cd;EiB/5CU;IACI,gBAAA;EjBi6Cd;EiB95CU;IACI,WAAA;IACA,YAAA;EjBg6Cd;EiB75CU;IACI,gBAAA;IZvdR,sBY0dsB;IZzdtB,kBAPS;IAQT,gBAPU;IAQV,oBYwdoB;IZvdpB,gBYwdsB;IZvdtB,cCtCK;IDuCL,sBYwdyB;EjB+5C/B;AACF;AK32DI;EYodQ;IACI,YAAA;IAEA,mBAAA;IZ1eR,sBY4eoC;IZ3epC,kBAPS;IAQT,gBAPU;IAQV,oBY0eoB;IZzepB,gBY0esB;IZzetB,cCtCK;IDuCL,sBY0eyB;EjB05C/B;AACF;AiBp5CA;EACI,yBXvhBU;AN66Dd;AiBp5CI;EACI,0DAAA;EACA,wCAAA;EACA,4BAAA;EACA,4BAAA;AjBs5CR;AiBn5CI;EACI,YAAA;EZhiBJ,aAZU;EAaV,sBYkiBoB;EZlhBpB,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;EY2iBH,+BAAA;EAEA,iBAAA;AjBq5CR;AiBn5CQ;EACI,YAAA;EAEA,mBAAA;AjBo5CZ;AiB94CI;EACI,mBAAA;EZrhBA,sBYuhB4B;EZthB5B,kBAPS;EAQT,gBAPU;EAQV,oBAPQ;EAQR,gBYohBc;EZnhBd,cCtCK;EDuCL,sBYohBiB;AjBk5CzB;AiB/4CI;EZ3jBA,aAZU;EAaV,mBAZY;EAsBQ,qBYijBc;EZ3iBlC,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;EYokBH,uBAAA;EAAA,kBAAA;EAEA,mBAAA;EACA,yBAAA;EAEA,yBXhlBQ;EWilBR,kBAAA;EZtiBA,sBYwiB4B;EZviB5B,kBAPS;EAQT,gBAPU;EAQV,kBYsiBY;EZriBZ,iBYsiBc;EZriBd,cCtCK;EDuCL,sBYsiBiB;EAEjB,6BAAA;EAAA,qBAAA;EAEA,2BAAA;AjBk5CR;AiBh5CQ;EACI,mBX7lBU;EW8lBV,qBX9lBU;EW+lBV,2BAAA;AjBk5CZ;AiB/4CQ;EACI,cX1lBC;EW2lBD,oBAAA;EACA,kBAAA;AjBi5CZ;AiB54CI;EZhkBI,oBAPU;EAQV,kBYkkBa;EZjkBb,gBAPU;EAQV,kBYikBY;EZhkBZ,gBYikBc;EZhkBd,cCnCK;EDoCL,sBAPa;ALs9DrB;;AiB34CA;EAEQ;IACI,uCAAA;EjB64CV;EiB14CM;IACI,+BAAA;IACA,kBAAA;EjB44CV;AACF;AKl9DI;EY4kBI;IACI,yCAAA;EjBy4CV;EiBt4CM;IACI,+BAAA;EjBw4CV;AACF;AiBp4CA;EAEQ;IACA,uCAAA;IACA,4BAAA;EjBq4CN;EiBl4CE;IACI,WAAA;IZzoBJ,aAZU;IAaV,sBY2oBoB;IZjoBA,mBYkoBA;IZ5nBpB,iBAzBO;IA0BP,cAzBS;IA0BT,YAzBO;IYqpBH,wBAAA;EjBq4CN;EiBn4CM;IACI,YAAA;IZpnBJ,sBYsnBgC;IZrnBhC,kBAPS;IAQT,gBAPU;IAQV,oBYonBgB;IZnnBhB,gBYonBkB;IZnnBlB,cCtCK;IDuCL,sBYonBqB;IACjB,kBAAA;EjBs4CV;EiBl4CE;IZ/nBI,sBYgoB4B;IZ/nB5B,kBAPS;IAQT,gBAPU;IAQV,oBAPQ;IAQR,gBY6nBc;IZ5nBd,cCtCK;IDuCL,sBAPa;IYooBb,kBAAA;EjBw4CN;EiBr4CE;IACI,mBAAA;IAEA,yBAAA;IZzoBA,sBY2oB4B;IZ1oB5B,kBAPS;IAQT,gBAPU;IAQV,oBYyoBY;IZxoBZ,gBYyoBc;IZxoBd,cCtCK;IDuCL,sBYyoBiB;EjBu4CvB;EiBp4CE;IACI,mBAAA;EjBs4CN;AACF;AkBnkEA;EACI,yBZSU;AN4jEd;AkBnkEI;EbQA,aAZU;EAaV,sBaPoB;EbiBA,mBahBC;EbsBrB,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;EaGH,wBAAA;AlBukER;AkBrkEQ;EACI,YAAA;EAEA,mBAAA;Eb4BJ,sBa1BgC;Eb2BhC,kBAPS;EAQT,gBAPU;EAQV,oBa5BgB;Eb6BhB,gBa5BkB;Eb6BlB,cCtCK;EDuCL,sBa7BqB;EAGjB,kBAAA;AlBskEZ;AkBnkEQ;EACI,gBAAA;AlBqkEZ;;AkBhkEA;EbnBI,aAZU;EAaV,mBAZY;EAeU,yBaiBJ;EbhBI,8BaegB;EbHtC,eaKW;EbJX,cAzBS;EA0BT,YAzBO;Ea8BH,WAAA;EACA,aAAA;EAEA,UAAA;EACA,mBAAA;EACA,yBAAA;AlBqkER;AkBnkEQ;EACI,iBAAA;AlBqkEZ;AkBlkEQ;EACI,cAAA;AlBokEZ;AkBjkEQ;EACI,gBAAA;AlBmkEZ;AkBhkEI;Eb3CA,aAZU;EAaV,sBa4CoB;EblCA,mBamCC;Eb7BrB,iBAzBO;EA0BP,cAzBS;EA0BT,YAzBO;EasDH,YAAA;EACA,aAAA;EAEA,gBAAA;EAEA,kBAAA;EACA,yBZ3Da;EY6Db,eAAA;EAEA,2BAAA;AlBgkER;AkB9jEQ;EACI,oDAAA;EACA,sBZxEK;EYyEL,2BAAA;AlBgkEZ;AkB7jEQ;EACI,mBZ/EU;EYgFV,qBZhFU;EYiFV,2BAAA;AlB+jEZ;AkB5jEQ;EACI,gBAAA;EACA,mBAAA;AlB8jEZ;AkBxjEQ;EACI,YAAA;EACA,aAAA;EAEA,mBAAA;AlByjEZ;AkBtjEQ;EbzDA,sBa2DsB;Eb1DtB,kBAPS;EAQT,gBAPU;EAQV,kBayDoB;EbxDpB,kBayDsB;EbxDtB,cCtCK;EDuCL,sBayDyB;AlByjEjC;;AkBpjEA;EAEY;IACI,iBAAA;ElBsjEd;EkBnjEU;IACI,cAAA;ElBqjEd;EkBljEU;IACI,gBAAA;ElBojEd;AACF;AkBhjEA;EAEQ;IACI,uBAAA;ElBijEV;EkB/iEU;IACI,mBAAA;ElBijEd;EkB7iEE;IACQ,cAAA;ElB+iEV;EkB7iEU;IACI,cAAA;IACA,aAAA;ElB+iEd;EkB5iEU;IACI,iBAAA;ElB8iEd;EkB3iEU;IACI,gBAAA;ElB6iEd;AACF;AkBziEA;EAEY;IACI,iBAAA;ElB0iEd;EkBviEU;IACI,cAAA;IACA,aAAA;ElByiEd;EkBtiEU;IACI,iBAAA;ElBwiEd;EkBriEU;IACI,gBAAA;ElBuiEd;AACF;AkBniEA;EAEQ;IACI,kBAAA;ElBoiEV;EkBliEU;IACI,WAAA;IAEA,mBAAA;IAEA,eAAA;IAEA,oBAAA;IAEA,kBAAA;ElBgiEd;EkB3hEE;IACI,uBAAA;ElB6hEN;EkB3hEU;IACI,gBAAA;IACA,iBAAA;IACA,aAAA;ElB6hEd;EkB1hEU;IACI,gBAAA;IACA,iBAAA;ElB4hEd;EkBzhEU;IACI,gBAAA;ElB2hEd;EkBxhEU;IACI,aAAA;ElB0hEd;AACF;AKtrEI;EaiKA;IACI,uBAAA;ElBwhEN;EkBthEU;IACI,cAAA;IACA,eAAA;IACA,aAAA;ElBwhEd;EkBrhEU;IACI,gBAAA;ElBuhEd;EkBphEU;IACI,aAAA;ElBshEd;AACF","sourcesContent":["@charset \"UTF-8\";\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n@font-face {\n  font-family: \"Georgia\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  /* Браузер сначала попробует найти шрифт локально */\n  src: local(\"Georgia\"), url(\"./assets/fonts/georgia.woff2\") format(\"woff2\"), url(\"./assets/fonts/georgia.woff\") format(\"woff\"), url(\"./assets/fonts/georgia.ttf\") format(\"ttf\");\n}\n@font-face {\n  font-family: \"Georgia\", sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  /* Браузер сначала попробует найти шрифт локально */\n  src: local(\"Georgia\"), url(\"./assets/fonts/georgiab.woff2\") format(\"woff2\"), url(\"./assets/fonts/georgiab.woff\") format(\"woff\"), url(\"./assets/fonts/georgiab.ttf\") format(\"ttf\");\n}\n@font-face {\n  font-family: \"Georgia\", sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  /* Браузер сначала попробует найти шрифт локально */\n  src: local(\"Georgia\"), url(\"./assets/fonts/georgiai.woff2\") format(\"woff2\"), url(\"./assets/fonts/georgiai.woff\") format(\"woff\"), url(\"./assets/fonts/georgiai.ttf\") format(\"ttf\");\n}\n@font-face {\n  font-family: \"Arial\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  /* Браузер сначала попробует найти шрифт локально */\n  src: local(\"Arial\"), url(\"./assets/fonts/arial.woff2\") format(\"woff2\"), url(\"./assets/fonts/arial.woff\") format(\"woff\"), url(\"./assets/fonts/arial.ttf\") format(\"ttf\");\n}\n@font-face {\n  font-family: \"Arial\", sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  /* Браузер сначала попробует найти шрифт локально */\n  src: local(\"Arial\"), url(\"./assets/fonts/ariali.woff2\") format(\"woff2\"), url(\"./assets/fonts/ariali.woff\") format(\"woff\"), url(\"./assets/fonts/ariali.ttf\") format(\"ttf\");\n}\n@font-face {\n  font-family: \"icomoon\";\n  src: url(\"./assets/fonts/icomoon.eot?gjaarj\");\n  src: url(\"./assets/fonts/icomoon.eot?gjaarj#iefix\") format(\"embedded-opentype\"), url(\"./assets/fonts/icomoon.ttf?gjaarj\") format(\"truetype\"), url(\"./assets/fonts/icomoon.woff?gjaarj\") format(\"woff\"), url(\"./assets/fonts/icomoon.svg?gjaarj#icomoon\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n}\n[class^=icon-], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"icomoon\" !important;\n  speak: never;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-credit:before {\n  content: \"\\e900\";\n  margin-right: 15px;\n}\n\n.icon-email:before {\n  content: \"\\e901\";\n  margin-right: 20px;\n}\n\n.icon-phone:before {\n  content: \"\\e902\";\n  margin-right: 20px;\n}\n\n.icon-pin:before {\n  content: \"\\e903\";\n  margin-right: 20px;\n}\n\n/* Убираем внешние отступы */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n.in-addition__container h2, .our-friends__container h2, .about__title h2, .footer__title > h2 {\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 2.1875rem;\n  line-height: 1.3;\n  color: #545454;\n  letter-spacing: 0.06em;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  background-color: rgba(41, 41, 41, 0.6);\n}\n\n.modal {\n  position: relative;\n  width: 900px;\n  height: 500px;\n  border-radius: 9px;\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n  background-color: #FAFAFA;\n}\n.modal__button {\n  position: absolute;\n  top: -52px;\n  right: -42px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  border: 2px solid #F1CDB3;\n  color: #292929;\n  background-color: #7f7f7f;\n  cursor: pointer;\n  transition: all 0.5s linear;\n}\n.modal__button:hover {\n  background-color: #F1CDB3;\n  transition: all 0.5s linear;\n}\n.modal__wrapper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.modal img {\n  width: 500px;\n  height: 500px;\n  object-fit: cover;\n  border-radius: 9px 0 0 9px;\n}\n.modal__info {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  width: 351px;\n  margin: 50px 20px 88px 29px;\n}\n.modal__title {\n  margin-bottom: 10px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 2.1875rem;\n  line-height: 1.3;\n  color: #000;\n  letter-spacing: 0.06em;\n}\n.modal__subtitle {\n  margin-bottom: 40px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.15;\n  color: #000;\n  letter-spacing: 0.06em;\n}\n.modal__text {\n  margin-bottom: 40px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.1;\n  color: #000;\n  letter-spacing: 0.06em;\n}\n.modal__list {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  margin-left: 0;\n  padding: 0;\n  list-style: none;\n}\n.modal__list > * + * {\n  margin-top: 11px;\n}\n.modal__item {\n  position: relative;\n  margin-left: 14px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.1;\n  color: #000;\n  letter-spacing: 0.06em;\n}\n.modal__item:before {\n  position: absolute;\n  top: -3px;\n  left: -14px;\n  width: 4px;\n  height: 4px;\n  content: url(\"./assets/svg/dot.svg\");\n  color: #F1CDB3;\n}\n.modal__item > span {\n  font-weight: 700;\n}\n\n@media (max-width: 1279px) {\n  .modal {\n    width: 630px;\n    height: 350px;\n  }\n  .modal img {\n    width: 350px;\n    height: 350px;\n  }\n  .modal__info {\n    width: 260px;\n    margin: 10px 9px 37px 11px;\n  }\n  .modal__subtitle {\n    margin-bottom: 20px;\n  }\n  .modal__text {\n    margin-bottom: 20px;\n    font-size: 0.8125rem;\n  }\n  .modal__list > * + * {\n    margin-top: 5px;\n  }\n}\n@media (max-width: 730px) {\n  .modal {\n    width: 240px;\n    min-height: 341px;\n    height: auto;\n  }\n  .modal img {\n    display: none;\n  }\n  .modal__button {\n    right: -30px;\n  }\n  .modal__info {\n    width: 220px;\n    margin: 10px 10px;\n  }\n  .modal__title {\n    margin-bottom: 10px;\n  }\n  .modal__title, .modal__subtitle {\n    text-align: center;\n  }\n  .modal__text {\n    margin-bottom: 24px;\n    text-align: justify;\n  }\n}\n.burger {\n  display: none;\n}\n\n@media (max-width: 767px) {\n  .burger {\n    position: sticky;\n    top: 48px;\n    right: 20px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex-wrap: nowrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n    width: 30px;\n    height: 22px;\n    z-index: 20;\n    cursor: pointer;\n  }\n  .burger__line {\n    position: relative;\n    width: 100%;\n    height: 2px;\n    background-color: #F1CDB3;\n    transition: all 0.5s linear;\n  }\n  .header-light .burger__line {\n    background-color: #000;\n  }\n  .burger__line:before, .burger__line:after {\n    position: absolute;\n    content: \"\";\n    left: 0;\n    width: 100%;\n    height: 2px;\n    background-color: #F1CDB3;\n  }\n  .header-light .burger__line:before, .header-light .burger__line:after {\n    background-color: #000;\n  }\n  .burger__line:before {\n    top: 10px;\n  }\n  .burger__line:after {\n    top: 20px;\n  }\n  .burger-opened > .burger__line {\n    transform: rotate(90deg);\n    transform-origin: 20px 5px;\n    transition: all 0.5s linear;\n  }\n}\nheader {\n  background: url(\"./assets/img/background/noise_transparent.png\") repeat, radial-gradient(100% 215.42% at 0% 0%, #5B483A 0%, #262425 100%), #211F20;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  height: 878px;\n  padding-top: 30px;\n  padding-left: 40px;\n  padding-right: 40px;\n  background-image: url(\"./assets/img/background/start-screen-puppy.png\");\n  background-size: 698px 728px;\n  background-position: right 40px bottom 0;\n  background-repeat: no-repeat;\n}\n\n.top {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n\n.header-light {\n  background: 0;\n  background-color: #fff;\n}\n.header-light__container {\n  padding-left: 40px;\n  padding-right: 40px;\n}\n.header-light .top {\n  height: 120px;\n}\n\n@media (max-width: 1260px) {\n  .header {\n    height: 1135px;\n    padding: 30px 30px 0;\n    background-size: 569px 593px;\n    background-position: right 30px bottom 0;\n    background-repeat: no-repeat;\n  }\n  .header-light__container {\n    padding: 0 30px;\n  }\n}\n@media (max-width: 767px) {\n  .header {\n    height: 793px;\n    padding: 30px 20px 0;\n    background-size: 260px 272px;\n    background-position: right 10px bottom 0;\n    background-repeat: no-repeat;\n  }\n  .header-light__container {\n    padding: 0 20px;\n  }\n}\n.button {\n  width: fit-content;\n  padding: 13px 43px;\n  border: 2px solid #F1CDB3;\n  border-radius: 100px;\n  white-space: nowrap;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.0625rem;\n  line-height: 1.3;\n  color: #292929;\n  letter-spacing: 0.06em;\n  cursor: pointer;\n  transition: all 0.5s linear;\n}\n.button:hover {\n  background: #FDDCC4;\n  border-color: #FDDCC4;\n  transition: all 0.5s linear;\n}\n\n.button-primary {\n  background: #F1CDB3;\n}\n\n.button-secondary {\n  background: #fff;\n}\n\n.button-link {\n  width: fit-content;\n  padding: 13px 43px;\n  border: 2px solid #F1CDB3;\n  border-radius: 100px;\n  white-space: nowrap;\n  background: #F1CDB3;\n  text-decoration: none;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.0625rem;\n  line-height: 1.3;\n  color: #292929;\n  letter-spacing: 0.06em;\n  cursor: pointer;\n  transition: all 0.5s linear;\n}\n.button-link:hover {\n  background: #FDDCC4;\n  border-color: #FDDCC4;\n  transition: all 0.5s linear;\n}\n\n.logo {\n  text-align: right;\n}\n.logo:hover a {\n  color: #292929;\n}\n.logo a {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  text-decoration: none;\n}\n.logo a span {\n  transition: all 0.5s linear;\n}\n.logo a:hover span {\n  color: #fff;\n  transition: all 0.5s linear;\n}\n.logo__title {\n  margin-bottom: 10px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 2rem;\n  line-height: 1.1;\n  color: #F1CDB3;\n  letter-spacing: 0.06em;\n}\n.logo__subtitle {\n  font-family: \"Arial\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.8125rem;\n  line-height: 1.15;\n  color: #fff;\n  letter-spacing: 0.1em;\n}\n\n.header-light .logo__title {\n  color: #545454;\n}\n.header-light .logo__subtitle {\n  color: #292929;\n}\n.header-light .logo a span {\n  transition: all 0.5s linear;\n}\n.header-light .logo a:hover span {\n  color: #292929;\n  transition: all 0.5s linear;\n}\n\n.top-nav {\n  margin-top: 16px;\n}\n.top-nav__list {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  margin: 0;\n  list-style: none;\n}\n.top-nav__list * + * {\n  margin-left: 35px;\n}\n.top-nav__item {\n  padding: 0;\n}\n.top-nav__item a {\n  font-family: \"Arial\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #CDCDCD;\n  letter-spacing: normal;\n  text-decoration: none;\n  transition: all 0.5s linear;\n}\n.top-nav__item a:hover {\n  font-family: \"Arial\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #FAFAFA;\n  letter-spacing: normal;\n  transition: all 0.5s linear;\n}\n.top-nav__item-active > a {\n  padding-bottom: 4px;\n  border-bottom: 3px solid #F1CDB3;\n  font-family: \"Arial\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #FAFAFA;\n  letter-spacing: normal;\n  pointer-events: none;\n}\n\n.header-light .logo, .header-light .top-nav__list {\n  margin-top: 30px;\n}\n.header-light .top-nav__item a {\n  color: #545454;\n}\n.header-light .top-nav__item a:hover {\n  color: #292929;\n}\n.header-light .top-nav__item-active a {\n  color: #545454;\n}\n\n@media (max-width: 767px) {\n  .top-nav {\n    display: block;\n    position: fixed;\n    top: 0;\n    right: 0;\n    margin-top: 0;\n    width: 320px;\n    height: 100vh;\n    background-color: #292929;\n    transform: translateX(320px);\n    transition: transform 0.5s linear;\n  }\n  .header-light .top-nav {\n    background-color: #fff;\n  }\n  .top-nav__list {\n    position: absolute;\n    top: 248px;\n    right: 0;\n    width: 320px;\n    padding: 0;\n    z-index: 12;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: nowrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n  }\n  .top-nav__list * + * {\n    margin-left: 0;\n    margin-top: 40px;\n  }\n  .top-nav__item a, .top-nav__item a:hover {\n    font-family: \"Arial\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 2rem;\n    line-height: 1.6;\n    color: #CDCDCD;\n    letter-spacing: normal;\n  }\n  .top-nav__item-active > a {\n    font-family: \"Arial\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 2rem;\n    line-height: 1.6;\n    color: #FAFAFA;\n    letter-spacing: normal;\n    padding-bottom: 6px;\n  }\n  .top-nav-opened {\n    transform: translateX(0);\n    transition: transform 0.5s linear;\n    z-index: 11;\n  }\n}\n.slider {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.slider__wrapper {\n  width: 1096px;\n  height: 435px;\n  overflow: hidden;\n}\n.slider__prev {\n  position: relative;\n  width: 52px;\n  height: 52px;\n  align-self: center;\n  border: 2px solid #F1CDB3;\n  border-radius: 100px;\n  cursor: pointer;\n  transition: all 0.5s linear;\n}\n.slider__prev:after {\n  position: absolute;\n  content: url(\"./assets/img/arrow.png\");\n  top: 13px;\n  left: calc(50% - 7px);\n  width: 14px;\n  height: 6px;\n}\n.slider__prev:hover {\n  background-color: #FDDCC4;\n  border-color: #FDDCC4;\n  transition: all 0.5s linear;\n}\n.slider__container {\n  position: relative;\n  left: -1027px;\n  display: inline-flex;\n  height: 435px;\n}\n.slider__container > * + * {\n  margin-left: 90px;\n}\n.slider__item {\n  width: 270px;\n  height: 435px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  border-radius: 9px;\n  background-color: #FAFAFA;\n  cursor: pointer;\n  transition: all 0.5s linear;\n}\n.slider__item:hover {\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n  background-color: #fff;\n  transition: all 0.5s linear;\n}\n.slider__item:hover button {\n  background: #FDDCC4;\n  border-color: #FDDCC4;\n  transition: all 0.5s linear;\n}\n.slider__item > button {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.slider__next {\n  position: relative;\n  width: 52px;\n  height: 52px;\n  align-self: center;\n  border: 2px solid #F1CDB3;\n  border-radius: 100px;\n  cursor: pointer;\n  transition: all 0.5s linear;\n}\n.slider__next:after {\n  position: absolute;\n  content: url(\"./assets/img/arrow.png\");\n  transform: rotate(180deg);\n  top: 34px;\n  left: calc(50% - 7px);\n  width: 14px;\n  height: 6px;\n}\n.slider__next:hover {\n  background-color: #FDDCC4;\n  border-color: #FDDCC4;\n  transition: all 0.5s linear;\n}\n\n.pet__photo {\n  margin-bottom: 30px;\n  width: 270px;\n  height: 270px;\n  object-fit: cover;\n  border-radius: 9px 9px 0 0;\n}\n.pet__name {\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.136;\n  color: #545454;\n  letter-spacing: 0.06em;\n}\n\n@keyframes move-right {\n  from {\n    left: -1027px;\n  }\n  to {\n    left: -2107px;\n  }\n}\n.transition-right {\n  animation-name: move-right;\n  animation-duration: 3s;\n}\n\n@keyframes move-left {\n  from {\n    left: -1027px;\n  }\n  to {\n    left: 53px;\n  }\n}\n.transition-left {\n  animation-name: move-left;\n  animation-duration: 3s;\n}\n\n@media (max-width: 1279px) {\n  .slider__wrapper {\n    width: 604px;\n  }\n  .slider__container {\n    left: -608px;\n  }\n  .slider__container > * + * {\n    margin-left: 40px;\n  }\n  @keyframes move-right {\n    from {\n      left: -608px;\n    }\n    to {\n      left: -1228px;\n    }\n  }\n  @keyframes move-left {\n    from {\n      left: -608px;\n    }\n    to {\n      left: 12px;\n    }\n  }\n}\n@media (max-width: 767px) {\n  .slider {\n    flex-wrap: wrap;\n    width: 100%;\n  }\n  .slider__wrapper {\n    width: 100%;\n  }\n  .slider__prev {\n    order: 1;\n    margin-top: 20px;\n    margin-left: auto;\n    margin-right: 80px;\n  }\n  .slider__next {\n    order: 2;\n    margin-top: 20px;\n    margin-right: auto;\n  }\n  .slider__container {\n    left: calc((670px - (100% - 270px) / 2) * -1);\n    flex: 1 1 100%;\n    order: 0;\n  }\n  .slider__container > * + * {\n    margin-left: 400px;\n  }\n  @keyframes move-right {\n    from {\n      left: calc((670px - (100% - 270px) / 2) * -1);\n    }\n    to {\n      left: calc((670px - (100% - 270px) / 2) * -1 - 270px - 400px);\n    }\n  }\n  @keyframes move-left {\n    from {\n      left: calc((670px - (100% - 270px) / 2) * -1);\n    }\n    to {\n      left: calc((100% - 270px) / 2);\n    }\n  }\n}\n@media (max-width: 450px) {\n  .slider__container {\n    left: calc((370px - (100% - 270px) / 2) * -1);\n    flex: 1 1 100%;\n    order: 0;\n  }\n  .slider__container > * + * {\n    margin-left: 100px;\n  }\n  @keyframes move-right {\n    from {\n      left: calc((370px - (100% - 270px) / 2) * -1);\n    }\n    to {\n      left: calc((370px - (100% - 270px) / 2) * -1 - 270px - 100px);\n    }\n  }\n  @keyframes move-left {\n    from {\n      left: calc((370px - (100% - 270px) / 2) * -1);\n    }\n    to {\n      left: calc((100% - 270px) / 2);\n    }\n  }\n}\n.footer {\n  background: url(\"./assets/img/background/noise_transparent.png\"), radial-gradient(110.67% 538.64% at 5.73% 50%, #513D2F 0%, #1A1A1C 100%), #211F20;\n}\n.footer__container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  height: 350px;\n  padding: 0 40px 0;\n  overflow: hidden;\n  background-image: url(\"./assets/img/footer-puppy.png\");\n  background-size: 300px 310px;\n  background-position: bottom 0 right 40px;\n  background-repeat: no-repeat;\n}\n.footer__container > * {\n  margin-top: 56px;\n}\n.footer__first {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  max-width: 280px;\n}\n.footer__title > h2 {\n  color: #fff;\n  margin-bottom: 40px;\n}\n.footer__list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.footer__list > * + * {\n  margin-top: 40px;\n}\n.footer__item a {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  text-decoration: none;\n}\n.footer__item a:hover span, .footer__item a:hover i {\n  color: #FDDCC4;\n  transition: all 0.5s linear;\n}\n.footer__item a span {\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.15;\n  color: #F1CDB3;\n  letter-spacing: 0.06em;\n}\n.footer__second {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  max-width: 302px;\n  margin-left: 158px;\n}\n.footer__second h2 {\n  margin-bottom: 32px;\n}\n.footer__second .footer__list > .footer__item:nth-child(2) {\n  margin-top: 32px;\n}\n\n@media (max-width: 1160px) {\n  .footer__container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: nowrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n    height: 639px;\n    padding: 0 30px 0;\n    overflow: hidden;\n    background-position: bottom 0 right 234px;\n    background-repeat: no-repeat;\n  }\n  .footer__container > * {\n    margin-top: 30px;\n  }\n  .footer__second {\n    margin-left: 60px;\n  }\n  .footer__second h2 {\n    margin-bottom: 32px;\n  }\n  .footer__second .footer__list > .footer__item:nth-child(2) {\n    margin-top: 32px;\n  }\n}\n@media (max-width: 767px) {\n  .footer__container {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: nowrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n    height: 779px;\n    padding: 30px 10px 0;\n    background-size: 260px 269px;\n    background-position: bottom 0 right 50%;\n  }\n  .footer__container > * {\n    margin-top: 0;\n  }\n  .footer__first {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: nowrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n    margin-top: 0;\n    margin-left: 10px;\n  }\n  .footer__title > h2 {\n    width: 280px;\n    font-family: \"Georgia\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 1.5625rem;\n    line-height: 1.3;\n    color: #fff;\n    letter-spacing: 0.06em;\n    text-align: center;\n    margin-bottom: 40px;\n  }\n  .footer__list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: nowrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n  }\n  .footer__second {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: nowrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n    margin-top: 40px;\n    margin-left: 0;\n  }\n  .footer__second h2 {\n    margin-bottom: 40px;\n  }\n  .footer__second .footer__list > .footer__item:nth-child(2) {\n    margin-top: 40px;\n    align-self: flex-start;\n  }\n}\n@media (max-width: 320px) {\n  .footer__container {\n    align-items: flex-start;\n  }\n}\n.gallery__pagination {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  margin-top: 60px;\n}\n.gallery__pagination * + * {\n  margin-left: 20px;\n}\n\n.pagination__state {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  width: 50px;\n  height: 50px;\n  border: 2px solid;\n  border-radius: 50%;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.15;\n  color: #CDCDCD;\n  letter-spacing: 0.06em;\n  cursor: pointer;\n}\n\n.state-disable {\n  border-color: #CDCDCD;\n  color: #CDCDCD;\n  background-color: transparent;\n  pointer-events: none;\n}\n.state-active {\n  border-color: #F1CDB3;\n  color: #292929;\n  background-color: #F1CDB3;\n}\n.state-available {\n  border-color: #F1CDB3;\n  color: #292929;\n  background-color: transparent;\n  transition: all 0.5s linear;\n}\n.state-available:hover {\n  background: #FDDCC4;\n  border-color: #FDDCC4;\n  transition: all 0.5s linear;\n}\n\n@media (max-width: 768px) {\n  .gallery__pagination {\n    margin-top: 40px;\n  }\n}\n@media (max-width: 376px) {\n  .gallery__pagination {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: nowrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n    margin-top: 42px;\n  }\n  .gallery__pagination * + * {\n    margin-left: 10px;\n  }\n}\nhtml {\n  scroll-behavior: smooth;\n  font-size: 1rem;\n}\n\nbody {\n  background: #fff;\n  font-family: \"Arial\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #4C4C4C;\n  letter-spacing: normal;\n  overflow-x: hidden;\n}\n\n.wrapper {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n\n@media (max-width: 768px) {\n  .wrapper {\n    max-width: 768px;\n  }\n}\n@media (max-width: 320px) {\n  .wrapper {\n    max-width: 320px;\n  }\n}\n[class^=icon-] {\n  color: #F1CDB3;\n  font-size: 2rem;\n}\n\n.plug {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(41, 41, 41, 0.6);\n  cursor: pointer;\n  z-index: 9;\n}\n\n.fixed {\n  overflow-y: hidden;\n  position: fixed;\n}\n\n.hidden {\n  display: none;\n}\n\n@keyframes make-hidden {\n  from {\n    opacity: 1;\n    visibility: visible;\n  }\n  to {\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n.make-hidden {\n  animation-name: make-hidden;\n  animation-duration: 0.5s;\n}\n\n@keyframes make-visible {\n  from {\n    opacity: 0;\n    visibility: hidden;\n  }\n  to {\n    opacity: 1;\n    visibility: visible;\n  }\n}\n.make-visible {\n  animation-name: make-visible;\n  animation-duration: 0.5s;\n}\n\n.not-only > .wrapper {\n  position: relative;\n}\n\n.header-slogan {\n  position: absolute;\n  bottom: 243px;\n  left: 40px;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.header-slogan__title h1 {\n  width: 310px;\n  margin-bottom: 42px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 2.75rem;\n  line-height: 1.3;\n  color: #fff;\n  letter-spacing: normal;\n}\n.header-slogan__text {\n  width: 460px;\n  margin-bottom: 42px;\n  font-family: \"Arial\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #CDCDCD;\n  letter-spacing: normal;\n}\n\n@media (max-width: 1260px) {\n  .header-slogan {\n    bottom: 693px;\n    left: 154px;\n  }\n  .header-slogan .button-link {\n    align-self: center;\n  }\n}\n@media (max-width: 767px) {\n  .header-slogan {\n    width: 500px;\n    bottom: 377px;\n    left: calc(50% - 250px);\n    padding-left: 0;\n    padding-right: 10px;\n  }\n  .header-slogan__title h1 {\n    width: 200px;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    letter-spacing: 0.06em;\n    font-size: 1.5625rem;\n  }\n  .header-slogan__text {\n    width: 100%;\n    text-align: center;\n    font-size: 0.9375rem;\n  }\n}\n@media (max-width: 560px) {\n  .header-slogan {\n    width: 300px;\n    bottom: 377px;\n    left: calc(50% - 150px);\n    padding-left: 0;\n    padding-right: 10px;\n  }\n  .header-slogan__title h1 {\n    width: 200px;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    letter-spacing: 0.06em;\n    font-size: 1.5625rem;\n  }\n  .header-slogan__text {\n    width: 100%;\n    text-align: center;\n    font-size: 0.9375rem;\n  }\n}\n.about {\n  background-color: #fff;\n}\n.about__container {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  padding-top: 94px;\n  padding-bottom: 114px;\n  background-image: url(\"./assets/img/about-pets.png\");\n  background-repeat: no-repeat;\n  background-size: 300px 408px;\n  background-position: left 215px top 80px;\n}\n.about__title {\n  width: 370px;\n  margin-left: 50%;\n  margin-bottom: 25px;\n}\n.about__title h2 {\n  text-align: left;\n}\n.about__text {\n  width: 430px;\n  margin-left: 50%;\n  text-align: left;\n}\n.about__text p {\n  font-family: \"Arial\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #4C4C4C;\n  letter-spacing: normal;\n}\n.about__text * + * {\n  margin-top: 25px;\n}\n\n@media (max-width: 1200px) {\n  .about__container {\n    background-position: left 40px top 80px;\n  }\n  .about__title {\n    margin-left: 45%;\n  }\n  .about__text {\n    margin-left: 45%;\n  }\n}\n@media (max-width: 900px) {\n  .about__container {\n    padding-top: 80px;\n    padding-bottom: 588px;\n    background-repeat: no-repeat;\n    background-position: left 50% top 540px;\n  }\n  .about__title {\n    margin-left: 169px;\n  }\n  .about__text {\n    margin-left: 169px;\n  }\n}\n@media (max-width: 767px) {\n  .about__title {\n    width: 250px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .about__title h2 {\n    font-family: \"Georgia\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 1.5625rem;\n    line-height: 1.3;\n    color: #545454;\n    letter-spacing: 0.06em;\n    text-align: center;\n  }\n  .about__text {\n    padding-left: 25px;\n    padding-right: 25px;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: justify;\n  }\n}\n@media (max-width: 480px) {\n  .about__text {\n    width: auto;\n  }\n}\n@media (max-width: 320px) {\n  .about__container {\n    padding-top: 42px;\n    padding-bottom: 438px;\n    background-position: left 50% top 578px;\n    background-size: 260px 354px;\n  }\n}\n.our-friends {\n  background-color: #F6F6F6;\n}\n.our-friends__container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  padding: 80px 40px 100px;\n}\n.our-friends__container h2 {\n  width: 400px;\n  margin-bottom: 60px;\n  text-align: center;\n}\n.our-friends__container > a {\n  margin-top: 60px;\n}\n\n@media (max-width: 820px) {\n  .our-friends__container {\n    padding: 80px 30px 100px;\n  }\n}\n@media (max-width: 767px) {\n  .our-friends__container {\n    padding: 42px 10px;\n  }\n  .our-friends__container h2 {\n    width: 100%;\n    margin-bottom: 42px;\n    font-family: \"Georgia\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 1.5625rem;\n    line-height: 1.3;\n    color: #545454;\n    letter-spacing: 0.06em;\n  }\n  .our-friends__container > a {\n    margin-top: 42px;\n  }\n}\n.help {\n  background-color: #fff;\n}\n.help__container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  padding: 80px 127px 100px;\n}\n.help__container h2 {\n  width: 310px;\n  margin-bottom: 60px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 2.1875rem;\n  line-height: 1.3;\n  color: #545454;\n  letter-spacing: 0.06em;\n  text-align: center;\n}\n.help__list {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.help__item {\n  flex: 1 1 20%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.help__item:nth-child(n+6) {\n  margin-top: 55px;\n}\n.help__item > img {\n  width: 60px;\n  height: 60px;\n}\n.help__item > p {\n  margin-top: 30px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.15;\n  color: #545454;\n  letter-spacing: 0.06em;\n  white-space: nowrap;\n}\n\n@media (max-width: 1280px) {\n  .help__container {\n    padding: 80px 125px 100px;\n  }\n  .help__list {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n  }\n  .help__list > * + * {\n    margin-left: 120px;\n  }\n  .help__item {\n    flex: 1 1 0%;\n  }\n  .help__item:nth-child(1) {\n    margin-right: auto;\n  }\n  .help__item:nth-child(6) {\n    margin-left: 84px;\n  }\n  .help__item:nth-child(9) {\n    margin-right: 84px;\n  }\n}\n@media (max-width: 1279px) {\n  .help__list {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: wrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n  }\n  .help__item {\n    flex: 1 1 25%;\n  }\n  .help__item:nth-child(n) {\n    margin: 0;\n  }\n  .help__item:nth-child(n+5) {\n    margin-top: 55px;\n  }\n}\n@media (max-width: 1000px) {\n  .help__list {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: wrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n  }\n  .help__item {\n    flex: 1 1 33.333%;\n  }\n  .help__item:nth-child(n) {\n    margin: 0;\n  }\n  .help__item:nth-child(n+4) {\n    margin-top: 55px;\n  }\n}\n@media (max-width: 768px) {\n  .help__container {\n    padding: 80px 40px 100px;\n  }\n  .help__list {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n  }\n  .help__item {\n    flex: 1 1 33.333%;\n  }\n  .help__item:nth-child(n) {\n    margin: 0;\n  }\n  .help__item:nth-child(n+4) {\n    margin-top: 55px;\n  }\n}\n@media (max-width: 600px) {\n  .help__container {\n    padding: 42px 15px 42px;\n  }\n  .help__list > * + * {\n    margin: 0;\n  }\n  .help__item {\n    flex: 0 1 calc(50% - 15px);\n  }\n  .help__item:nth-child(2n) {\n    margin-left: 30px;\n  }\n  .help__item:nth-child(n+4) {\n    margin-top: 0;\n  }\n  .help__item:nth-child(n+3) {\n    margin-top: 30px;\n  }\n  .help__item > img {\n    width: 50px;\n    height: 50px;\n  }\n  .help__item > p {\n    margin-top: 20px;\n    font-family: \"Georgia\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 0.9375rem;\n    line-height: 1.1;\n    color: #545454;\n    letter-spacing: 0.06em;\n  }\n}\n@media (max-width: 320px) {\n  .help__container h2 {\n    width: 230px;\n    margin-bottom: 42px;\n    font-family: \"Georgia\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 1.5625rem;\n    line-height: 1.3;\n    color: #545454;\n    letter-spacing: 0.06em;\n  }\n}\n.in-addition {\n  background-color: #F6F6F6;\n}\n.in-addition__background {\n  background-image: url(\"./assets/img/donation-dog.png\");\n  background-position: top 91px left 183px;\n  background-size: 505px 261px;\n  background-repeat: no-repeat;\n}\n.in-addition__container {\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  padding: 80px 182px 100px 183px;\n  margin-left: auto;\n}\n.in-addition__container h2 {\n  width: 300px;\n  margin-bottom: 20px;\n}\n.in-addition__subtitle {\n  margin-bottom: 20px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.9375rem;\n  line-height: 1.1;\n  color: #545454;\n  letter-spacing: 0.06em;\n}\n.in-addition__number {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  width: fit-content;\n  margin-bottom: 20px;\n  padding: 10px 15px 10px 0;\n  background-color: #F1CDB3;\n  border-radius: 9px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.15;\n  color: #545454;\n  letter-spacing: 0.06em;\n  text-decoration: none;\n  transition: all 0.5s linear;\n}\n.in-addition__number:hover {\n  background: #FDDCC4;\n  border-color: #FDDCC4;\n  transition: all 0.5s linear;\n}\n.in-addition__number i {\n  color: #545454;\n  font-size: 1.4375rem;\n  padding-left: 15px;\n}\n.in-addition__comment {\n  font-family: \"Arial\";\n  font-style: italic;\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 1.5;\n  color: #B2B2B2;\n  letter-spacing: normal;\n}\n\n@media (max-width: 1275px) {\n  .in-addition__background {\n    background-position: top 422px left 50%;\n  }\n  .in-addition__container {\n    padding: 80px 194px 421px 194px;\n    margin-right: auto;\n  }\n}\n@media (max-width: 768px) {\n  .in-addition__background {\n    background-position: top 422px left 131px;\n  }\n  .in-addition__container {\n    padding: 80px 194px 421px 194px;\n  }\n}\n@media (max-width: 767px) {\n  .in-addition__background {\n    background-position: top 365px left 50%;\n    background-size: 260px 135px;\n  }\n  .in-addition__container {\n    width: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: nowrap;\n    flex-shrink: 0;\n    flex-grow: 0;\n    padding: 42px 20px 219px;\n  }\n  .in-addition__container h2 {\n    width: 220px;\n    font-family: \"Georgia\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 1.5625rem;\n    line-height: 1.3;\n    color: #545454;\n    letter-spacing: 0.06em;\n    text-align: center;\n  }\n  .in-addition__subtitle {\n    font-family: \"Georgia\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 0.9375rem;\n    line-height: 1.6;\n    color: #545454;\n    letter-spacing: normal;\n    text-align: center;\n  }\n  .in-addition__number {\n    align-items: center;\n    padding: 10px 13px 10px 0;\n    font-family: \"Georgia\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 0.9375rem;\n    line-height: 1.1;\n    color: #545454;\n    letter-spacing: 0.06em;\n  }\n  .in-addition__comment {\n    text-align: justify;\n  }\n}\n.friends {\n  background-color: #F6F6F6;\n}\n.friends__container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  padding: 80px 40px 100px;\n}\n.friends__container h1 {\n  width: 400px;\n  margin-bottom: 60px;\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 2.1875rem;\n  line-height: 1.3;\n  color: #545454;\n  letter-spacing: 0.06em;\n  text-align: center;\n}\n.friends__container > a {\n  margin-top: 60px;\n}\n\n.gallery {\n  display: flex;\n  flex-direction: row;\n  align-content: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  width: 100%;\n  height: 900px;\n  opacity: 1;\n  visibility: visible;\n  transition: all 2s linear;\n}\n.gallery > * + * {\n  margin-left: 40px;\n}\n.gallery > * {\n  margin-left: 0;\n}\n.gallery > *:nth-child(n+5) {\n  margin-top: 30px;\n}\n.gallery__item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 0;\n  width: 270px;\n  height: 435px;\n  overflow: hidden;\n  border-radius: 9px;\n  background-color: #FAFAFA;\n  cursor: pointer;\n  transition: all 0.5s linear;\n}\n.gallery__item:hover {\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n  background-color: #fff;\n  transition: all 0.5s linear;\n}\n.gallery__item:hover button {\n  background: #FDDCC4;\n  border-color: #FDDCC4;\n  transition: all 0.5s linear;\n}\n.gallery__item > button {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.gallery .pet__photo {\n  width: 270px;\n  height: 270px;\n  margin-bottom: 30px;\n}\n.gallery .pet__name {\n  font-family: \"Georgia\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.136;\n  color: #545454;\n  letter-spacing: 0.06em;\n}\n\n@media (max-width: 1209px) {\n  .gallery > * + * {\n    margin-left: 40px;\n  }\n  .gallery > *:nth-child(3n+4) {\n    margin-left: 0;\n  }\n  .gallery > *:nth-child(n+4) {\n    margin-top: 30px;\n  }\n}\n@media (max-width: 1050px) {\n  .friends__container {\n    padding: 80px 94px 76px;\n  }\n  .friends__container h1 {\n    margin-bottom: 30px;\n  }\n  .gallery {\n    height: 1365px;\n  }\n  .gallery > * {\n    margin-left: 0;\n    margin-top: 0;\n  }\n  .gallery > *:nth-child(2n) {\n    margin-left: 40px;\n  }\n  .gallery > *:nth-child(n+3) {\n    margin-top: 40px;\n  }\n}\n@media (max-width: 790px) {\n  .gallery > * + * {\n    margin-left: auto;\n  }\n  .gallery > * {\n    margin-left: 0;\n    margin-top: 0;\n  }\n  .gallery > *:nth-child(2n) {\n    margin-left: auto;\n  }\n  .gallery > *:nth-child(n+3) {\n    margin-top: 30px;\n  }\n}\n@media (max-width: 767px) {\n  .friends__container {\n    padding: 42px 10px;\n  }\n  .friends__container h1 {\n    width: 100%;\n    margin-bottom: 42px;\n    padding: 0 10px;\n    font-size: 1.5625rem;\n    text-align: center;\n  }\n  .gallery {\n    justify-content: center;\n  }\n  .gallery > * {\n    margin-left: 50%;\n    margin-right: 50%;\n    margin-top: 0;\n  }\n  .gallery > *:nth-child(2n) {\n    margin-left: 50%;\n    margin-right: 50%;\n  }\n  .gallery > *:nth-child(n+2) {\n    margin-top: 30px;\n  }\n  .gallery > *:nth-child(n+4) {\n    display: none;\n  }\n}\n@media (max-width: 376px) {\n  .gallery {\n    justify-content: center;\n  }\n  .gallery > * {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n  }\n  .gallery > *:nth-child(n+2) {\n    margin-top: 30px;\n  }\n  .gallery > *:nth-child(n+4) {\n    display: none;\n  }\n}","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }","@font-face {\n    font-family: \"Georgia\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n    /* Браузер сначала попробует найти шрифт локально */\n    src: local(\"Georgia\"),\n         /* Если не получилось, загрузит woff2 */\n    url(\"./assets/fonts/georgia.woff2\") format(\"woff2\"),\n         /* Если браузер не поддерживает woff2, загрузит woff */\n    url(\"./assets/fonts/georgia.woff\") format(\"woff\"),\n    url(\"./assets/fonts/georgia.ttf\") format(\"ttf\");\n}\n\n@font-face {\n    font-family: \"Georgia\", sans-serif;\n    font-weight: 700;\n    font-style: normal;\n    /* Браузер сначала попробует найти шрифт локально */\n    src: local(\"Georgia\"),\n         /* Если не получилось, загрузит woff2 */\n    url(\"./assets/fonts/georgiab.woff2\") format(\"woff2\"),\n         /* Если браузер не поддерживает woff2, загрузит woff */\n    url(\"./assets/fonts/georgiab.woff\") format(\"woff\"),\n    url(\"./assets/fonts/georgiab.ttf\") format(\"ttf\");\n}\n\n@font-face {\n    font-family: \"Georgia\", sans-serif;\n    font-weight: 400;\n    font-style: italic;\n    /* Браузер сначала попробует найти шрифт локально */\n    src: local(\"Georgia\"),\n         /* Если не получилось, загрузит woff2 */\n    url(\"./assets/fonts/georgiai.woff2\") format(\"woff2\"),\n         /* Если браузер не поддерживает woff2, загрузит woff */\n    url(\"./assets/fonts/georgiai.woff\") format(\"woff\"),\n    url(\"./assets/fonts/georgiai.ttf\") format(\"ttf\");\n}\n\n@font-face {\n    font-family: \"Arial\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n    /* Браузер сначала попробует найти шрифт локально */\n    src: local(\"Arial\"),\n         /* Если не получилось, загрузит woff2 */\n    url(\"./assets/fonts/arial.woff2\") format(\"woff2\"),\n         /* Если браузер не поддерживает woff2, загрузит woff */\n    url(\"./assets/fonts/arial.woff\") format(\"woff\"),\n    url(\"./assets/fonts/arial.ttf\") format(\"ttf\");\n}\n\n@font-face {\n    font-family: \"Arial\", sans-serif;\n    font-weight: 400;\n    font-style: italic;\n    /* Браузер сначала попробует найти шрифт локально */\n    src: local(\"Arial\"),\n         /* Если не получилось, загрузит woff2 */\n    url(\"./assets/fonts/ariali.woff2\") format(\"woff2\"),\n         /* Если браузер не поддерживает woff2, загрузит woff */\n    url(\"./assets/fonts/ariali.woff\") format(\"woff\"),\n    url(\"./assets/fonts/ariali.ttf\") format(\"ttf\");\n}\n\n@font-face {\n     font-family: 'icomoon';\n     src:  url('./assets/fonts/icomoon.eot?gjaarj');\n     src:  url('./assets/fonts/icomoon.eot?gjaarj#iefix') format('embedded-opentype'),\n       url('./assets/fonts/icomoon.ttf?gjaarj') format('truetype'),\n       url('./assets/fonts/icomoon.woff?gjaarj') format('woff'),\n       url('./assets/fonts/icomoon.svg?gjaarj#icomoon') format('svg');\n     font-weight: normal;\n     font-style: normal;\n     font-display: block;\n   }\n   \n   [class^=\"icon-\"], [class*=\" icon-\"] {\n     /* use !important to prevent issues with browser extensions that change fonts */\n     font-family: 'icomoon' !important;\n     speak: never;\n     font-style: normal;\n     font-weight: normal;\n     font-variant: normal;\n     text-transform: none;\n     line-height: 1;\n   \n     /* Better Font Rendering =========== */\n     -webkit-font-smoothing: antialiased;\n     -moz-osx-font-smoothing: grayscale;\n   }\n   \n   .icon-credit:before {\n     content: \"\\e900\";\n     margin-right:15px;\n   }\n   .icon-email:before {\n     content: \"\\e901\";\n     margin-right:20px;\n   }\n   .icon-phone:before {\n     content: \"\\e902\";\n     margin-right:20px;\n   }\n   .icon-pin:before {\n     content: \"\\e903\";\n     margin-right:20px;\n   }\n   \n\n","/* Убираем внешние отступы */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}","%h2-style {\n    @include font(\n        $font-family: 'Georgia',\n        $font-size: calc(35/16) * 1rem,\n        $line-height: 1.3,\n        $color: $color-dark,\n        $letter-spacing: 0.06em)\n}","@mixin flexbox(\n    $display: flex,\n    $direction: row,\n    $placeContent: null,\n    $placeItems: null,\n    $wrap: nowrap,\n    $shrink: 0,\n    $grow: 0,\n    $alignContent: null,\n    $justifyContent: null,\n    $alignItems: null,\n    $justifyItems: null) {\n\n    display: $display;\n    flex-direction: $direction;\n\n    @if $placeContent == null {\n    @if $alignContent   { align-content: $alignContent; }\n    @if $justifyContent { justify-content: $justifyContent; }\n    } @else {\n    place-content: $placeContent;\n    }\n\n    @if $placeItems == null {\n    @if $alignItems   { align-items: $alignItems; }\n    @if $justifyItems { justify-items: $justifyItems; }\n    } @else {\n    place-items: $placeItems;\n    }\n\n    flex-wrap: $wrap;\n    flex-shrink: $shrink;\n    flex-grow: $grow;\n}\n\n@mixin font(\n    $font-family: 'Arial',\n    $font-style: normal,\n    $font-weight: 400,\n    $font-size: calc(15/16) * 1rem,\n    $line-height: 1.6,\n    $color: $color-secondary,\n    $letter-spacing: normal) {\n        font-family: $font-family;\n        font-style: $font-style;\n        font-weight: $font-weight;\n        font-size: $font-size;\n        line-height: $line-height;\n        color: $color;\n        letter-spacing: $letter-spacing;\n    }\n\n@mixin media-laptop {\n    @media (max-width: $content-width) {@content;}\n}\n@mixin media-tablet {\n    @media (max-width: $tablet-width) {@content;}\n}\n@mixin media-mobile-big {\n    @media (max-width: $mobile-big-width) {@content;}\n}\n@mixin media-mobile {\n    @media (max-width: $mobile-small-width) {@content;}\n}\n@mixin burger-active {\n    @media (max-width: $burger-active) {@content;}\n}","$color-primary: #F1CDB3;\n$color-primary-light: #FDDCC4;\n$color-secondary: #4C4C4C;\n$color-tertiary: #fff;\n$color-text: #292929;\n$color-bg: #000;\n\n$link-color: #CDCDCD;\n$link-color-active:  #FAFAFA;\n\n$color-dark: #545454;\n$color-dark-dark: #292929;\n$color-light: #F6F6F6;\n$color-grey: #B2B2B2;\n$color-overlay: rgba(41, 41, 41, 0.6);\n\n$content-width: 1280px;\n$tablet-width: 768px;\n$burger-active: 767px;\n$mobile-big-width: 376px;\n$mobile-small-width: 320px;\n\n$header-padding-top: 30px;\n$header-padding-left: 40px;\n$header-height: 878px;\n$header-bg: url(\"./assets/img/background/noise_transparent.png\") repeat,\n    radial-gradient(100% 215.42% at 0% 0%, #5B483A 0%, #262425 100%),\n    #211F20;\n$header-img: url(\"./assets/img/background/start-screen-puppy.png\");\n\n$footer-height: 350px;\n$footer-bg: url(\"./assets/img/background/noise_transparent.png\"),\nradial-gradient(110.67% 538.64% at 5.73% 50%, #513D2F 0%, #1A1A1C 100%), #211F20;\n$footer-img: url(\"./assets/img/footer-puppy.png\");\n",".overlay {\n    position:fixed;\n    top:0;\n    left:0;\n    \n    width:100%;\n    height:100%;\n\n    @include flexbox(\n    $justifyContent: center,\n    $alignItems: center\n    );\n\n    background-color: $color-overlay;\n}\n\n.modal {\n    position:relative;\n\n    width: 900px;\n    height: 500px;\n\n    border-radius: 9px;\n    box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n    background-color: $link-color-active;\n\n\n    &__button {\n        position:absolute;\n        top:-52px;\n        right:-42px;\n\n        box-sizing: border-box;\n\n        @include flexbox(\n            $justifyContent: center,\n            $alignItems: center,\n        );\n\n        width: 52px;\n        height: 52px;\n\n        border-radius: 50%;\n        border: 2px solid $color-primary;\n        color: $color-dark-dark;\n        background-color: #7f7f7f;\n\n        cursor:pointer;\n\n        transition: all 0.5s linear;\n\n        &:hover {\n            background-color: $color-primary;\n            transition: all 0.5s linear;\n        }\n    }\n\n    &__wrapper {\n        @include flexbox();\n\n        overflow-y: auto;\n        overflow-x: hidden;\n    }\n\n    & img {\n        width:500px;\n        height: 500px;\n        object-fit: cover;\n\n        border-radius: 9px 0 0 9px;\n    }\n\n    &__info {\n        @include flexbox($direction: column);\n\n        width: calc(900px - 500px - 20px - 29px);\n\n        margin: 50px 20px 88px 29px;\n    }\n\n    &__title {\n        margin-bottom:10px;\n\n        @include font(\n            $font-family: 'Georgia',\n            $font-size: calc(35/16) * 1rem,\n            $line-height: 1.3,\n            $color: $color-bg,\n            $letter-spacing: 0.06em\n        );\n    }\n\n    &__subtitle {\n        margin-bottom:40px;\n\n        @include font(\n            $font-family: 'Georgia',\n            $font-size: calc(20/16) * 1rem,\n            $line-height: 1.15,\n            $color: $color-bg,\n            $letter-spacing: 0.06em\n        );\n    }\n\n    &__text {\n        margin-bottom:40px;\n\n        @include font(\n            $font-family: 'Georgia',\n            $font-size: calc(15/16) * 1rem,\n            $line-height: 1.1,\n            $color: $color-bg,\n            $letter-spacing: 0.06em\n        );\n    }\n\n    &__list {\n        @include flexbox($direction: column);\n\n        margin-left:0;\n        padding:0;\n        list-style: none;\n\n        & > * + * {\n            margin-top: 11px;\n        }\n    }\n\n    &__item {\n        position:relative;\n\n        margin-left:14px;\n\n        @include font(\n            $font-family: 'Georgia',\n            $font-size: calc(15/16) * 1rem,\n            $line-height: 1.1,\n            $color: $color-bg,\n            $letter-spacing: 0.06em\n        );\n\n        &:before {\n            position:absolute;\n            top:-3px;\n            left:-14px;\n\n            width:4px;\n            height:4px;\n\n            content: url(\"./assets/svg/dot.svg\");\n            color: $color-primary;\n        }\n\n        & > span {\n                font-weight: 700;\n        }\n    }\n}\n\n@media (max-width:1279px) {    \n    .modal {\n    \n        width: 630px;\n        height: 350px;\n    \n        & img {\n            width:350px;\n            height: 350px;\n        }\n    \n        &__info {    \n            width: calc(630px - 350px - 9px - 11px);\n    \n            margin: 10px 9px 37px 11px;\n        }\n    \n        &__subtitle {\n            margin-bottom:20px;\n        }\n    \n        &__text {\n            margin-bottom:20px;\n    \n            font-size: calc(13/16) * 1rem,\n        }\n    \n        &__list {\n            & > * + * {\n                margin-top: 5px;\n            }\n        }\n    }\n}\n\n@media (max-width:730px) {\n    .modal {\n        width: 240px;\n        min-height: 341px;\n        height:auto;\n    \n        & img {\n           display: none;\n        }\n        \n        &__button {\n            right:-30px;\n        }\n    \n        &__info {    \n            width: calc(240px - 10px - 10px);\n    \n            margin: 10px 10px;\n        }\n    \n        &__title {\n            margin-bottom:10px;\n        }\n\n        &__title, &__subtitle {\n            text-align:center;\n        }\n    \n        &__text {\n            margin-bottom:24px;\n            text-align: justify;\n        }\n    }\n}",".burger {\n    display:none;\n    \n}\n\n@include burger-active {\n    .burger {\n        position:sticky;\n        top:48px;\n        right:20px;\n\n        @include flexbox(\n            $alignItems: center,\n            );\n\n        width:30px;\n        height:22px;\n\n        z-index: 20;\n\n        cursor:pointer;\n\n    &__line {\n        position:relative;\n\n        width:100%;\n        height: 2px;\n\n        background-color: $color-primary;\n\n        transition: all 0.5s linear;\n\n        .header-light & {\n            background-color: $color-bg;\n        } \n\n        &:before,&:after {\n            position: absolute;\n            content:\"\";\n            left:0;\n\n            width:100%;\n            height: 2px;\n    \n            background-color: $color-primary;\n\n            .header-light & {\n                background-color: $color-bg;\n            } \n        }\n\n        &:before {\n            top:10px;\n        }\n        &:after {\n            top:20px;\n        }\n        }\n\n        &-opened {\n\n            & > .burger__line {        \n                transform: rotate(90deg);\n                transform-origin: 20px 5px;\n\n                transition: all 0.5s linear;\n                }\n        }\n    }\n}\n","// Main page header\n\nheader {\n    background: $header-bg;\n}\n.header {\n\n    @include flexbox($direction: column);\n\n    height: $header-height;\n    \n    padding-top: $header-padding-top;\n    padding-left: $header-padding-left;\n    padding-right: $header-padding-left;\n\n    background-image: $header-img;\n    background-size: 698px 728px;\n    background-position: right 40px bottom 0;\n    background-repeat: no-repeat;\n}\n\n.top {\n    @include flexbox($justifyContent: space-between);\n}\n\n// Pets page header\n\n.header-light {\n    background: 0;\n    background-color: $color-tertiary;\n\n    &__container {\n\n        padding-left: $header-padding-left;\n        padding-right: $header-padding-left;\n    }\n\n    & .top {\n        height:120px;\n    }\n\n}\n\n@media (max-width:1260px) {\n    .header {\n        height: 1135px;\n        \n        padding: 30px 30px 0;\n\n        background-size: 569px 593px;\n        background-position: right 30px bottom 0;\n        background-repeat: no-repeat;\n    }\n    \n    // Pets page header\n    \n    .header-light {    \n        &__container {    \n            padding: 0 30px;\n        }    \n    }\n}\n\n@media (max-width:767px) {\n    .header {\n        height: 793px;\n        \n        padding: 30px 20px 0;\n\n        background-size: 260px 272px;\n        background-position: right 10px bottom 0;\n        background-repeat: no-repeat;\n    }\n    \n    // Pets page header\n    \n    .header-light {\n        &__container {    \n            padding: 0 20px;\n        }\n    \n    }\n}",".button {\n    width: fit-content;\n\n    padding: 13px 43px;\n\n    border: 2px solid $color-primary;\n    border-radius: 100px;\n    white-space: nowrap;\n\n    @include font($font-family: 'Georgia',\n    $font-size: calc(17/16) * 1rem,\n    $line-height: 1.3,\n    $color: $color-text,\n    $letter-spacing:0.06em);\n\n    cursor:pointer;\n    transition: all 0.5s linear;\n\n    &:hover {\n        background: $color-primary-light;\n        border-color: $color-primary-light;\n        transition: all 0.5s linear;\n    }\n}\n.button-primary {\n    background: $color-primary;\n}\n\n.button-secondary {\n    background: $color-tertiary;\n}\n\n.button-link {\n    width: fit-content;\n\n    padding: 13px 43px;\n\n    border: 2px solid $color-primary;\n    border-radius: 100px;\n    white-space: nowrap;\n\n    background: $color-primary;\n\n    text-decoration: none;\n\n    @include font($font-family: 'Georgia',\n    $font-size: calc(17/16) * 1rem,\n    $line-height: 1.3,\n    $color: $color-dark-dark,\n    $letter-spacing:0.06em);\n\n    cursor:pointer;\n    transition: all 0.5s linear;\n\n    &:hover {\n        background: $color-primary-light;\n        border-color: $color-primary-light;\n        transition: all 0.5s linear;\n    }\n}",".logo {\n    text-align: right;\n\n    &:hover a {\n        color: $color-dark-dark\n    }\n\n    & a {\n        @include flexbox($direction: column);\n        \n        text-decoration: none;\n\n        & span {\n            transition: all 0.5s linear;\n        }\n\n        &:hover span {\n            color: $color-tertiary;\n\n            transition: all 0.5s linear;\n        }\n    }\n\n\t\t&__title {\n            margin-bottom:10px;\n\n            @include font(\n                $font-family: 'Georgia',\n                $font-size: calc(32/16) * 1rem,\n                $line-height: 1.1,\n                $color: $color-primary,\n                $letter-spacing:0.06em);\n\t\t}\n\n\t\t&__subtitle {\n            @include font(\n                $font-size: calc(13/16) * 1rem,\n                $line-height: 1.15,\n                $color: $color-tertiary,\n                $letter-spacing:0.1em);\n\t\t}\n}\n\n.header-light {\n    & .logo__title {\n        color: $color-dark;\n    }\n    & .logo__subtitle {\n        color: $color-dark-dark;\n    }\n\n    & .logo a span {\n        transition: all 0.5s linear;\n    }\n\n    & .logo a:hover span {\n        color: $color-dark-dark;\n\n        transition: all 0.5s linear;\n    }\n} ",".top-nav {\n    margin-top: 16px;\n\n\t\t&__list {\n            @include flexbox($justifyContent: flex-end);\n            margin:0;\n            list-style: none;\n\t\t}\n\n        &__list * + * {\n            margin-left: 35px;\n        }\n\n\t\t&__item {\n            padding:0;\n            & a{\n            @include font(\n                $color: $link-color);\n                text-decoration: none;\n\n            transition: all 0.5s linear;\n            }\n            & a:hover {\n                @include font(\n                    $color: $link-color-active);\n\n                transition: all 0.5s linear;\n                }\n            &-active > a {\n                padding-bottom: 4px;\n                border-bottom: 3px solid #F1CDB3;\n            \n                @include font(\n                    $color: $link-color-active);\n\n                pointer-events: none;\n            }\n\t\t}\n}\n\n.header-light {\n\n    & .logo, & .top-nav__list{\n        margin-top:30px;\n    }\n\n    & .top-nav__item a {\n        color:$color-dark;\n\n        &:hover {\n            color: $color-dark-dark;\n        }\n\n    }\n\n    & .top-nav__item-active a {\n        color: $color-dark;\n    }\n}\n\n@include burger-active {\n    .top-nav {\n        display:block;\n        position:fixed;\n        top:0;\n        right:0;\n    \n        margin-top:0;\n\n        width:320px;\n        height: 100vh;\n    \n        background-color: $color-dark-dark;\n\n        transform: translateX(320px);\n\n        transition: transform 0.5s linear;\n\n        .header-light & {\n            background-color: $color-tertiary;\n        }\n\n        &__list {\n            position:absolute;\n            top: 248px;\n            right:0;\n    \n            width:320px;\n\n            padding:0;\n    \n            z-index:12;\n    \n            @include flexbox($direction:column,\n            $justifyContent: center,\n            $alignItems:center);\n        }\n    \n        &__list * + * {\n            margin-left: 0;\n            margin-top: 40px;\n        }\n    \n        &__item {\n    \n            & a, & a:hover{\n            @include font(\n                $font-size: calc(32/16) * 1rem,\n                $color: $link-color);\n            }\n\n            &-active > a {\n                @include font(\n                    $font-size: calc(32/16) * 1rem,\n                    $color: $link-color-active);\n    \n                padding-bottom: 6px;\n    \n            }\n        }\n}\n\n.top-nav-opened {\n\n        transform: translateX(0);\n    \n        transition: transform 0.5s linear;\n    \n        z-index: 11;\n    \n        // transition: all 0.5s linear;\n        \n    \n}\n}\n\n// @include burger-active {\n//     .top-nav {\n//         display:none;\n// }\n// }\n\n",".slider {\n    width:100%;\n\n    @include flexbox($justifyContent: space-between);\n\n    &__wrapper {\n        width: 1096px;\n        height:435px;\n        overflow: hidden;\n    }\n    &__prev {\n        position:relative;\n\n        width: 52px;\n        height: 52px;\n\n        align-self:center;\n\n        border: 2px solid $color-primary;\n        border-radius: 100px;\n\n        cursor:pointer;\n\n        transition: all 0.5s linear;\n\n        &:after {\n            position: absolute;\n            content:url(\"./assets/img/arrow.png\");\n            top:13px;\n            left:calc(50% - 7px);\n            width:14px;\n            height:6px;\n        }\n\n        &:hover {\n            background-color: $color-primary-light;\n            border-color: $color-primary-light;\n\n            transition: all 0.5s linear;\n        }\n    }\n\n    &__container {\n        position: relative;\n        left: calc((3 * 270px + 3 * 90px - 53px) * -1);\n\n        display:inline-flex;\n\n        height:435px;\n\n        // @include flexbox(\n        //     // $justifyContent: space-between\n        //     );\n        & > * + * {\n            margin-left: 90px;\n        }\n    }\n\n    &__item {\n        width:270px;\n        height: 435px;\n\n        @include flexbox(\n            $direction: column,\n            $alignItems: center);\n\n        border-radius: 9px;\n        background-color: $link-color-active;\n\n        cursor:pointer;\n\n        transition: all 0.5s linear;\n        \n        &:hover {\n            box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n            background-color: $color-tertiary;\n            transition: all 0.5s linear;\n        }\n\n        &:hover button {\n            background: $color-primary-light;\n            border-color: $color-primary-light;\n            transition: all 0.5s linear;\n        }\n\n        & > button {\n            margin-top: 30px;\n            margin-bottom: 30px;\n        }\n    }\n\n    &__next {\n        position:relative;\n\n        width: 52px;\n        height: 52px;\n\n        align-self:center;\n        \n        border: 2px solid $color-primary;\n        border-radius: 100px;\n\n        cursor:pointer;\n\n        transition: all 0.5s linear;\n\n        &:after {\n            position: absolute;\n            content:url(\"./assets/img/arrow.png\");\n            transform:rotate(180deg);\n            top:34px;\n            left:calc(50% - 7px);\n            width:14px;\n            height:6px;\n        }\n\n        &:hover {\n            background-color: $color-primary-light;\n            border-color: $color-primary-light;\n\n            transition: all 0.5s linear;\n        }\n    }\n}\n.pet {\n\n    &__photo {\n        margin-bottom:30px;\n\n        width:270px;\n        height:270px;\n        object-fit: cover;\n        \n        border-radius: 9px 9px 0 0;\n    }\n\n    &__name {\n        @include font(\n            $font-family: 'Georgia',\n            $font-size: calc(20/16) * 1rem,\n            $line-height: 1.136,\n            $color: $color-dark,\n            $letter-spacing: 0.06em);\n    }\n}\n\n@keyframes move-right {\n    from {left: calc((3 * 270px + 3 * 90px - 53px) * -1);}\n    to {left: calc((3 * 270px + 3 * 90px - 53px) * -1 - 3 * 270px - 3* 90px);}\n}\n\n.transition-right {\n    animation-name: move-right;\n    animation-duration: 3s;\n}\n\n@keyframes move-left {\n    from {left: calc((3 * 270px + 3 * 90px - 53px) * -1);}\n    to {left: 53px;}\n}\n\n.transition-left {\n    animation-name: move-left;\n    animation-duration: 3s;\n}\n\n@media (max-width:1279px) {\n    .slider {\n        // @include flexbox($justifyContent: center);\n        &__wrapper {\n            width: 604px;   \n        } \n        &__container {\n            left: calc((2 * 270px + 2 * 40px - 12px) * -1);\n\n            & > * + * {\n                margin-left: 40px;\n            }\n        }\n    }\n    \n    @keyframes move-right {\n        from {left: calc((2 * 270px + 2 * 40px - 12px) * -1);}\n        to {left: calc((2 * 270px + 2 * 40px - 12px) * -1 - 2 * 270px - 2* 40px);}\n    }\n    \n    @keyframes move-left {\n        from {left: calc((2 * 270px + 2 * 40px - 12px) * -1);}\n        to {left: 12px;}\n    }\n}\n\n@media (max-width:767px) {\n    .slider {\n        flex-wrap: wrap;\n\n        width:100%;  \n        \n        &__wrapper {\n            width:100%;   \n        } \n        \n    \n        &__prev {\n            order:1;\n\n            margin-top:20px;\n            margin-left:auto;\n            margin-right:80px;\n        }\n        &__next {   \n   \n            order:2;\n\n            margin-top:20px;\n            margin-right:auto;\n        }\n    \n        &__container {\n            left: calc((270px + 400px - (100% - 270px) / 2) * -1);\n\n            flex: 1 1 100%;\n            order:0;\n\n            & > * + * {\n                margin-left: 400px;\n            }\n        } \n        \n    }\n\n    @keyframes move-right {\n        from {left: calc((270px + 400px - (100% - 270px) / 2) * -1);}\n        to {left: calc((270px + 400px - (100% - 270px) / 2) * -1 - 270px - 400px);}\n    }\n    \n    @keyframes move-left {\n        from {left: calc((270px + 400px - (100% - 270px) / 2) * -1);}\n        to {left: calc((100% - 270px) / 2);}\n    }\n}\n\n@media (max-width:450px) {\n    .slider {\n        &__container {\n            left: calc((270px + 100px - (100% - 270px) / 2) * -1);\n\n            flex: 1 1 100%;\n            order:0;\n\n            & > * + * {\n                margin-left: 100px;\n            }\n        } \n        \n    }\n\n    @keyframes move-right {\n        from {left: calc((270px + 100px - (100% - 270px) / 2) * -1);}\n        to {left: calc((270px + 100px - (100% - 270px) / 2) * -1 - 270px - 100px);}\n    }\n    \n    @keyframes move-left {\n        from {left: calc((270px + 100px - (100% - 270px) / 2) * -1);}\n        to {left: calc((100% - 270px) / 2);}\n    }\n}",".footer {\n    background: $footer-bg;\n    \n\t\t&__container {\n            @include flexbox();\n        \n            height: $footer-height;\n            \n            padding: 0 40px 0;\n\n            overflow: hidden;\n\n            background-image: $footer-img;\n            background-size: 300px 310px;\n            background-position: bottom 0 right 40px;\n            background-repeat: no-repeat;\n\n            & > * {\n                margin-top: 56px;\n            }\n\t\t}\n\n\t\t&__first {\n            @include flexbox($direction: column);\n\n            max-width: 280px;\n\t\t}\n\n\t\t&__title > h2 {\n            @extend %h2-style;\n            color: $color-tertiary;\n\n            margin-bottom: 40px;\n\t\t}\n\n\t\t&__list {\n            margin:0;\n            padding:0;\n\n            list-style: none;\n\n            & > * + * {\n                margin-top:40px;\n            }\n\t\t}\n\n\t\t&__item {\n\n            & a {\n                @include flexbox($alignItems: center);\n                \n                text-decoration: none;\n\n                &:hover span, &:hover i {\n                    color: $color-primary-light;\n                    transition: all 0.5s linear;\n                }\n            }\n\n            & a span {\n                @include font($font-family: 'Georgia',\n                $font-size: calc(20/16) * 1rem,\n                $line-height: 1.15,\n                $color: $color-primary,\n                $letter-spacing: 0.06em);\n            }\n\t\t}\n\n\t\t&__second {\n            @include flexbox($direction: column);\n\n            max-width: 302px;\n\n            margin-left: 158px;\n\n            & h2 { \n                margin-bottom: 32px;\n            }\n\n            & .footer__list > .footer__item:nth-child(2) {\n                margin-top:32px;\n            }\n\t\t}\n}\n\n@media (max-width:1160px) {\n    .footer {        \n            &__container {    \n                @include flexbox($justifyContent:center);\n            \n                height: 639px;\n                \n                padding: 0 30px 0;\n    \n                overflow: hidden;\n\n                background-position: bottom 0 right 234px;\n                background-repeat: no-repeat;\n    \n                & > * {\n                    margin-top: 30px;\n                }\n            }\n    \n            &__second {\n                margin-left: 60px;\n    \n                & h2 { \n                    margin-bottom: 32px;\n                }\n    \n                & .footer__list > .footer__item:nth-child(2) {\n                    margin-top:32px;\n                }\n            }\n    }\n}\n\n@media (max-width:767px) {\n    .footer {        \n            &__container {\n                @include flexbox($direction:column,\n                $justifyContent: flex-start,\n                $alignItems:center);\n            \n                height: 779px;\n                \n                padding: 30px 10px 0;\n    \n                background-size: 260px 269px;\n                background-position: bottom 0 right 50%;\n    \n                & > * {\n                    margin-top: 0;\n                }\n            }\n    \n            &__first {\n                @include flexbox($direction: column,\n                $alignItems:center);\n\n                margin-top: 0;\n                margin-left:10px;\n            }\n    \n            &__title > h2 {\n                width:280px;\n\n                @include font($font-family: 'Georgia',\n                $font-size: calc(25/16) * 1rem,\n                $line-height: 1.3,\n                $color: $color-tertiary,\n                $letter-spacing: 0.06em);\n                text-align: center;\n    \n                margin-bottom: 40px;\n            }\n    \n            &__list {\n                @include flexbox(\n                $direction: column,\n                $alignItems: center);\n            }\n    \n            &__second { \n                @include flexbox($direction: column,\n                $alignItems:center);\n\n                margin-top: 40px;    \n                margin-left: 0;\n    \n                & h2 {\n                    margin-bottom: 40px;\n                }\n    \n                & .footer__list > .footer__item:nth-child(2) {\n                    margin-top:40px;\n                    align-self:flex-start;\n                }\n            }\n    }\n}\n@include media-mobile {\n    .footer {        \n            &__container {\n                align-items:flex-start;\n    }\n}\n}\n",".gallery {\n\n    &__pagination {\n        @include flexbox($justifyContent: center);\n\n        margin-top:60px;\n\n        & * + * {\n            margin-left:20px;\n        }\n    }\n}\n\n.pagination {\n\n    &__state {\n\n        @include flexbox($justifyContent: center,\n        $alignItems: center);\n\n        width:50px;\n        height: 50px;\n\n        border: 2px solid;\n        border-radius: 50%;\n\n        @include font($font-family: 'Georgia',\n        $font-size: calc(20/16) * 1rem,\n        $line-height: 1.15,\n        $color: $link-color,\n        $letter-spacing: 0.06em);\n\n        cursor: pointer;\n\n    }\n}\n\n.state {\n    &-disable {\n        border-color: $link-color;\n        color: $link-color;\n        background-color: transparent;\n\n        pointer-events: none;\n    }\n\n    &-active {\n        border-color: $color-primary;\n        color: $color-dark-dark;\n        background-color: $color-primary;\n    }\n\n    &-available {\n        border-color: $color-primary;\n        color: $color-dark-dark;\n        background-color: transparent;\n\n        transition: all 0.5s linear;\n\n        &:hover {\n            background: $color-primary-light;\n            border-color: $color-primary-light;\n            transition: all 0.5s linear;\n        }\n    }\n}\n\n@include media-tablet {\n    .gallery {\n\n        &__pagination {    \n            margin-top:40px;\n        }\n    }\n}\n\n@include media-mobile-big {\n    .gallery {\n        &__pagination {\n            @include flexbox($justifyContent: center);\n    \n            margin-top:42px;\n    \n            & * + * {\n                margin-left:10px;\n            }\n        }\n    }        \n}","html {\n    scroll-behavior: smooth;\n    font-size: 1rem;\n}\n\nbody {\n    background: $color-tertiary;\n\n    @include font();\n\n    overflow-x: hidden;\n}\n\n.wrapper {\n    max-width: $content-width;\n    margin: 0 auto;\n}\n\n@include media-tablet {\n    .wrapper {\n    max-width: $tablet-width;\n    }\n}\n\n@include media-mobile {\n    .wrapper {\n    max-width: $mobile-small-width;\n    }\n}\n\n[class^=\"icon-\"] {\n    color: $color-primary;\n    font-size: calc(32/16) * 1rem;\n}\n\n.plug {\n    position:absolute;\n    top: 0;\n    left: 0;\n\n    width: 100vw;\n    height: 100vh;\n\n    background: $color-overlay;\n\n    cursor: pointer;\n\n    z-index: 9;\n}\n\n.fixed {\n    overflow-y:hidden;\n    position:fixed;\n}\n\n.hidden {\n    display: none;\n}\n\n@keyframes make-hidden {\n    from {opacity:1;visibility:visible;}\n    to {opacity:0;visibility:hidden;}\n}\n\n.make-hidden {\n    animation-name: make-hidden;\n    animation-duration: 0.5s;\n}\n\n@keyframes make-visible {\n    from {opacity:0;visibility:hidden;}\n    to {opacity:1;visibility:visible;}\n}\n\n.make-visible {\n    animation-name: make-visible;\n    animation-duration: 0.5s;\n}","//Not only\n\n.not-only > .wrapper {\n    position:relative;\n}\n\n.header-slogan {\n    position:absolute;\n\n    bottom:243px;\n    left:40px;\n\n    z-index:1;\n\n    @include flexbox($direction: column);\n\n\t\t&__title h1 {\n            width: 310px;\n\n            margin-bottom:42px;\n\n            @include font($font-family: 'Georgia',\n            $font-size: calc(44/16) * 1rem,\n            $line-height: 1.3,\n            $color: $color-tertiary)\n\t\t}\n\n\t\t&__text {\n            width: 460px;\n\n            margin-bottom:42px;\n\n            @include font($color: $link-color);\n\t\t}\n}\n\n@media (max-width:1260px) {\n    .header-slogan {\n        bottom:693px;\n        left:154px;\n\n        & .button-link {\n            align-self: center;\n        }\n    }\n}\n\n@media (max-width:767px) {\n    .header-slogan {\n        width:500px;\n\n        bottom:377px;\n        left:calc(50% - 250px);\n\n        padding-left:0;\n        padding-right:10px;\n\n        &__title h1 {\n            width: 200px;\n\n            margin-left: auto;\n            margin-right: auto;\n\n            text-align: center;\n\n            letter-spacing: 0.06em;\n            \n            font-size: calc(25/16) * 1rem;\n\n\t\t}\n\n\t\t&__text {\n            width: 100%;\n\n            text-align: center;\n\n            font-size: calc(15/16) * 1rem;\n\t\t}\n    }\n}\n\n@media (max-width:560px) {\n    .header-slogan {\n        width:300px;\n\n        bottom:377px;\n        left:calc(50% - 150px);\n\n        padding-left:0;\n        padding-right:10px;\n\n        &__title h1 {\n            width: 200px;\n\n            margin-left: auto;\n            margin-right: auto;\n\n            text-align: center;\n\n            letter-spacing: 0.06em;\n            \n            font-size: calc(25/16) * 1rem;\n\n\t\t}\n\n\t\t&__text {\n            width: 100%;\n\n            text-align: center;\n\n            font-size: calc(15/16) * 1rem;\n\t\t}\n    }\n}\n\n// About\n\n.about {\n    background-color: $color-tertiary;\n\n    &__container {\n        @include flexbox($direction: column,\n        );\n\n        padding-top: 94px;\n        padding-bottom: 114px;\n\n        background-image: url(\"./assets/img/about-pets.png\");\n        background-repeat: no-repeat;\n        background-size: 300px 408px;\n        background-position: left 215px top 80px;\n    }\n\n    &__title {\n        width: 370px;\n\n        margin-left:50%;\n        margin-bottom:25px;\n    }\n\n    &__title h2 {\n        @extend %h2-style;\n        text-align: left;\n    }\n\n    &__text {\n        width: 430px;\n\n        margin-left:50%;\n\n        text-align: left;\n    }\n\n    &__text p {\n        @include font();\n    }\n\n    &__text * + * {\n        margin-top:25px;\n    }\n}\n\n@media (max-width:1200px) {\n    .about {    \n        &__container {    \n            background-position: left 40px top 80px;\n        }\n\n        &__title {    \n            margin-left:45%;\n        }\n\n        &__text {    \n            margin-left:45%;\n        }\n    }    \n}\n\n@media (max-width:900px) {\n.about {\n\n    &__container {\n        padding-top: 80px;\n        padding-bottom: 588px;\n\n        background-repeat: no-repeat;\n        background-position: left 50% top 540px;\n    }\n\n    &__title {\n        margin-left:169px;\n    }\n\n    &__text {\n        margin-left:169px;\n    }\n}\n}\n\n@media (max-width:767px) {\n    .about {\n        &__title {\n            width: 250px;\n\n            margin-left:auto;\n            margin-right:auto;\n        }\n\n        &__title h2 {\n            @include font($font-family: 'Georgia',\n            $font-size: calc(25/16) * 1rem,\n            $line-height: 1.3,\n            $color: $color-dark,\n            $letter-spacing: 0.06em);\n            text-align: center;\n        }\n\n        &__text {\n\n            padding-left:25px;\n            padding-right:25px;\n\n            margin-left:auto;\n            margin-right:auto;\n\n            text-align: justify;\n        }\n    }\n}\n\n@media (max-width:480px) {\n    .about {\n        &__text {\n        width:auto;\n        }\n    }\n}\n\n@include media-mobile {\n    .about {\n\n        &__container {\n    \n            padding-top: 42px;\n            padding-bottom: 438px;\n\n            background-position: left 50% top 578px;\n            background-size: 260px 354px;\n        }\n    }\n}\n\n\n//Our friends\n\n.our-friends {\n    background-color: $color-light;\n\n    &__container {\n        @include flexbox(\n            $direction: column,\n            $alignItems: center);\n\n        padding: 80px 40px 100px;\n\n        \n\n        & h2 {\n            width:400px;\n\n            margin-bottom:60px;\n\n            @extend %h2-style;\n            text-align: center;\n        }\n\n        & > a {\n            margin-top:60px;\n        }\n    }\n}\n\n@media (max-width:820px) {\n    .our-friends {    \n        &__container {\n            padding: 80px 30px 100px;            \n        }\n    }\n}\n\n@media (max-width:767px) {\n    .our-friends {    \n        &__container {\n            padding: 42px 10px;           \n    \n            & h2 {\n                width:100%;\n    \n                margin-bottom:42px;\n\n                @include font($font-family: 'Georgia',\n                    $font-size: calc(25/16) * 1rem,\n                    $line-height: 1.3,\n                    $color: $color-dark,\n                    $letter-spacing: 0.06em);\n\n            }\n    \n            & > a {\n                margin-top:42px;\n            }\n        }\n    }\n    \n}\n\n// Help\n.help {\n    background-color: $color-tertiary;\n\n    &__container {\n        @include flexbox(\n            $direction: column,\n            $alignItems: center);\n\n        padding: 80px 127px 100px;\n\n        & h2 {\n            width: 310px;\n\n            margin-bottom:60px;\n\n            @include font(\n            $font-family: 'Georgia',\n            $font-size: calc(35/16) * 1rem,\n            $line-height: 1.3,\n            $color: $color-dark,\n            $letter-spacing: 0.06em);\n            text-align: center;\n        }\n    }\n\n    &__list {\n        @include flexbox($wrap: wrap,\n        $justifyContent: center);\n\n        margin:0;\n        padding:0;\n\n        list-style: none;\n    }\n\n    &__item {\n        flex: 1 1 20%;\n\n        @include flexbox(\n            $direction: column,\n            $alignItems: center);\n\n        &:nth-child(n+6) {\n            margin-top: 55px;\n        }\n\n        & > img {\n            width:60px;\n            height:60px;\n        }\n\n        & > p {\n            margin-top:30px;\n\n            @include font(\n            $font-family: 'Georgia',\n            $font-size: calc(20/16) * 1rem,\n            $line-height: 1.15,\n            $color: $color-dark,\n            $letter-spacing: 0.06em);\n\n            white-space: nowrap;\n        }\n    }\n}\n\n@include media-laptop {\n.help {\n    &__container {\n        padding: 80px 125px 100px;\n    }\n\n    &__list {\n        @include flexbox($wrap: wrap,\n        $justifyContent: flex-start);\n\n        & > * + * {\n            margin-left:120px;\n        }\n    }\n\n    &__item {\n        flex: 1 1 0%;\n\n        &:nth-child(1)  {\n            margin-right: auto;\n        }\n        &:nth-child(6)  {\n            margin-left: 84px;\n        }\n        &:nth-child(9)  {\n            margin-right: 84px;\n        }\n    }\n}\n}\n\n@media (max-width:1279px) {\n    .help {    \n        &__list {\n            @include flexbox($wrap: wrap,\n            $justifyContent: center);\n        }\n    \n        &__item {\n            flex: 1 1 25%;\n\n            &:nth-child(n) {\n                margin:0;\n            }\n    \n            &:nth-child(n+5) {\n                margin-top: 55px;\n            }\n        }\n    }\n}\n\n@media (max-width:1000px) {\n    .help {    \n        &__list {\n            @include flexbox($wrap: wrap,\n            $justifyContent: center);\n        }\n    \n        &__item {\n            flex: 1 1 33.333%;\n\n            &:nth-child(n) {\n                margin:0;\n            }\n    \n            &:nth-child(n+4) {\n                margin-top: 55px;\n            }\n        }\n    }\n}\n\n@include media-tablet {\n    .help {    \n        &__container {\n            padding: 80px 40px 100px;\n        }\n\n        &__list {\n            @include flexbox($wrap: wrap,\n            $justifyContent: space-between);\n        }\n    \n        &__item {\n            flex: 1 1 33.333%;\n\n            &:nth-child(n) {\n                margin:0;\n            }\n    \n            &:nth-child(n+4) {\n                margin-top: 55px;\n            }\n        }\n    }\n}\n\n@media (max-width:600px) {\n    .help {    \n        &__container {\n            padding: 42px 15px 42px;\n        }\n    \n        &__list {    \n            & > * + * {\n                margin:0;\n            }\n        }\n    \n        &__item {\n            flex: 0 1 calc(50% - 15px);\n\n            &:nth-child(2n)  {\n                margin-left: 30px;\n            }\n\n            &:nth-child(n+4) {\n                margin-top: 0;\n            }\n\n            &:nth-child(n+3) {\n                margin-top: 30px;\n            }\n\n            & > img {\n                width:50px;\n                height:50px;\n            }\n\n            & > p {\n                margin-top:20px;\n    \n                @include font(\n                $font-family: 'Georgia',\n                $font-size: calc(15/16) * 1rem,\n                $line-height: 1.1,\n                $color: $color-dark,\n                $letter-spacing: 0.06em)\n            }\n        }\n    }\n}\n\n@include media-mobile {\n    .help {    \n        &__container {\n            & h2 {\n                width: 230px;\n    \n                margin-bottom:42px;\n    \n                @include font($font-family: 'Georgia',\n                $font-size: calc(25/16) * 1rem,\n                $line-height: 1.3,\n                $color: $color-dark,\n                $letter-spacing: 0.06em);\n            }\n        }\n    }\n}\n\n// In addiction\n.in-addition {\n    background-color: $color-light;\n\n    &__background {\n        background-image: url(\"./assets/img/donation-dog.png\");\n        background-position: top 91px left 183px;\n        background-size: 505px 261px;\n        background-repeat: no-repeat;\n    }\n\n    &__container {\n        width: 380px;\n\n        @include flexbox(\n            $direction: column);\n\n        padding: 80px 182px 100px 183px;\n\n        margin-left:auto;\n\n        & h2 {\n            width: 300px;\n\n            margin-bottom:20px;\n\n            @extend %h2-style;\n        }\n    }\n\n    &__subtitle {\n        margin-bottom:20px;\n\n        @include font($font-family: 'Georgia',\n        $line-height: 1.1,\n        $color: $color-dark,\n        $letter-spacing: 0.06em);\n    }\n\n    &__number {\n        @include flexbox($alignItems: flex-end);\n\n        width:fit-content;\n\n        margin-bottom:20px;\n        padding: 10px 15px 10px 0;\n\n        background-color: $color-primary;\n        border-radius: 9px;\n\n        @include font($font-family: 'Georgia',\n        $font-size: calc(20/16) * 1rem,\n        $line-height: 1.15,\n        $color: $color-dark,\n        $letter-spacing: 0.06em);\n\n        text-decoration: none;\n\n        transition: all 0.5s linear;\n\n        &:hover {\n            background: $color-primary-light;\n            border-color: $color-primary-light;\n            transition: all 0.5s linear;\n        }\n\n        & i {\n            color: $color-dark;\n            font-size:calc(23/16) * 1rem;\n            padding-left: 15px;\n        }\n\n    }\n\n    &__comment {\n\n        @include font(\n        $font-style: italic,\n        $font-size: calc(12/16) * 1rem,\n        $line-height: 1.5,\n        $color: $color-grey);\n    }\n}\n\n@media (max-width:1275px){\n    .in-addition {    \n        &__background {\n            background-position: top 422px left 50%;\n        }\n    \n        &__container {\n            padding: 80px 194px 421px 194px;\n            margin-right:auto;\n        }\n    }\n}\n\n@include media-tablet{\n    .in-addition {    \n        &__background {\n            background-position: top 422px left 131px;\n        }\n    \n        &__container {\n            padding: 80px 194px 421px 194px;\n        }\n    }\n}\n\n@media (max-width:767px) {\n    .in-addition {\n        &__background {\n        background-position: top 365px left 50%;\n        background-size: 260px 135px;\n    }\n\n    &__container {\n        width: auto;\n\n        @include flexbox(\n            $direction: column,\n            $alignItems:center);\n\n        padding: 42px 20px 219px;\n\n        & h2 {\n            width: 220px;\n\n            @include font($font-family: 'Georgia',\n            $font-size: calc(25/16) * 1rem,\n            $line-height: 1.3,\n            $color: $color-dark,\n            $letter-spacing: 0.06em);\n            text-align: center;\n        }\n    }\n\n    &__subtitle {\n        @include font($font-family: 'Georgia',\n        $line-height: 1.6,\n        $color: $color-dark);\n        text-align: center;\n    }\n\n    &__number {\n        align-items:center;\n\n        padding: 10px 13px 10px 0;\n\n        @include font($font-family: 'Georgia',\n        $font-size: calc(15/16) * 1rem,\n        $line-height: 1.1,\n        $color: $color-dark,\n        $letter-spacing: 0.06em);\n    }\n\n    &__comment {\n        text-align: justify;\n    }\n}\n}\n\n\n\n\n","//Our friends\n\n.friends {\n    background-color: $color-light;\n\n    &__container {\n        @include flexbox(\n            $direction: column,\n            $alignItems: center);\n\n        padding: 80px 40px 100px;        \n\n        & h1 {\n            width:400px;\n\n            margin-bottom:60px;\n\n            @include font($font-family: 'Georgia',\n            $font-size: calc(35/16) * 1rem,\n            $line-height: 1.3,\n            $letter-spacing: 0.06em,\n            $color: $color-dark);\n\n            text-align: center;\n        }\n\n        & > a {\n            margin-top:60px;\n        }\n    }\n}\n\n.gallery {\n        @include flexbox($justifyContent: space-between,\n        $alignContent:flex-start,\n        $wrap: wrap);\n\n        width: 100%;\n        height: 900px;\n\n        opacity:1;\n        visibility: visible;\n        transition: all 2s linear;\n\n        & > * + * {\n            margin-left: 40px;\n        }\n\n        & > * {\n            margin-left: 0;\n        }\n\n        & > *:nth-child(n+5) {\n            margin-top: 30px;\n        }\n\n    &__item {\n        @include flexbox(\n            $direction: column,\n            $alignItems: center);\n\n        width: 270px;\n        height: 435px;\n\n        overflow: hidden;\n\n        border-radius: 9px;\n        background-color: $link-color-active;\n\n        cursor:pointer;\n\n        transition: all 0.5s linear;\n\n        &:hover {\n            box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n            background-color: $color-tertiary;\n            transition: all 0.5s linear;\n        }\n\n        &:hover button {\n            background: $color-primary-light;\n            border-color: $color-primary-light;\n            transition: all 0.5s linear;\n        }\n\n        & > button {\n            margin-top: 30px;\n            margin-bottom: 30px;\n        }\n    }\n\n    & .pet {\n\n        &__photo {\n            width:270px;\n            height:270px;\n\n            margin-bottom:30px;\n        }\n    \n        &__name {\n            @include font(\n                $font-family: 'Georgia',\n                $font-size: calc(20/16) * 1rem,\n                $line-height: 1.136,\n                $color: $color-dark,\n                $letter-spacing: 0.06em);\n        }\n    }\n}\n\n@media (max-width:1209px) {\n    .gallery {\n            & > * + * {\n                margin-left: 40px;\n            }\n\n            & > *:nth-child(3n+4) {\n                margin-left: 0;\n            }\n    \n            & > *:nth-child(n+4) {\n                margin-top: 30px;\n            }\n    }\n}\n\n@media (max-width:1050px) {\n    .friends {    \n        &__container {    \n            padding: 80px 94px 76px;\n\n            & h1 {    \n                margin-bottom:30px;\n            }\n        }\n    }\n    .gallery {   \n            height:1365px; \n\n            & > * {\n                margin-left:0;\n                margin-top: 0;\n            }\n    \n            & > *:nth-child(2n) {\n                margin-left:40px;\n            }\n    \n            & > *:nth-child(n+3) {\n                margin-top: 40px;\n            }\n    }\n}\n\n@media (max-width:790px) {\n    .gallery {    \n            & > * + * {\n                margin-left: auto;\n            }\n    \n            & > * {\n                margin-left: 0;\n                margin-top: 0;\n            }\n\n            & > *:nth-child(2n) {\n                margin-left:auto;\n            }\n    \n            & > *:nth-child(n+3) {\n                margin-top: 30px;\n            }\n    }\n}\n\n@media (max-width:767px) {\n    .friends {    \n        &__container {    \n            padding: 42px 10px;\n\n            & h1 {\n                width: 100%;\n                \n                margin-bottom:42px;\n\n                padding: 0 10px;\n                \n                font-size: calc(25/16) * 1rem;\n\n                text-align: center;\n            }\n        }\n    }\n    \n    .gallery {  \n        justify-content: center;\n\n            & > * {\n                margin-left: 50%;\n                margin-right: 50%;\n                margin-top: 0;\n            }\n\n            & > *:nth-child(2n) {\n                margin-left: 50%;\n                margin-right: 50%;\n            }\n    \n            & > *:nth-child(n+2) {\n                margin-top: 30px;\n            }\n\n            & > *:nth-child(n+4) {\n                display:none;\n            }\n    }\n}\n\n@include media-mobile-big {    \n    .gallery {  \n        justify-content: center;\n    \n            & > * {\n                margin-left: 0;\n                margin-right:0;\n                margin-top: 0;\n            }\n    \n            & > *:nth-child(n+2) {\n                margin-top: 30px;\n            }\n\n            & > *:nth-child(n+4) {\n                display:none;\n            }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/favicon.ico */ "./src/assets/img/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/svg/icon-pet-food.svg */ "./src/assets/svg/icon-pet-food.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/svg/icon-transportation.svg */ "./src/assets/svg/icon-transportation.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/svg/icon-toys.svg */ "./src/assets/svg/icon-toys.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/svg/icon-bowls-and-cups.svg */ "./src/assets/svg/icon-bowls-and-cups.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/svg/icon-shampoos.svg */ "./src/assets/svg/icon-shampoos.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/svg/icon-vitamins.svg */ "./src/assets/svg/icon-vitamins.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/svg/icon-medicines.svg */ "./src/assets/svg/icon-medicines.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/svg/icon-collars-leashes.svg */ "./src/assets/svg/icon-collars-leashes.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/svg/icon-sleeping-area.svg */ "./src/assets/svg/icon-sleeping-area.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Shelter | Main page</title>\n    <link href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" rel=\"icon\" type=\"image/x-icon\">\n</head>\n<body>\n    <header>\n        <div class=\"wrapper\">\n            <div class=\"header\">\n                <div class=\"header__top top\">\n                    <div class=\"top__logo logo\">\n                        <a href=\"#\">\n                        <span class=\"logo__title\">Cozy House</span>\n                        <span class=\"logo__subtitle\">Shelter for pets in Boston</span>\n                        </a>\n                    </div>\n                    <nav class=\"top__nav top-nav\">\n                        <ul class=\"top-nav__list\">\n                            <li class=\"top-nav__item top-nav__item-active\"><a href=\"#\">About the shelter</a></li>\n                            <li class=\"top-nav__item\"><a href=\"./pets.html\">Our pets</a></li>\n                            <li class=\"top-nav__item\"><a href=\"./index.html#help\">Help the shelter</a></li>\n                            <li class=\"top-nav__item\"><a href=\"./index.html#contacts\">Contacts</a></li>\n                        </ul>\n                    </nav>\n                    <div class=\"burger\">\n                        <span class=\"burger__line\"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </header>\n    <main>\n        <section class=\"not-only\">\n            <div class=\"wrapper\">\n                <div class=\"header__slogan header-slogan\">\n                    <div class=\"header-slogan__title\"><h1>Not only people need a house</h1></div>\n                    <div class=\"header-slogan__text\">We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!</div>\n                    <a class=\"button-link\" href=\"#our-friends\">Make a friend</a>\n                </div>\n            </div>\n        </section>\n        <section class=\"about\">\n            <div class=\"wrapper\">\n                <div class=\"about__container\">\n                    <div class=\"about__title\">\n                        <h2>About the shelter “Cozy House”</h2>\n                    </div>\n                    <div class=\"about__text\">\n                        <p>Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.</p>\n                        <p>We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.</p>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <section class=\"our-friends\" id=\"our-friends\">\n            <div class=\"wrapper\">\n                <div class=\"our-friends__container\">\n                    <h2>Our friends who<br> are looking for a house</h2>\n                        <div class=\"slider\">\n                            <div class=\"slider__prev\"></div>\n                            <div class=\"slider__wrapper\">\n                                <div class=\"slider__container\">\n                                    <!-- <div class=\"slider__item\">\n                                        <img class=\"pet__photo\" src=\"./assets/img/pets-katrine.png\" alt=\"pet\">\n                                        <div class=\"pet__name\">Katrine</div>\n                                        <button class=\"button button-secondary\" type=\"button\">Learn more</button>\n                                    </div>\n                                    <div class=\"slider__item\">\n                                        <img class=\"pet__photo\" src=\"./assets/img/pets-jennifer.png\" alt=\"pet\">\n                                        <div class=\"pet__name\">Jennifer</div>\n                                        <button class=\"button button-secondary\" type=\"button\">Learn more</button>\n                                    </div>\n                                    <div class=\"slider__item\">\n                                        <img class=\"pet__photo\" src=\"./assets/img/pets-woody.png\" alt=\"pet\">\n                                        <div class=\"pet__name\">Woody</div>\n                                        <button class=\"button button-secondary\" type=\"button\">Learn more</button>\n                                    </div>\n                                    <div class=\"slider__item\">\n                                        <img class=\"pet__photo\" src=\"./assets/img/pets-katrine.png\" alt=\"pet\">\n                                        <div class=\"pet__name\">Katrine</div>\n                                        <button class=\"button button-secondary\" type=\"button\">Learn more</button>\n                                    </div>\n                                    <div class=\"slider__item\">\n                                        <img class=\"pet__photo\" src=\"./assets/img/pets-jennifer.png\" alt=\"pet\">\n                                        <div class=\"pet__name\">Jennifer</div>\n                                        <button class=\"button button-secondary\" type=\"button\">Learn more</button>\n                                    </div>\n                                    <div class=\"slider__item\">\n                                        <img class=\"pet__photo\" src=\"./assets/img/pets-woody.png\" alt=\"pet\">\n                                        <div class=\"pet__name\">Woody</div>\n                                        <button class=\"button button-secondary\" type=\"button\">Learn more</button>\n                                    </div>\n                                    <div class=\"slider__item\">\n                                        <img class=\"pet__photo\" src=\"./assets/img/pets-katrine.png\" alt=\"pet\">\n                                        <div class=\"pet__name\">Katrine</div>\n                                        <button class=\"button button-secondary\" type=\"button\">Learn more</button>\n                                    </div>\n                                    <div class=\"slider__item\">\n                                        <img class=\"pet__photo\" src=\"./assets/img/pets-jennifer.png\" alt=\"pet\">\n                                        <div class=\"pet__name\">Jennifer</div>\n                                        <button class=\"button button-secondary\" type=\"button\">Learn more</button>\n                                    </div>\n                                    <div class=\"slider__item\">\n                                        <img class=\"pet__photo\" src=\"./assets/img/pets-woody.png\" alt=\"pet\">\n                                        <div class=\"pet__name\">Woody</div>\n                                        <button class=\"button button-secondary\" type=\"button\">Learn more</button>\n                                    </div> -->\n                                </div>\n                            </div>\n                            <div class=\"slider__next\"></div>\n                        </div>\n                    <a class=\"button-link\" href=\"./pets.html\">Get to know the rest</a>\n                </div>\n            </div>\n        </section>\n        <section class=\"help\" id=\"help\">\n            <div class=\"wrapper\">\n                <div class=\"help__container\">\n                    <h2>How you can help our shelter</h2>\n                    <ul class=\"help__list\">\n                        <li class=\"help__item\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"icon\">\n                            <p>Pet food</p>\n                        </li>\n                        <li class=\"help__item\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"icon\">\n                            <p>Transportation</p>\n                        </li>\n                        <li class=\"help__item\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"icon\">\n                            <p>Toys</p>\n                        </li>\n                        <li class=\"help__item\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"icon\">\n                            <p>Bowls and cups</p>\n                        </li>\n                        <li class=\"help__item\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"icon\">\n                            <p>Shampoos</p>\n                        </li>\n                        <li class=\"help__item\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"icon\">\n                            <p>Vitamins</p>\n                        </li>\n                        <li class=\"help__item\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"icon\">\n                            <p>Medicines</p>\n                        </li>\n                        <li class=\"help__item\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"icon\">\n                            <p>Collars / leashes</p>\n                        </li>\n                        <li class=\"help__item\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"icon\">\n                            <p>Sleeping areas</p>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n        <section class=\"in-addition\">\n            <div class=\"wrapper\">\n                <div class=\"in-addition__background\">\n                <div class=\"in-addition__container\">\n                    <h2>You can also make a donation</h2>\n                    <div class=\"in-addition__subtitle\">Name of the bank / Type of bank account</div>\n                    <a class=\"in-addition__number\" href=\"#\">\n                        <i class=\"icon-credit\"></i>\n                        <span>8380 2880 8028 8791 7435</span>\n                    </a>\n                    <div class=\"in-addition__comment\">Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>\n                </div>\n            </div>\n            </div>\n        </section>\n    </main>\n    <footer class=\"footer\" id=\"contacts\">\n        <div class=\"wrapper\">\n            <div class=\"footer__container\">\n                <div class=\"footer__first\">\n                    <div class=\"footer__title\"><h2>For questions and suggestions</h2></div>\n                    <ul class=\"footer__list\">\n                        <li class=\"footer__item\">\n                            <a href=\"mailto:email@shelter.com\">\n                            <i class=\"icon-email\"></i>\n                            <span>\n                                email@shelter.com\n                            </span>\n\n                        </a>\n                        </li>\n                        <li class=\"footer__item\">\n                            <a href=\"tel:+136745677554\">\n                            <i class=\"icon-phone\"></i>\n                            <span>+13 674 567 75 54</span>\n                        </a>\n                        </li>\n                    </ul>                    \n                </div>\n                <div class=\"footer__second\">\n                    <div class=\"footer__title\"><h2>We are waiting for your visit</h2></div>\n                    <ul class=\"footer__list\">\n                        <li class=\"footer__item\">\n                            <a target=\"_blank\" href=\"https://www.google.com/maps/place/1+Centre+St,+Boston,+MA+02119,+%D0%A1%D0%A8%D0%90/@42.3300628,-71.0941915,17z/data=!3m1!4b1!4m6!3m5!1s0x89e37a260516d22d:0x67663c18c6a54ce9!8m2!3d42.3300628!4d-71.0920028!16s%2Fg%2F11td12jd0m\">\n                            <i class=\"icon-pin\"></i>\n                            <span>1 Central Street, Boston (entrance from the store)</span>\n                        </a>\n                        </li>\n                        <li class=\"footer__item\">\n                            <a target=\"_blank\" href=\"https://www.google.com/maps/search/18+South+Park,+London/@51.466769,-0.1947351,11z/data=!3m1!4b1\">\n                            <i class=\"icon-pin\"></i>\n                            <span>18 South Park, London</span>\n                        </a>\n                        </li>\n                    </ul>                    \n                </div>\n            </div>\n        </div>\n    </footer>\n</body> \n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/pets.html":
/*!***********************!*\
  !*** ./src/pets.html ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/favicon.ico */ "./src/assets/img/favicon.ico"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Shelter | Main page</title>\n    <link href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" rel=\"icon\" type=\"image/x-icon\">\n</head>\n<body>\n    <header class=\"header-light\">\n        <div class=\"wrapper\">\n                <div class=\"header-light__container top\">\n                    <div class=\"top__logo logo\">\n                        <a href=\"./\">\n                        <span class=\"logo__title\">Cozy House</span>\n                        <span class=\"logo__subtitle\">Shelter for pets in Boston</span>\n                        </a>\n                    </div>\n                    <nav class=\"top__nav top-nav\">\n                        <ul class=\"top-nav__list\">\n                            <li class=\"top-nav__item\"><a href=\"./index.html\">About the shelter</a></li>\n                            <li class=\"top-nav__item top-nav__item-active\"><a href=\"./pets.html\">Our pets</a></li>\n                            <li class=\"top-nav__item\"><a href=\"./index.html#help\">Help the shelter</a></li>\n                            <li class=\"top-nav__item\"><a href=\"./pets.html#contacts\">Contacts</a></li>\n                        </ul>\n                    </nav>\n                    <div class=\"burger\">\n                        <span class=\"burger__line\"></span>\n                    </div>\n                </div>\n        </div>\n    </header>\n    <main>\n        <section class=\"friends\">\n            <div class=\"wrapper\">\n                <div class=\"friends__container\">\n                    <h1>Our friends who<br> are looking for a house</h1>\n                        <div class=\"gallery\">\n                        </div>\n                    <div class=\"gallery__pagination\">\n                        <div class=\"pagination__state state-disable pagination__first\">&lt;&lt;</div>\n                        <div class=\"pagination__state state-disable pagination__prev\">&lt;</div>\n                        <div class=\"pagination__state state-active pagination__page\">1</div>\n                        <div class=\"pagination__state state-available pagination__next\">&gt;</div>\n                        <div class=\"pagination__state state-available pagination__last\">&gt;&gt;</div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </main>\n    <footer class=\"footer\" id=\"contacts\">\n        <div class=\"wrapper\">\n            <div class=\"footer__container\">\n                <div class=\"footer__first\">\n                    <div class=\"footer__title\"><h2>For questions and suggestions</h2></div>\n                    <ul class=\"footer__list\">\n                        <li class=\"footer__item\">\n                            <a href=\"mailto:email@shelter.com\">\n                            <i class=\"icon-email\"></i>\n                            <span>\n                                email@shelter.com\n                            </span>\n\n                        </a>\n                        </li>\n                        <li class=\"footer__item\">\n                            <a href=\"tel:+136745677554\">\n                            <i class=\"icon-phone\"></i>\n                            <span>+13 674 567 75 54</span>\n                        </a>\n                        </li>\n                    </ul>                    \n                </div>\n                <div class=\"footer__second\">\n                    <div class=\"footer__title\"><h2>We are waiting for your visit</h2></div>\n                    <ul class=\"footer__list\">\n                        <li class=\"footer__item\">\n                            <a target=\"_blank\" href=\"https://www.google.com/maps/place/1+Centre+St,+Boston,+MA+02119,+%D0%A1%D0%A8%D0%90/@42.3300628,-71.0941915,17z/data=!3m1!4b1!4m6!3m5!1s0x89e37a260516d22d:0x67663c18c6a54ce9!8m2!3d42.3300628!4d-71.0920028!16s%2Fg%2F11td12jd0m\">\n                            <i class=\"icon-pin\"></i>\n                            <span>1 Central Street, Boston (entrance from the store)</span>\n                        </a>\n                        </li>\n                        <li class=\"footer__item\">\n                            <a target=\"_blank\" href=\"https://www.google.com/maps/search/18+South+Park,+London/@51.466769,-0.1947351,11z/data=!3m1!4b1\">\n                            <i class=\"icon-pin\"></i>\n                            <span>18 South Park, London</span>\n                        </a>\n                        </li>\n                    </ul>                    \n                </div>\n            </div>\n        </div>\n    </footer>\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);

        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a '" + methodName + "' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/icomoon.svg?gjaarj":
/*!*********************************************!*\
  !*** ./src/assets/fonts/icomoon.svg?gjaarj ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/icomoon.svg";

/***/ }),

/***/ "./src/assets/img/about-pets.png":
/*!***************************************!*\
  !*** ./src/assets/img/about-pets.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/about-pets.png";

/***/ }),

/***/ "./src/assets/img/arrow.png":
/*!**********************************!*\
  !*** ./src/assets/img/arrow.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/arrow.png";

/***/ }),

/***/ "./src/assets/img/background/noise_transparent.png":
/*!*********************************************************!*\
  !*** ./src/assets/img/background/noise_transparent.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/noise_transparent.png";

/***/ }),

/***/ "./src/assets/img/background/start-screen-puppy.png":
/*!**********************************************************!*\
  !*** ./src/assets/img/background/start-screen-puppy.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/start-screen-puppy.png";

/***/ }),

/***/ "./src/assets/img/donation-dog.png":
/*!*****************************************!*\
  !*** ./src/assets/img/donation-dog.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/donation-dog.png";

/***/ }),

/***/ "./src/assets/img/favicon.ico":
/*!************************************!*\
  !*** ./src/assets/img/favicon.ico ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./src/assets/img/footer-puppy.png":
/*!*****************************************!*\
  !*** ./src/assets/img/footer-puppy.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/footer-puppy.png";

/***/ }),

/***/ "./src/assets/img/pets-charly.png":
/*!****************************************!*\
  !*** ./src/assets/img/pets-charly.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/pets-charly.png";

/***/ }),

/***/ "./src/assets/img/pets-freddie.png":
/*!*****************************************!*\
  !*** ./src/assets/img/pets-freddie.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/pets-freddie.png";

/***/ }),

/***/ "./src/assets/img/pets-jennifer.png":
/*!******************************************!*\
  !*** ./src/assets/img/pets-jennifer.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/pets-jennifer.png";

/***/ }),

/***/ "./src/assets/img/pets-katrine.png":
/*!*****************************************!*\
  !*** ./src/assets/img/pets-katrine.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/pets-katrine.png";

/***/ }),

/***/ "./src/assets/img/pets-scarlett.png":
/*!******************************************!*\
  !*** ./src/assets/img/pets-scarlett.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/pets-scarlett.png";

/***/ }),

/***/ "./src/assets/img/pets-sophia.png":
/*!****************************************!*\
  !*** ./src/assets/img/pets-sophia.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/pets-sophia.png";

/***/ }),

/***/ "./src/assets/img/pets-timmy.png":
/*!***************************************!*\
  !*** ./src/assets/img/pets-timmy.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/pets-timmy.png";

/***/ }),

/***/ "./src/assets/img/pets-woody.png":
/*!***************************************!*\
  !*** ./src/assets/img/pets-woody.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/pets-woody.png";

/***/ }),

/***/ "./src/assets/svg/dot.svg":
/*!********************************!*\
  !*** ./src/assets/svg/dot.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/dot.svg";

/***/ }),

/***/ "./src/assets/svg/icon-bowls-and-cups.svg":
/*!************************************************!*\
  !*** ./src/assets/svg/icon-bowls-and-cups.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/icon-bowls-and-cups.svg";

/***/ }),

/***/ "./src/assets/svg/icon-collars-leashes.svg":
/*!*************************************************!*\
  !*** ./src/assets/svg/icon-collars-leashes.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/icon-collars-leashes.svg";

/***/ }),

/***/ "./src/assets/svg/icon-medicines.svg":
/*!*******************************************!*\
  !*** ./src/assets/svg/icon-medicines.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/icon-medicines.svg";

/***/ }),

/***/ "./src/assets/svg/icon-pet-food.svg":
/*!******************************************!*\
  !*** ./src/assets/svg/icon-pet-food.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/icon-pet-food.svg";

/***/ }),

/***/ "./src/assets/svg/icon-shampoos.svg":
/*!******************************************!*\
  !*** ./src/assets/svg/icon-shampoos.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/icon-shampoos.svg";

/***/ }),

/***/ "./src/assets/svg/icon-sleeping-area.svg":
/*!***********************************************!*\
  !*** ./src/assets/svg/icon-sleeping-area.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/icon-sleeping-area.svg";

/***/ }),

/***/ "./src/assets/svg/icon-toys.svg":
/*!**************************************!*\
  !*** ./src/assets/svg/icon-toys.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/icon-toys.svg";

/***/ }),

/***/ "./src/assets/svg/icon-transportation.svg":
/*!************************************************!*\
  !*** ./src/assets/svg/icon-transportation.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/icon-transportation.svg";

/***/ }),

/***/ "./src/assets/svg/icon-vitamins.svg":
/*!******************************************!*\
  !*** ./src/assets/svg/icon-vitamins.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/icon-vitamins.svg";

/***/ }),

/***/ "./src/assets/fonts/arial.ttf":
/*!************************************!*\
  !*** ./src/assets/fonts/arial.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/arial.ttf";

/***/ }),

/***/ "./src/assets/fonts/arial.woff":
/*!*************************************!*\
  !*** ./src/assets/fonts/arial.woff ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/arial.woff";

/***/ }),

/***/ "./src/assets/fonts/arial.woff2":
/*!**************************************!*\
  !*** ./src/assets/fonts/arial.woff2 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/arial.woff2";

/***/ }),

/***/ "./src/assets/fonts/ariali.ttf":
/*!*************************************!*\
  !*** ./src/assets/fonts/ariali.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/ariali.ttf";

/***/ }),

/***/ "./src/assets/fonts/ariali.woff":
/*!**************************************!*\
  !*** ./src/assets/fonts/ariali.woff ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/ariali.woff";

/***/ }),

/***/ "./src/assets/fonts/ariali.woff2":
/*!***************************************!*\
  !*** ./src/assets/fonts/ariali.woff2 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/ariali.woff2";

/***/ }),

/***/ "./src/assets/fonts/georgia.ttf":
/*!**************************************!*\
  !*** ./src/assets/fonts/georgia.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/georgia.ttf";

/***/ }),

/***/ "./src/assets/fonts/georgia.woff":
/*!***************************************!*\
  !*** ./src/assets/fonts/georgia.woff ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/georgia.woff";

/***/ }),

/***/ "./src/assets/fonts/georgia.woff2":
/*!****************************************!*\
  !*** ./src/assets/fonts/georgia.woff2 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/georgia.woff2";

/***/ }),

/***/ "./src/assets/fonts/georgiab.ttf":
/*!***************************************!*\
  !*** ./src/assets/fonts/georgiab.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/georgiab.ttf";

/***/ }),

/***/ "./src/assets/fonts/georgiab.woff":
/*!****************************************!*\
  !*** ./src/assets/fonts/georgiab.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/georgiab.woff";

/***/ }),

/***/ "./src/assets/fonts/georgiab.woff2":
/*!*****************************************!*\
  !*** ./src/assets/fonts/georgiab.woff2 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/georgiab.woff2";

/***/ }),

/***/ "./src/assets/fonts/georgiai.ttf":
/*!***************************************!*\
  !*** ./src/assets/fonts/georgiai.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/georgiai.ttf";

/***/ }),

/***/ "./src/assets/fonts/georgiai.woff":
/*!****************************************!*\
  !*** ./src/assets/fonts/georgiai.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/georgiai.woff";

/***/ }),

/***/ "./src/assets/fonts/georgiai.woff2":
/*!*****************************************!*\
  !*** ./src/assets/fonts/georgiai.woff2 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/georgiai.woff2";

/***/ }),

/***/ "./src/assets/fonts/icomoon.eot?gjaarj":
/*!*********************************************!*\
  !*** ./src/assets/fonts/icomoon.eot?gjaarj ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/icomoon.eot";

/***/ }),

/***/ "./src/assets/fonts/icomoon.ttf?gjaarj":
/*!*********************************************!*\
  !*** ./src/assets/fonts/icomoon.ttf?gjaarj ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/icomoon.ttf";

/***/ }),

/***/ "./src/assets/fonts/icomoon.woff?gjaarj":
/*!**********************************************!*\
  !*** ./src/assets/fonts/icomoon.woff?gjaarj ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/icomoon.woff";

/***/ }),

/***/ "./src/data/pets.json":
/*!****************************!*\
  !*** ./src/data/pets.json ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "data/pets.json";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/


__webpack_require__(/*! ./noConflict */ "./node_modules/@babel/polyfill/lib/noConflict.js");

var _global = _interopRequireDefault(__webpack_require__(/*! core-js/library/fn/global */ "./node_modules/core-js/library/fn/global.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

_global["default"]._babelPolyfill = true;
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _pets_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pets.html */ "./src/pets.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _data_pets_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/pets.json */ "./src/data/pets.json");
/* harmony import */ var _assets_img_pets_charly_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img/pets-charly.png */ "./src/assets/img/pets-charly.png");
/* harmony import */ var _assets_img_pets_freddie_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/img/pets-freddie.png */ "./src/assets/img/pets-freddie.png");
/* harmony import */ var _assets_img_pets_jennifer_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/img/pets-jennifer.png */ "./src/assets/img/pets-jennifer.png");
/* harmony import */ var _assets_img_pets_katrine_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/img/pets-katrine.png */ "./src/assets/img/pets-katrine.png");
/* harmony import */ var _assets_img_pets_scarlett_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/img/pets-scarlett.png */ "./src/assets/img/pets-scarlett.png");
/* harmony import */ var _assets_img_pets_sophia_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/img/pets-sophia.png */ "./src/assets/img/pets-sophia.png");
/* harmony import */ var _assets_img_pets_timmy_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/img/pets-timmy.png */ "./src/assets/img/pets-timmy.png");
/* harmony import */ var _assets_img_pets_woody_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/img/pets-woody.png */ "./src/assets/img/pets-woody.png");
/* harmony import */ var _modules_grade_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/grade.js */ "./src/modules/grade.js");
/* harmony import */ var _modules_grade_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_grade_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_burger_menu_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/burger-menu.js */ "./src/modules/burger-menu.js");
/* harmony import */ var _modules_burger_menu_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_modules_burger_menu_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/slider.js */ "./src/modules/slider.js");
/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_modules_slider_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _modules_pagination_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/pagination.js */ "./src/modules/pagination.js");
/* harmony import */ var _modules_pagination_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_modules_pagination_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _modules_run_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/run-modal */ "./src/modules/run-modal.js");

















const getData = async () => {
  try {
    const path = "./data/pets.json";
    const res = await fetch(path);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
(async () => {
  //Получим данные
  const pets = await getData();

  //Обработаем клик по карточке
  !document.location.href.includes("pets") ? (0,_modules_run_modal__WEBPACK_IMPORTED_MODULE_16__.runModal)(pets, "slider__container", "slider__item") : (0,_modules_run_modal__WEBPACK_IMPORTED_MODULE_16__.runModal)(pets, "gallery", "gallery__item");
})();
})();

/******/ })()
;
//# sourceMappingURL=index.0c4597356eb0432054ce.js.map