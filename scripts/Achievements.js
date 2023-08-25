function HiddeAchievement() {
    setTimeout(() => {
        Achievement.style.bottom = "-4rem";
    }, 3000);
}

function CheckAchievements(KarmaNum) {
    if (KarmaNum == 1) {
        Achievement.textContent = "Очистить океан ✅"
        Achievement.style.bottom = "0rem";
        AchievementSound.play();
        HiddeAchievement();
    }
    else if (KarmaNum == 10) {
        Achievement.textContent = "Очистить океан от 10 мусора ✅";
        Achievement.style.fontSize = "12px";
        Achievement.style.bottom = "0rem";
        AchievementSound.play();
        HiddeAchievement();
    }
}

