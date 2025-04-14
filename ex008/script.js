document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');

    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
});

function adjustTextSize() {
    const textElements = document.querySelectorAll('.responsive-text');
    textElements.forEach(element => {
        const screenWidth = window.innerWidth;
        if ( screenWidth >= 1024) {
            element.style.fontSize = '1.5rem';
        } else if (screenWidth >= 600) {
            element.style.fontSize = '1.25rem';
        } else {
            element.style.fontSize = '1rem';
        }
    });
}

window.addEventListener('resize', adjustTextSize);
window.addEventListener('DOMContentLoaded', adjustTextSize);