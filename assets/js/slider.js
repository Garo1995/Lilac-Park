
















let mortgageSwiper = new Swiper(".mortgage-slider", {
    slidesPerView: 3,
    spaceBetween: 16,
    breakpoints: {
        1199: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            loop: true,
        },
    },
    pagination: {
        el: ".profe-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".mortgage-button-next",
        prevEl: ".mortgage-button-prev",
    },
});