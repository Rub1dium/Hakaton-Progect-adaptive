/* Случайное появление мусора */
function RandoMizer() {
    let RandNum = Math.ceil(Math.random() * 15);

    for (let item of objTrash) {
        item.style.animationIterationCount = 0;
    }

    $(".obj-trash").appendTo($(".obj-trash").parent());

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
let objTrash = document.querySelectorAll('.obj-trash');
let trash1 = document.querySelector('.Trash-1');
let trash2 = document.querySelector('.Trash-2');
let trash3 = document.querySelector('.Trash-3');
let trash4 = document.querySelector('.Trash-4');
let trash5 = document.querySelector('.Trash-5');

let start = 0;
let timerID;

let waveGray = document.querySelector('.Wave-Gray');
let waveBlue = document.querySelector('.Wave-Blue');
let waveWhite = document.querySelector('.Wave-White');
let waveBubls = document.querySelector('.Wave-Bubls');

let bublFirst = document.querySelector(".Bubl-first");
let bublSecond = document.querySelector(".Bubl-second");

let indicator = document.querySelector(".Indicator").classList;
let indicatorText = document.querySelector('.Indicator');


/* Прослушка скролла */
window.addEventListener('scroll', () => {
    let metres = Math.round((window.scrollY - 460) / 20);

    /* Изменение индикатора глубны */
    if (window.scrollY > 456) {
        indicator.add("Indicator-Show");
        indicatorText.textContent = metres + ' МЕТРОВ ГЛУБИНА';
    } else {
        indicator.remove("Indicator-Show");
    }

    /* Скрыть индикатор */
    if (window.scrollY > 77160) {
        indicator.remove("Indicator-Show");
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
    } else {
        waveBubls.style.animationIterationCount = 0;
        waveGray.style.animationIterationCount = 0;
        waveBlue.style.animationIterationCount = 0;
        waveWhite.style.animationIterationCount = 0;
    }

    /* Появление мусора && Скрыть мусор */
    if (metres > 250 && start == 0) {
        timerID = setInterval(RandoMizer, 7000);
        start = 1;
    } else if (metres < 250 || metres > 3825 && start == 1) {
        for (let item of objTrash) {
            item.style.animationIterationCount = 1;
            item.style.opacity = 0
        }

        clearInterval(timerID);
        console.log("off");
        start = 0;
    }

});

