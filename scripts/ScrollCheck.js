/* Случайное появление мусора */
function RandoMizer() {
    let RandNum = Math.ceil(Math.random() * 15);

    for (let item of objTrash) {
        item.style.animationIterationCount = 0;
    }

    $(".Trash__item-trash").appendTo($(".Trash__item-trash").parent());

    if (RandNum == 3) {
        trash1.style.opacity = .2;
        trash1.style.animationIterationCount = 1;
    }
    else if (RandNum == 6) {
        trash2.style.opacity = .2;
        trash2.style.animationIterationCount = 1;
    }
    else if (RandNum == 9) {
        trash3.style.opacity = .2;
        trash3.style.animationIterationCount = 1;
    }
    else if (RandNum == 12) {
        trash4.style.opacity = .2;
        trash4.style.animationIterationCount = 1;
    }
    else if (RandNum == 15) {
        trash5.style.opacity = .2;
        trash5.style.animationIterationCount = 1;
    }
}

/* Определение переменных */
let objTrash = document.querySelectorAll('.Trash__item-trash');
let trash1 = document.querySelector('.Trash__item-trash-1');
let trash2 = document.querySelector('.Trash__item-trash-2');
let trash3 = document.querySelector('.Trash__item-trash-3');
let trash4 = document.querySelector('.Trash__item-trash-4');
let trash5 = document.querySelector('.Trash__item-trash-5');

let start = false;
let timerID;

let waveGray = document.querySelector('.Wave__item-gray');
let waveBlue = document.querySelector('.Wave__item-blue');
let waveWhite = document.querySelector('.Wave__item-white');
let waveWhiteOP = document.querySelector('.Wave__item-whiteOP');
let waveBubls = document.querySelector('.Wave-bubls');

let bublFirst = document.querySelector(".Bubl__image-first");
let bublSecond = document.querySelector(".Bubl__image-second");

let indicator = document.querySelector(".Content__indicator").classList;
let indicatorText = document.querySelector('.Content__indicator');


$(document).ready(function() {
    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
        delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
        if (delta >= 0) {
            $('#result').html('Вверх');
        } else {
            $('#result').html('Вниз');
        }
    });
})


/* Прослушка скролла */
window.addEventListener('scroll', () => {
    let metres = Math.round((window.scrollY - 460) / 20);

    /* Изменение индикатора глубны */
    if (window.scrollY > 460) {
        indicator.add("Content__indicator_visible")
        indicatorText.textContent = metres + ' МЕТРОВ ГЛУБИНА';
    } else {
        indicator.remove("Content__indicator_visible")

    }

    /* Скрыть индикатор */
    if (window.scrollY > 77160) {
        indicator.remove("Content__indicator_visible");
    }

    /* Появление пузырьков в воде */
    if (window.scrollY > 1000) {
        bublFirst.style.opacity = ".4";
        bublSecond.style.opacity = ".4";
    } else {
        bublFirst.style.opacity = "0";
        bublSecond.style.opacity = "0";
    }

    /* Скрыть пузырьки в воде */
    if (window.scrollY > 77500) {
        bublFirst.style.opacity = "0";
        bublSecond.style.opacity = "0";
    } else {
        bublFirst.style.opacity = ".4";
        bublSecond.style.opacity = ".4";
    }

    /* Остановка анимации (предположительно для оптимизации) */
    if (window.scrollY < 1200) {
        waveBubls.style.animationIterationCount = "infinite";
        waveGray.style.animationIterationCount = "infinite";
        waveBlue.style.animationIterationCount = "infinite";
        waveWhite.style.animationIterationCount = "infinite";
        waveWhiteOP.style.animationIterationCount = "infinite"
    } else {
        waveBubls.style.animationIterationCount = 0;
        waveGray.style.animationIterationCount = 0;
        waveBlue.style.animationIterationCount = 0;
        waveWhite.style.animationIterationCount = 0;
        waveWhiteOP.style.animationIterationCount = 0;
    }

    /* Появление мусора && Скрыть мусор */
    if (metres > 250 && start == false) {
        timerID = setInterval(RandoMizer, 7000);
        start = true;
    } else if ((metres < 250 || metres > 3825) && start == true) {
        for (let item of objTrash) {
            item.style.animationIterationCount = 1;
            item.style.opacity = 0
        }

        clearInterval(timerID);
        start = false;
    }

});

