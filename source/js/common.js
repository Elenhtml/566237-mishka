var navMain = document.querySelector(".main-nav");
var navButtonMenu = document.querySelector(".button-menu");

navMain.classList.remove("main-nav--nojs");
navButtonMenu.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

var buttonOrder = document.querySelector(".week-good__button-order");
var modalMessage = document.querySelector(".modal-order");
if (modalMessage) {
  buttonOrder.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMessage.classList.add("modal-order-show");
});

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalMessage.classList.contains("modal-order-show")) {
        modalMap.classList.remove("modal-order-show");
      }
    }
  });
}

var buttonsBuy = document.querySelectorAll(".button-buy");
var modalMessage = document.querySelector(".modal-order");
if (modalMessage) {
  buttons_buy.forEach(function(button) {
    button.addEventListener("click", function(evt) {
      evt.preventDefault();
      modalMessage.classList.add("modal-order-show");
  });
});

  modalMessage_close.addEventListener("click", function() {
    modalMessage.classList.remove("modal-order-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalMessage.classList.contains("modal-order-show")) {
        modalMessage.classList.remove("modal-order-show");
      }
    }
  });
}
