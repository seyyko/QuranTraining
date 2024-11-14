const menuBtn = document.querySelector('.menu');
const upperLayer = document.querySelector('.upper-layer');
const lowerLayer = document.querySelector('.lower-layer');
const floatingMenu = document.querySelector('.floating-menu');

const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

function changeBg(color) {
    upperLayer.style.background = color;
    lowerLayer.style.background = color;
}

function floatmenuAnimation(y, op){
    floatingMenu.style.top = y;
    floatingMenu.style.opacity = op;
}

function toggle() {
    if (menuBtn.classList[1] == 'menu-closed') {
        menuBtn.classList.remove('menu-closed');
        menuBtn.classList.add('menu-opened');

        changeBg("var(--menu-close-color)");

        floatmenuAnimation('65px', '1');

    } else{
        menuBtn.classList.remove('menu-opened');
        menuBtn.classList.add('menu-closed');

        changeBg("var(--background-tertiary)");

        floatmenuAnimation('15px', '0');
    }
}

// Appliquer le thème sauvegardé au chargement de la page
if (currentTheme === 'light') {
    document.documentElement.classList.add('light-mode');
}

themeToggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode');

    // Sauvegarder la préférence de l'utilisateur
    const theme = document.documentElement.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
});