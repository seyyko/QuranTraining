const menuBtn = document.querySelector('.menu');
const upperLayer = document.querySelector('.upper-layer');
const lowerLayer = document.querySelector('.lower-layer');
const floatingMenu = document.querySelector('.floating-menu');

const currentTheme = localStorage.getItem('theme');


function changeBg(color) {
    upperLayer.style.background = color;
    lowerLayer.style.background = color;
}


function floatmenuAnimation(y, op, v){
    floatingMenu.style.top = y;
    floatingMenu.style.opacity = op;
    floatingMenu.style.visibility = v;
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

        floatmenuAnimation('-10px', '0', 'hidden');
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


function changeFontSize(size) {
    // Appliquer la taille de police au body
    document.body.style.fontSize = size + 'px';

    // Afficher la valeur actuelle du slider
    document.getElementById('font-size-value').textContent = size + 'px';

    // Sauvegarder la taille dans localStorage
    localStorage.setItem('fontSize', size);
}

// Charger la taille de police sauvegardée au chargement de la page
function loadFontSize() {
    const savedSize = localStorage.getItem('fontSize') || '16';
    document.getElementById('font-size-slider').value = savedSize;
    changeFontSize(savedSize);
}

document.addEventListener('DOMContentLoaded', loadFontSize);