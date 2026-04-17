document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    let isScrolled = false;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100 && !isScrolled) {
            header.classList.add("scrolled");
            isScrolled = true;
        } else if (window.scrollY < 80 && isScrolled) {
            header.classList.remove("scrolled");
            isScrolled = false;
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





const hoverColor = '#754abc';
const hoverOpacity = 0.5;

const pathMap = new Map();
document.querySelectorAll('.general-path').forEach(link => {
    const path = link.querySelector('path');
    const href = link.getAttribute('href');
    if (path && href) {
        pathMap.set(href, path);
    }
});

function getBlockHref(block) {
    return block.getAttribute('href') || block.querySelector('a')?.getAttribute('href');
}

pathMap.forEach((path, href) => {
    const originalColor = path.getAttribute('fill') || path.style.fill;
    const originalOpacity = path.getAttribute('fill-opacity') || path.style.fillOpacity;

    const relatedBlock = document.querySelector(`.corps-queue[href="${href}"], .corps-queue a[href="${href}"]`)?.closest('.corps-queue');

    path.addEventListener('mouseenter', () => {
        if (path.dataset.ready !== 'true') return;

        path.dataset.hover = 'true';
        path.dataset.colored = 'true';
        path.style.fill = hoverColor;
        path.style.fillOpacity = hoverOpacity;

        if (relatedBlock) relatedBlock.classList.add('active');
    });

    path.addEventListener('mouseleave', () => {
        path.dataset.hover = 'false';
        setTimeout(() => {
            if (path.dataset.hover === 'false') {
                if (path.dataset.colored === 'true') {
                    path.style.fill = originalColor || '';
                    path.style.fillOpacity = originalOpacity || '';
                    path.dataset.colored = '';
                }
                if (relatedBlock) relatedBlock.classList.remove('active');
            }
        }, 50);
    });
});

document.querySelectorAll('.corps-queue').forEach(block => {
    const href = getBlockHref(block);
    const path = pathMap.get(href);
    if (path) {
        const originalColor = path.getAttribute('fill') || path.style.fill;
        const originalOpacity = path.getAttribute('fill-opacity') || path.style.fillOpacity;
        block.addEventListener('mouseenter', () => {
        if (path.dataset.ready !== 'true') return;
            path.dataset.hover = 'true';
            path.dataset.colored = 'true';
            path.style.fill = hoverColor;
            path.style.fillOpacity = hoverOpacity;
            block.classList.add('active');
        });
        block.addEventListener('mouseleave', () => {
            path.dataset.hover = 'false';
            setTimeout(() => {
                if (path.dataset.hover === 'false') {
                    if (path.dataset.colored === 'true') {
                        path.style.fill = originalColor || '';
                        path.style.fillOpacity = originalOpacity || '';
                        path.dataset.colored = '';
                    }
                    block.classList.remove('active');
                }
            }, 50);
        });
    }
});




$('.queue-floor li').on('click', function () {
    $(this).toggleClass('queue-floor-act')
})

$('.queue-floor-two').on('click', function () {
    $('.genplan-map-stage-two').toggleClass('genplan-map-stage-act')
})

$('.queue-floor-three').on('click', function () {
    $('.genplan-map-stage-three').toggleClass('genplan-map-stage-act')
})

$('.queue-floor-four').on('click', function () {
    $('.genplan-map-stage-four').toggleClass('genplan-map-stage-act')
})






$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this), $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    let accordion = new Accordion($('#accordion'), false);
});










$('.price-ascending-click').on('click', function () {
    $(this).parent().toggleClass('price-ascending-act');
})


$('.price-ascending-down li').on('click', function () {
    $('.price-ascending').removeClass('price-ascending-act');
})
















$('.open_modal').on('click', function () {
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);
    modal.removeClass('out');
    modal.fadeIn();
    $('body').addClass('body-hidd');
});

