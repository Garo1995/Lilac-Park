
















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
            loop: true,

        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            loop: true,
        },
    },
    pagination: {
        el: ".mortgage-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".mortgage-button-next",
        prevEl: ".mortgage-button-prev",
    },
});









let volumeSwiper = new Swiper(".volume-apart-slider", {
    slidesPerView: 3.4,
    spaceBetween: 16,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    breakpoints: {
        1199: {
            slidesPerView: 3.4,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        1020: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        760: {
            slidesPerView: 2.4,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        570: {
            slidesPerView: 2.1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        420: {
            slidesPerView: 1.6,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },
});





let sliders = document.querySelectorAll('.finish-gallery-slider'),
    prevArrow = document.querySelectorAll('.fin-button-prev'),
    nextArrow = document.querySelectorAll('.fin-button-next');
sliders.forEach((slider, idx) => {
    let finSwiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 16,
        navigation: {
            nextEl: nextArrow[idx],
            prevEl: prevArrow[idx],
        },

    })
});















let projectSwiper = new Swiper(".project-ben-slider", {
    slidesPerView: 4,
    spaceBetween: 16,
    navigation: {
        nextEl: ".project-button-next",
        prevEl: ".project-button-prev",
    },
    breakpoints: {
        1199: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        780: {
            slidesPerView: 3.2,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 2.3,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        520: {
            slidesPerView: 2.1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        420: {
            slidesPerView: 1.4,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },
});













let spacesSwiper = new Swiper(".spaces-children-slider", {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        '1020': {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        '600': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    pagination: {
        el: ".spaces-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".spaces-button-next",
        prevEl: ".spaces-button-prev",
    },
});
















let gallerySwiper = new Swiper(".gallery-slider", {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        '1020': {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        '600': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    pagination: {
        el: ".gallery-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".gallery-button-next",
        prevEl: ".gallery-button-prev",
    },
});











let favorableSwiper = new Swiper(".favorable-slider", {
    slidesPerView: 3,
    spaceBetween: 16,
    breakpoints: {
        '1020': {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        '760': {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        '570': {
            slidesPerView: 2,
            spaceBetween: 16,

        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    pagination: {
        el: ".favorable-pagination",
        clickable: true,
    },
});







let constructionSwiper = new Swiper(".construction-slider", {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
        '1299': {
            slidesPerView: 4,
            spaceBetween: 16,
        },
        '760': {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        '620': {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    pagination: {
        el: ".construction-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".construction-button-next",
        prevEl: ".construction-button-prev",
    },
});



let newsSwiper = new Swiper(".news-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        '1020': {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        '620': {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    pagination: {
        el: ".news-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".news-button-next",
        prevEl: ".news-button-prev",
    },
});








let galleryModSlider = new Swiper(".gallery-mod-slider", {
    slidesPerView: 1,
    spaceBetween: 4,
    loop: true,
    speed: 600,
    pagination: {
        el: ".gallery-mod-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".gallery-mod-button-next",
        prevEl: ".gallery-mod-button-prev",
    }
});









let commercialSwiper = new Swiper(".commercial-slider", {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        '1020': {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        '580': {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    pagination: {
        el: ".commercial-pagination",
        clickable: true,
    },

});












let ByCarSwiper = new Swiper(".by-car-slider", {
    slidesPerView: 1,
    spaceBetween: 8,
    allowTouchMove: false,
    breakpoints: {
        '760': {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        '500': {
            slidesPerView: 2,
            spaceBetween: 8,
            allowTouchMove: true,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
            allowTouchMove: true,
        },
    },
    pagination: {
        el: ".by-car-pagination",
        clickable: true,
    },
});


let ByCarSwiperTwo = new Swiper(".by-car-slider-two", {
    slidesPerView: 1,
    spaceBetween: 8,
    allowTouchMove: false,
    breakpoints: {
        '760': {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        '500': {
            slidesPerView: 2,
            spaceBetween: 8,
            allowTouchMove: true,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
            allowTouchMove: true,
        },
    },
    pagination: {
        el: ".by-car-pagination-two",
        clickable: true,
    },
});

