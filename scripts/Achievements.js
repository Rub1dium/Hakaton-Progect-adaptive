function HiddeAchievement() {
    clearTimeout(timerID2);
    timerID2 = setTimeout(() => {
        Achievement.style.bottom = "-5rem";
        setTimeout(() => { Achievement.textContent = ""; }, 400);
    }, 4000);
}

function SetText(text) {
    Achievement.textContent = text + " ✅"
    Achievement.style.bottom = "0rem";
    AchievementSound.play();
}

function CheckAchievements(KarmaNum) {
    if (KarmaNum == 1) {
        SetText("Очистить океан");
        HiddeAchievement();
    }
    else if (KarmaNum == 10) {
        SetText("«Junior Cleaner» - Очистить океан от 10 мусора");
        HiddeAchievement();
    }
    else if (KarmaNum == 25) {
        SetText("«Middle Cleaner» - Очистить океан от 25 мусора");
        HiddeAchievement();
    }

    else if (KarmaNum == 50) {
        SetText("«Senior Cleaner» - Очистить океан от 50 мусора");
        HiddeAchievement();
    }
}

window.addEventListener("scroll", () => {
    if (metres > 100 && CheckAMetres1 == false) {
        CheckAMetres1 = true
        SetText("«Ныряльщик любитель» - Преодолейте 100 метров");
        HiddeAchievement();
    }

    else if (metres > 500 && CheckAMetres2 == false) {
        CheckAMetres2 = true
        SetText("«А что если открыть окно?» - Преодолейте 500 метров");
        HiddeAchievement();
    }

    else if (metres > 1000 && CheckAMetres3 == false) {
        CheckAMetres3 = true
        SetText("«Я рыба удильщик» - Преодолейте 1000 метров");
        HiddeAchievement();
    }

    else if (metres > 2000 && CheckAMetres4 == false) {
        CheckAMetres4 = true
        SetText("«Глубокие Воды» - Преодолейте 2000 метров");
        HiddeAchievement();
    }

    else if (metres > 3000 && CheckAMetres5 == false) {
        CheckAMetres5  = true
        SetText("«Я космическая медуза» - Преодолейте 3000 метров");
        HiddeAchievement();
    }

    else if (metres > 3800 && CheckAMetres6 == false) {
        CheckAMetres6 = true
        SetText("«The End?» - Долистайте до конца сайта");
        HiddeAchievement();
    }
});

EasterEgg.addEventListener("mouseover", () => {
    if (CheckAEasterEgg) {

    } else {
        CheckAEasterEgg = true
        SetText("«Охотник за яйцами» - Найти пасхалку");
        HiddeAchievement();
    }
});