/* Появление элементов если они есть на экране */
function onEntry(entry) {
    entry.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('Content__div_visible')
        }
    });
}

/* Настройки */
let options = { threshold: [.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.Content__div');

for (let elm of elements) {
    observer.observe(elm)
}