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

var button_order = document.querySelector(".week-good__button-order");
var modal_message = document.querySelector(".modal-order");
if (modal_message) {
  button_order.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_message.classList.add("modal-order-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modal_message.classList.contains("modal-order-show")) {
        modal_map.classList.remove("modal-order-show");
      }
    }
  });
}

var buttons_buy = document.querySelectorAll(".button-buy");
var modal_message = document.querySelector(".modal-order");
if (modal_message) {
buttons_buy.forEach(function(button) {
  button.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_message.classList.add("modal-order-show");
  });
});

modal_message_close.addEventListener("click", function() {
  modal_message.classList.remove("modal-order-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal_message.classList.contains("modal-order-show")) {
      modal_message.classList.remove("modal-order-show");
    }
  }
});
}
