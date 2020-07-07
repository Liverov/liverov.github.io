"use strict";
/* PRODUCT CARD */
var cards = document.querySelectorAll('.card');
Array.prototype.forEach.call(cards, function (card) {
  var down,
      up,
      link = card.querySelector('h3 a');

  card.onmousedown = function () {
    return down = +new Date();
  };

  card.onmouseup = function () {
    up = +new Date();

    if (up - down < 200) {
      link.click();
    }
  };
});

/* TOGGLE MENU */
var button_open = document.querySelector(".main-nav__toggle--open");
var main_nav_toggle = document.querySelector(".main-nav__toggle");
var main_nav_list = document.querySelector(".main-nav__list");
var main_nav_wrapper = document.querySelector(".main-nav__wrapper");

main_nav_wrapper.classList.remove('main-nav--nojs');

button_open.addEventListener("click", function(e) {
  main_nav_wrapper.classList.toggle("main-nav__wrapper");
  main_nav_wrapper.classList.toggle("main-nav__wrapper--opened");
  main_nav_toggle.classList.toggle("main-nav__toggle--open");
  main_nav_toggle.classList.toggle("main-nav__toggle--close");
});


var catalog_button = document.querySelectorAll(".catalog__button");
var modal_order = document.querySelector(".modal__order");

if(catalog_button) {
    for(var i = 0; i < catalog_button.length; i++) {
      catalog_button[i].addEventListener("click", function(evt) {
        evt.preventDefault();
      modal_order.classList.add("modal-show");
      });
    }


  window.addEventListener("keydown", function(evt) {
    if(evt.keyCode === 27) {
        if(modal_order.classList.contains("modal-show")) {
            evt.preventDefault();
            modal_order.classList.remove("modal-show");
        }
    }
  });
}
