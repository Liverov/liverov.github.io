"use strict";
var modal_feedback = document.querySelector(".modal-feedback");
var modal_close = document.querySelector(".modal-close");

var feedback_form = document.querySelector(".feedback-form");
var feedback_button = document.querySelector(".feedback-button");
var feedback_field_name = document.querySelector(".feedback-field-name");
var feedback_field_email = document.querySelector(".feedback-field-email");
var feedback_field_message = document.querySelector(".feedback-field-message");

var popup_login = document.querySelector(".popup-login"); 
var form_login = document.querySelector(".login-form");
var field_login = document.querySelector(".login-field-email");
var field_password = document.querySelector(".login-field-password");

var newsletter_block = document.querySelector(".newsletter");
var newsletter_form = document.querySelector(".newsletter-form");
var newsletter_field = document.querySelector(".newsletter-field");

var storage = "";
var is_storage_support = true;
try {
    storage = localStorage.getItem("field_login"); 
} catch (error) {
    is_storage_support = false;
}

if(modal_feedback) {
    feedback_form.addEventListener("submit", function(evt) {
        if(!feedback_field_email.value || !feedback_field_message.value) {
            if(!feedback_field_name.value) {
                feedback_field_name.classList.add("field-error");
            } else {
                feedback_field_name.classList.remove("field-error");
            }
            if(!feedback_field_email.value) {
                feedback_field_email.classList.add("field-error");
            }  else {
                feedback_field_email.classList.remove("field-error");
            }
            if(!feedback_field_message.value) {
                feedback_field_message.classList.add("field-error");
            } else {
                feedback_field_message.classList.remove("field-error");
            }

            evt.preventDefault();
            modal_feedback.classList.remove("modal-error");
            modal_feedback.width = modal_feedback.offsetWidth;
            modal_feedback.classList.add("modal-error");
        } else {
            if(is_storage_support) {
                localStorage.setItem("feedback_field_name", feedback_field_name.value);
                localStorage.setItem("feedback_field_email", feedback_field_email.value);
            }
        }
    });

    feedback_button.addEventListener("click", function(evt) {
        evt.preventDefault();
        modal_feedback.classList.add("modal-show");
    
        if(storage) {
            feedback_field_name.value = storage;
            feedback_field_email.focus();
        } else {
            feedback_field_name.focus();
        }
    });

    modal_close.addEventListener("click", function(evt) {
        evt.preventDefault();
        modal_feedback.classList.remove("modal-show");
        modal_feedback.classList.remove("modal-error");
    });

    window.addEventListener("keydown", function(evt) {
        if(evt.keyCode === 27) {
            if(modal_feedback.classList.contains("modal-show")) {
                evt.preventDefault();
                modal_feedback.classList.remove("modal-show");
                modal_feedback.classList.remove("modal-error");
            }
        }
    });
}

if(popup_login) {
    form_login.addEventListener("submit", function(evt) {
        if(!field_login.value || !field_password.value) {
            if(!field_login.value) {
                field_login.classList.add("field-error");
            } else {
                field_login.classList.remove("field-error");
            }
            if(!field_password.value) {
                field_password.classList.add("field-error");
            } else {
                field_password.classList.remove("field-error");
            }
            evt.preventDefault();
            popup_login.classList.remove("modal-error");
            popup_login.width = popup_login.offsetWidth;
            popup_login.classList.add("modal-error");
        }
    });
}

if(newsletter_block) {
    newsletter_form.addEventListener("submit", function(evt) {
        if(!newsletter_field.value) {
            if(!newsletter_field.value) {
                newsletter_field.classList.add("field-error");
            } else {
                newsletter_field.classList.remove("field-error");
            }
            evt.preventDefault();
            newsletter_block.classList.remove("modal-error");
            newsletter_block.width = newsletter_block.offsetWidth;
            newsletter_block.classList.add("modal-error");
        } else {
            if(is_storage_support) {
                localStorage.setItem("field_login", field_login.value);
            }
        }
    });
}


/* DROPDOWN MENU */
var dropdown_link = document.querySelector(".dropdown");
var menu_dropdown = document.querySelector(".site-subnavigation");
var menu_dropdown_link = menu_dropdown.querySelector(".site-subnavigation-item:last-child");
if(menu_dropdown) {
    dropdown_link.addEventListener('focus', function() {
        //if(evt.keyCode === 32) {
            menu_dropdown.classList.add("display-block");
        //}
    });
    menu_dropdown_link.addEventListener('focusout', function() {
        menu_dropdown.classList.remove("display-block");
    });
}

/* DROPDOWN SEARCH */
var button_search = document.querySelector(".button-search");
var popup_search = document.querySelector(".popup-search");
if(popup_search) {
    button_search.addEventListener('focus', function() {
        popup_search.classList.add("display-block");
    });
    popup_search.addEventListener('focusout', function() {
        popup_search.classList.remove("display-block");
    });
}

/* DROPDOWN LOGIN */
var button_login = document.querySelector(".button-login");
var popup_login = document.querySelector(".popup-login");
if(popup_login) {
    button_login.addEventListener('focus', function() {
        popup_login.classList.add("display-block");
    });
    document.querySelector(".register").addEventListener('focusout', function() {
        popup_login.classList.remove("display-block");
    });
}

/* DROPDOWN CART */
var button_cart = document.querySelector(".button-cart");
var popup_cart = document.querySelector(".popup-cart");
var cart_button = document.querySelector(".cart__button");

if(popup_cart) {
    button_cart.addEventListener('focus', function() {
        popup_cart.classList.add("display-block");
    });

    cart_button.addEventListener('focusout', function() {
            popup_cart.classList.remove("display-block");
    });
}

function outFocus(element, element2) {
    element.addEventListener('focusout', function() {
        return element2.classList.remove("display-block");
    });
}

/* SLIDER */
// var slider_controls = document.querySelector(".slider-controls");
// var slider_control = document.querySelectorAll(".slider-controls label").length + 1;
// var input_slide = document.querySelector("[name=toggle]");

// var i = 1;
// setInterval(function() {
//     document.querySelector('.slide-' + i).click();
//     i++;
//     if(i >= slider_control) i = 1;
// }, 12000);

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