/* Случайное появление мусора */
function RandoMizer() {
    let RandNum = Math.ceil(Math.random() * 15);

    for (let item of Trash__itemTrash) {
        item.style.animationIterationCount = 0;
        item.style.pointerEvents = "all";
        item.style.cursor = "pointer";
    }

    $(".Trash__item-trash").appendTo($(".Trash__item-trash").parent());

    RandNum = 12;

    if (RandNum == 3) {
        Trash__itemTrash1.style.opacity = .2;
        Trash__itemTrash1.style.animationIterationCount = 1;
    }
    else if (RandNum == 6) {
        Trash__itemTrash2.style.opacity = .2;
        Trash__itemTrash2.style.animationIterationCount = 1;
    }
    else if (RandNum == 9) {
        Trash__itemTrash3.style.opacity = .2;
        Trash__itemTrash3.style.animationIterationCount = 1;
    }
    else if (RandNum == 12) {
        Trash__itemTrash4.style.opacity = .2;
        Trash__itemTrash4.style.animationIterationCount = 1;
    }
    else if (RandNum == 15) {
        Trash__itemTrash5.style.opacity = .2;
        Trash__itemTrash5.style.animationIterationCount = 1;
    }
}


/* Прослушка скролла */
window.addEventListener('scroll', () => {
    let metres = Math.round((window.scrollY - 460) / 20);

    /* Изменение индикатора глубны */
    if (window.scrollY > 460) {
        Content__indicator.add("Content__indicator_visible")
        Content__indicatorText.textContent = metres + ' МЕТРОВ ГЛУБИНА';
    } else {
        Content__indicator.remove("Content__indicator_visible")

    }

    /* Скрыть индикатор */
    if (window.scrollY > 77160) {
        Content__indicator.remove("Content__indicator_visible");
    }

    /* Появление пузырьков в воде */
    if (window.scrollY > 1000) {
        Bubl__imageFirst.style.opacity = ".4";
        Bubl__imageSecond.style.opacity = ".4";
    } else {
        Bubl__imageFirst.style.opacity = "0";
        Bubl__imageSecond.style.opacity = "0";
    }

    /* Скрыть пузырьки в воде */
    if (window.scrollY > 77500) {
        Bubl__imageFirst.style.opacity = "0";
        Bubl__imageSecond.style.opacity = "0";
    } else {
        Bubl__imageFirst.style.opacity = ".4";
        Bubl__imageSecond.style.opacity = ".4";
    }

    /* Остановка анимации (предположительно для оптимизации) */
    if (window.scrollY < 1200) {
        Wavebubls.style.animationIterationCount = "infinite";
        Wave__itemGray.style.animationIterationCount = "infinite";
        Wave__itemBlue.style.animationIterationCount = "infinite";
        Wave__itemWhite.style.animationIterationCount = "infinite";
        Wave__itemWhiteOP.style.animationIterationCount = "infinite"
    } else {
        Wavebubls.style.animationIterationCount = 0;
        Wave__itemGray.style.animationIterationCount = 0;
        Wave__itemBlue.style.animationIterationCount = 0;
        Wave__itemWhite.style.animationIterationCount = 0;
        Wave__itemWhiteOP.style.animationIterationCount = 0;
    }

    /* Появление "кармы" && исчезновение "кармы" */
    if (metres > 35) {
        KarmaCounter.style.opacity = 1;
    } else {
        KarmaCounter.style.opacity = 0;
    }

    /* Появление мусора && Скрыть мусор */
    if (metres > 150 && start == false) {
        timerID = setInterval(RandoMizer, 7000);
        start = true;
    } else if ((metres < 150 || metres > 3825) && start == true) {
        for (let item of Trash__itemTrash) {
            item.style.animationIterationCount = 1;
            item.style.opacity = 0
        }

        clearInterval(timerID);
        start = false;
    }

});

