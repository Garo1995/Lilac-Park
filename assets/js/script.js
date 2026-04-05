

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $('.menu-content').addClass('transition-menu');
        $('body').addClass('body_fix');
    });
    $('.close-menu').on('click', function () {
        $('.menu-content').removeClass('transition-menu');
        $('body').removeClass('body_fix');
    });

});



