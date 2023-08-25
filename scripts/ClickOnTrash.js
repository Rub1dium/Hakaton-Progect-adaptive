
Trash__itemTrash.forEach((item) => {
    item.addEventListener("click", () => {
        KarmaCounter.textContent = "Счетчик кармы +" + ++KarmaNum;
        item.style.opacity = 0;
        item.style.pointerEvents = "none";
        item.style.cursor = "alias";

        ClickSound.play();
        CheckAchievements(KarmaNum);
    });
})
