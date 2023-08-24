
Trash__itemTrash.forEach((item) => {
    item.addEventListener("click", () => {
        KarmaCounter.textContent = "Счетчик кармы +" + (KarmaNum += 1);
        item.style.opacity = 0;
        item.style.pointerEvents = "none";
        item.style.cursor = "alias";
    });
})
