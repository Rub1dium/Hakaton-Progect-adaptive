/* Появление элементов если они есть на экране */
function onEntry(entry) {
    entry.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('objCon-show')
        }
    });
}

let options = { threshold: [.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.con');

for (let elm of elements) {
    observer.observe(elm)
}