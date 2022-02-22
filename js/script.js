const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let sectionIndex = 0;

function reset() {
    for (let i = 0; i < slider.children.length; i++) {
        slider.children[i].style.opacity = 0;
        slider.children[i].style.zIndex = 0;
    }
}
let intervalId = 0;

function startSlideShow() {
    intervalId = setInterval(function () {
        reset();
        sectionIndex = (sectionIndex < 4) ? sectionIndex + 1 : 4;
        slider.children[sectionIndex].style.zIndex = 2;
        slider.children[sectionIndex].style.opacity = 1;
    }, 5000)
}

startSlideShow()

carousel.addEventListener('mouseover', () => {
    clearInterval(intervalId);
})
carousel.addEventListener('mouseout', () => {
    startSlideShow()
})

next.addEventListener('click', function (e) {
    reset();
    sectionIndex = (sectionIndex < 4) ? sectionIndex + 1 : 4;

    slider.children[sectionIndex].style.zIndex = 2;
    slider.children[sectionIndex].style.opacity = 1;
});

prev.addEventListener('click', function () {
    reset();
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.children[sectionIndex].style.zIndex = 2;
    slider.children[sectionIndex].style.opacity = 1;
});