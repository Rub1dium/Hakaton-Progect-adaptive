/* Убрать блокировщик при нажатии на кнопку */
Blocker__button.addEventListener("click", () => {
    Block_blocker.style.visibility = "hidden";
    html.style.overflowY = "scroll";
});