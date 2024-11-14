const menuBtn = document.querySelector('.menu');
const upperLayer = document.querySelector('.upper-layer');
const lowerLayer = document.querySelector('.lower-layer');

function changeBg(color) {
    upperLayer.style.background = color;
    lowerLayer.style.background = color;
}

function toggle() {
    if (menuBtn.classList[1] == 'menu-closed') {
        menuBtn.classList.remove('menu-closed');
        menuBtn.classList.add('menu-opened');
        changeBg("var(--header-bg-quaternary)");
    } else{
        menuBtn.classList.remove('menu-opened');
        menuBtn.classList.add('menu-closed');
        changeBg("var(--header-bg-tertiary)");
    }
}