/* Случайное появление мусора */
function RandoMizer() {
    let RandNum = Math.ceil(Math.random() * 15);

    for (let item of Trash__itemTrash) {
        item.style.animationIterationCount = 0;
        item.style.pointerEvents = "all";
        item.style.cursor = "pointer";
    }

    console.log("check");

    $(".Trash__item-trash").appendTo($(".Trash__item-trash").parent());

    if (RandNum == 3) {
        Trash__itemTrash[0].style.opacity = .2;
        Trash__itemTrash[0].style.animationIterationCount = 1;
    }
    else if (RandNum == 6) {
        Trash__itemTrash[1].style.opacity = .2;
        Trash__itemTrash[1].style.animationIterationCount = 1;
    }
    else if (RandNum == 9) {
        Trash__itemTrash[2].style.opacity = .2;
        Trash__itemTrash[2].style.animationIterationCount = 1;
    }
    else if (RandNum == 12) {
        Trash__itemTrash[3].style.opacity = .2;
        Trash__itemTrash[3].style.animationIterationCount = 1;
    }
    else if (RandNum == 15) {
        Trash__itemTrash[4].style.opacity = .2;
        Trash__itemTrash[4].style.animationIterationCount = 1;
    }
}


/* Прослушка скролла */
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    metres = Math.round((scrollY - PDIndicatorSTART) / 20);

    /* Изменение индикатора глубны */
    if (window.scrollY > PDIndicatorSTART) {
        Content__indicator.add("Content__indicator_visible")
        Content__indicatorText.textContent = metres + ' МЕТРОВ ГЛУБИНА';
    } else {
        Content__indicator.remove("Content__indicator_visible")

    }

    /* Скрыть индикатор */
    if (window.scrollY > PDIndicatorEND) {
        Content__indicator.remove("Content__indicator_visible");
    }

    /* Появление пузырьков в воде */
    if (window.scrollY > PDBublsSTART) {
        Bubl__image[0].style.opacity = ".4";
        Bubl__image[1].style.opacity = ".4";
    } else {
        Bubl__image[0].style.opacity = "0";
        Bubl__image[1].style.opacity = "0";
    }

    /* Скрыть пузырьки в воде */
    if (window.scrollY > PDIndicatorEND) {
        Bubl__image[0].style.opacity = "0";
        Bubl__image[1].style.opacity = "0";
    } else {
        Bubl__image[0].style.opacity = ".4";
        Bubl__image[1].style.opacity = ".4";
    }

    /* Остановка анимации (предположительно для оптимизации) */
    if (window.scrollY < PDOffAnim) {
        Wavebubls.style.animationIterationCount = "infinite";
        Wave__item[0].style.animationIterationCount = "infinite";
        Wave__item[1].style.animationIterationCount = "infinite";
        Wave__item[2].style.animationIterationCount = "infinite";
        Wave__item[3].style.animationIterationCount = "infinite"
    } else {
        Wavebubls.style.animationIterationCount = 0;
        Wave__item[0].style.animationIterationCount = 0;
        Wave__item[1].style.animationIterationCount = 0;
        Wave__item[2].style.animationIterationCount = 0;
        Wave__item[3].style.animationIterationCount = 0;
    }

    /* Появление "кармы" && исчезновение "кармы" */
    if (ClientWidth = 425) {
        KarmaBlock.style.visibility = "hidden";
        KarmaCounter.style.opacity = 0;
    }
    else if (metres > 35) {
        KarmaBlock.style.visibility = "visible";
        KarmaCounter.style.opacity = 1;
    } else {
        KarmaBlock.style.visibility = "hidden";
        KarmaCounter.style.opacity = 0;
    }

    /* Появление мусора && Скрыть мусор */
    if (ClientWidth == 425) {
        for (let item of Trash__itemTrash) {
            item.style.animationIterationCount = 0;
            item.style.pointerEvents = "none";
            item.style.cursor = "alias";
            item.style.opacity = 0
        }

        clearInterval(timerID1);
        start = false;
    }
    else if (metres > 35 && start == false) {
        timerID1 = setInterval(RandoMizer, 7000);
        start = true;
    } else if ((metres < 35 || metres > 3825) && start == true) {
        for (let item of Trash__itemTrash) {
            item.style.animationIterationCount = 0;
            item.style.pointerEvents = "none";
            item.style.cursor = "alias";
            item.style.opacity = 0
        }

        clearInterval(timerID1);
        start = false;
    }

});

