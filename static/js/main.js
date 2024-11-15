const menuBtn = document.querySelector('.menu');
const upperLayer = document.querySelector('.upper-layer');
const lowerLayer = document.querySelector('.lower-layer');
const floatingMenu = document.querySelector('.floating-menu');

const currentTheme = localStorage.getItem('theme');


function changeBg(color) {
    upperLayer.style.background = color;
    lowerLayer.style.background = color;
}


function floatmenuAnimation(pos, opa, vis){
    floatingMenu.style.transform = `translateY(${pos})`;
    // floatingMenu.style.filter = `blur(${blur})`;
    floatingMenu.style.opacity = opa;
    floatingMenu.style.visibility = vis;
}


function toggle() {
    if (menuBtn.classList[1] == 'menu-closed') {
        menuBtn.classList.remove('menu-closed');
        menuBtn.classList.add('menu-opened');

        changeBg("var(--menu-close-color)");

        floatmenuAnimation('0px', '1', 'visible');

    } else{
        menuBtn.classList.remove('menu-opened');
        menuBtn.classList.add('menu-closed');

        changeBg("var(--background-tertiary)");

        floatmenuAnimation('-100px', '0', 'hidden');
    }
}


if (currentTheme === 'light') {
    document.documentElement.classList.add('light-mode');
}


function toggleTheme() {
    document.documentElement.classList.toggle('light-mode');
    const theme = document.documentElement.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
}


function deleteUserData() {
    if (confirm("Are you sure you want to delete all your data? This action cannot be undone.")) {
        localStorage.clear();
        alert("All your data has been deleted.");
        location.reload();
    }
}