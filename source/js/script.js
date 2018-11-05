"use strict";

(function () {
  var buttonOpen = document.querySelector(".nav-button--open");
  var buttonClose = document.querySelector(".nav-button--close");

  var siteList = document.querySelector(".main-nav__list");

  buttonOpen.addEventListener("click", function () {
    siteList.classList.remove("site-list--close");
    buttonOpen.classList.add("nav-button--hide");
    buttonClose.classList.remove("nav-button--hide");
  });

  buttonClose.addEventListener("click", function () {
    siteList.classList.add("site-list--close");
    buttonClose.classList.add("nav-button--hide");
    buttonOpen.classList.remove("nav-button--hide");
  });
}());
