"use strict";
let menuActive = document.querySelector(".menu-active");
let headerMenu = document.querySelector(".menu1");

function toggleMenu() {
    menuActive.classList.toggle("hidden");
}

headerMenu.addEventListener("click", toggleMenu);

window.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form"),
        pas = form.querySelectorAll("#password, #password-check");

    form.addEventListener(
        "submit",
        function(e) {
            const err = !(pas[0].value && pas[0].value == pas[1].value);

            pas[1].setAttribute("title", err ? "err" : "");

            err && e.preventDefault();
        },
        false
    );

    pas[1].addEventListener(
        "input",
        function(e) {
            const err = !(pas[0].value == pas[1].value);

            pas[1].setAttribute("title", err ? "err" : "");
        },
        false
    );
});