$('.close').on('click', function () {
    $('body').removeClass('body-hidd');
    let prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});


$(window).on('click', function (event) {
    $('.modal').each(function () {

        let gtattr = $(this).attr('id');
        let new_mod = $('#' + gtattr);
        let md_cnt = $(new_mod).find('.modal-content');
        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $('body').removeClass('body-hidd');

                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
        if (event.target === this) {
            setTimeout(function () {
                $('body').removeClass('body-hidd');

                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
    })
});


document.querySelectorAll('.favorable-box').forEach(box => {
    box.addEventListener('click', () => {
        // 1. Получаем элементы внутри карточки
        const imgSrc = box.querySelector('img').getAttribute('src');
        const date = box.querySelector('.favorable-data')?.textContent || '';
        const title = box.querySelector('h4')?.textContent || '';
        const text = box.querySelector('p')?.textContent || '';
        const dataNew = box.querySelector('.favorable-desc span')?.textContent || '';

        // 2. Находим модальное окно
        const modal = document.getElementById('favorable');
        const modalPhoto = modal.querySelector('.favorable-photo');
        const modalText = modal.querySelector('.favorable-modal-text');

        // 3. Заполняем содержимое модалки
        modalPhoto.innerHTML = `
      <span class="favorable-data">${date}</span>
      <img src="${imgSrc}" alt="favorable">
    `;

        modalText.innerHTML = `
      <span>${dataNew}</span>
      <h4>${title}</h4>
      <p>${text}</p>
    `;

        // 4. Показываем модалку
        modal.classList.add('active');
    });
});






document.addEventListener("DOMContentLoaded", () => {
    const cookieBlock = document.querySelector(".cookie");
    const acceptBtn = document.querySelector(".cookie__btn");

    // Показываем баннер, если не было принятия
    if (!localStorage.getItem("cookieAccepted")) {
        cookieBlock.style.display = "flex";
    } else {
        cookieBlock.style.display = "none";
    }

    // При нажатии — скрываем и сохраняем в localStorage
    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookieAccepted", "true");
        cookieBlock.style.display = "none";
    });
});












const lastSlot = ' ипотека'
const mortgageTypes = {
    FAMILY: 'Семейная', STANDARD: 'Стандартная', IT: "IT", SUBSIDIZED: "Субсидированная"
}
let selectedMortgages = [mortgageTypes.FAMILY, mortgageTypes.STANDARD];
const mortgageList = [mortgageTypes.FAMILY, mortgageTypes.STANDARD, mortgageTypes.IT, mortgageTypes.SUBSIDIZED];
const calcDropDown = document.querySelector('.calculate-menu');

if (calcDropDown) {
    const dropDownHeader = calcDropDown.querySelector('.calculate-menu-click')
    const dropDownBody = calcDropDown.querySelector('.calculate-menu-drop')
    const mortgageListElement = document.querySelector('.mortgage-list');
    const mortgageTableListElement = document.querySelector('.mortgage-table');

    const handleUpdateDropDown = (selectedList) => {
        const fistElements = selectedList.slice(0, 2)
        const lastElement = selectedList.slice(2, selectedList.length);
        dropDownHeader.innerHTML = ''
        fistElements.forEach((elem) => {
            const selectedItem = document.createElement('span');
            selectedItem.innerText = elem
            const closeIcon = document.createElement('i')
            closeIcon.className = 'close-calc-filter'
            closeIcon.addEventListener('click', (e) => {
                e.stopPropagation()
                handleDelete(elem)
            })
            selectedItem.append(closeIcon)
            dropDownHeader.append(selectedItem)
        })
        const lastElementCount = document.createElement('div')
        lastElementCount.innerText = `+${lastElement.length}`
        if (lastElement.length) {
            dropDownHeader.append(lastElementCount)
        }
    }

    const handleGenerateBody = (list) => {
        dropDownBody.innerHTML = ''
        list.forEach((elem) => {
            const menuItem = document.createElement('li');
            menuItem.classList.add('family-mortgage-data');
            menuItem.innerHTML = `<span class="checkbox-calc"></span> ${elem}${lastSlot}`
            menuItem.setAttribute('data-name', elem)
            dropDownBody.append(menuItem)
            menuItem.addEventListener('click', (e) => {
                e.stopPropagation()
                const arr = selectedMortgages
                const selectedIndex = arr.indexOf(elem)
                if (selectedIndex >= 0) {
                    if (arr.length > 1) {
                        arr.splice(selectedIndex, 1)
                    }
                } else {
                    arr.push(elem)
                }
                handleUpdateActiveItems(arr)
                handleUpdateDropDown(arr)
                handleUpdateContainer(arr)
                selectedMortgages = arr
            })
        })
    }

    const handleUpdateActiveItems = (arr) => {
        const htmlList = dropDownBody.querySelectorAll('li');
        htmlList.forEach((item) => {
            const datasetElem = item.dataset.name
            if (arr.includes(datasetElem)) {
                item.classList.add('calculate-sel')
            } else {
                item.classList.remove('calculate-sel')
            }
        })
    }

    const handleDelete = (element) => {
        const index = selectedMortgages.indexOf(element)
        if (index > -1) {
            if (selectedMortgages.length > 1) {
                selectedMortgages.splice(index, 1)
            }
            handleUpdateDropDown(selectedMortgages)
            handleUpdateActiveItems(selectedMortgages)
            handleUpdateContainer(selectedMortgages)
        }
    }

    const handleUpdateContainer = (list) => {
        mortgageListElement.innerHTML = ''
        if (list.length === 1 && list[0] === mortgageTypes.SUBSIDIZED) {
            dropDownHeader.classList.add('mortgage-one-name')
            mortgageTableListElement.classList.add('mortgage-table-show')
            mortgageListElement.classList.remove('mortgage-list-show')
        } else {
            mortgageTableListElement.classList.remove('mortgage-table-show')
            mortgageListElement.classList.add('mortgage-list-show')
            dropDownHeader.classList.remove('mortgage-one-name')

        }
        if (list.length === 1 && list[0] ) {
            dropDownHeader.classList.add('mortgage-one-name')
        } else {
            dropDownHeader.classList.remove('mortgage-one-name')
        }
        list.forEach((elem) => {
            const listItem = document.createElement('div');
            listItem.classList.add('family-mortgage');
            if (list.length > 2) {
                listItem.classList.add('small-variant');
            }
            listItem.innerHTML = `
                <span class="bid-mortg">ставка 5,5%</span>
                <div class="family-mortgage-cnt">
                    <h4>${elem} ипотека</h4>
                    <div class="family-mortgage-coll">
                        <div class="mortgage-price G-flex-column">
                            <p>Первый взнос</p>
                            <strong>20.01%</strong>
                        </div>
                        <div class="mortgage-price G-flex-column">
                            <p>Ежемесячный платеж</p>
                            <strong>23 834 ₽</strong>
                        </div>
                        <div class="mortgage-price G-flex-column">
                            <p>Срок ипотеки</p>
                            <strong>до 15 лет</strong>
                        </div>
                    </div>
                </div>
                <div class="family-mortgage-flex ">
                    <div class="family-mortgage-logos G-align-center">
                        <div class="family-mortgage-photo G-flex">
                            <img src="./assets/img/logos-1.png" alt="logos">
                        </div>
                        <div class="family-mortgage-photo G-flex">
                            <img src="./assets/img/logos-2.png" alt="logos">
                        </div>
                        <div class="family-mortgage-photo G-flex">
                            <img src="./assets/img/logos-3.png" alt="logos">
                        </div>
                        <div class="family-mortgage-photo G-flex">
                            <img src="./assets/img/logos-4.png" alt="logos">
                        </div>
                        <div class="family-mortgage-photo G-flex">
                            <img src="./assets/img/logos-5.png" alt="logos">
                        </div>
                        <div class="family-mortgage-photo G-flex">
                            <img src="./assets/img/logos-6.png" alt="logos">
                        </div>
                        <div class="family-mortgage-photo G-flex">
                            <img src="./assets/img/logos-7.png" alt="logos">
                        </div>
                        <div class="mortgage-count G-center">
                            <span>+5</span>
                        </div>
                    </div>
                    <div class="family-mortgage-price G-align-center">
                        <div class="family-mortgage-icons">
                            <i class="icon-arrow-top"></i>
                        </div>
                        <span>Меньше на 71 .042 ₽</span>
                    </div>
                </div>
            `

            mortgageListElement.appendChild(listItem)
        })
    }

    handleUpdateDropDown(selectedMortgages)
    handleGenerateBody(mortgageList)
    handleUpdateActiveItems(selectedMortgages)
    handleUpdateContainer(selectedMortgages)
}


$('.calculate-menu-click').on('click', function (e) {
    $(this).parent().toggleClass('calculate-menu-act');
    e.stopPropagation();
});

$('.calculate-menu-drop').on('click', function (e) {
    e.stopPropagation();
});

$(window).on('click', function (e) {
    let menuCalc = $('.calculate-menu');
    if (e.target !== menuCalc) {
        menuCalc.removeClass('calculate-menu-act');
    }
});


$('.construction-menu ul li').on('click', function () {
    $('.construction-menu li').removeClass('construction-act')
    $(this).addClass('construction-act')
})


























function updateSlider(minId, maxId, displayId, trackId, unit = '', divider = 1) {
    const minEl = document.getElementById(minId);
    const maxEl = document.getElementById(maxId);
    const displayEl = document.getElementById(displayId);
    const track = document.getElementById(trackId);

    function update() {
        let min = parseFloat(minEl.value);
        let max = parseFloat(maxEl.value);
        if (min > max) [min, max] = [max, min];
        displayEl.textContent = `${min / divider}${unit} - ${max / divider}${unit}`;

        const range = parseFloat(minEl.max) - parseFloat(minEl.min);
        const left = ((min - parseFloat(minEl.min)) / range) * 100;
        const right = ((max - parseFloat(minEl.min)) / range) * 100;

        track.style.left = left + '%';
        track.style.width = (right - left) + '%';
    }

    minEl.addEventListener('input', update);
    maxEl.addEventListener('input', update);
    update();
}

updateSlider('price-min', 'price-max', 'price-val', 'price-track');
updateSlider('sqm-min', 'sqm-max', 'sqm-val', 'sqm-track');
updateSlider('area-min', 'area-max', 'area-val', 'area-track');
updateSlider('floor-min', 'floor-max', 'floor-val', 'floor-track');























$('.family-mortgage').on('click', function () {
    $('.family-mortgage').addClass('standard-opacity')
    $(this).removeClass('standard-opacity')
})


$('.filter-param-count').on('click', function () {
    $(this).toggleClass('filter-param-count-act')
})










$('.time-call-click').on('click', function (e) {
    $(this).parent().toggleClass('time-call-act');
    e.stopPropagation();
});

$('.time-call-drop ul li').on('click', function () {
    $('.time-call').removeClass('time-call-act')
    let selected_text = $(this).html();
    $('.time-call-click ').html(selected_text);
});
$(window).on('click', function (e) {
    let timeCall = $('.time-call');
    if (e.target !== timeCall) {
        timeCall.removeClass('time-call-act');
    }
});







$('.open-filter').on('click', function () {
    $('.commercial-filter').addClass('commercial-filter-open')
    $('body').addClass('body-hidden')


})

$('.close-filter').on('click', function () {
    $('.commercial-filter').removeClass('commercial-filter-open')
    $('body').removeClass('body-hidden')
})

