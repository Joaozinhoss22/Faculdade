let gallery = document.querySelector('.gallery');
let startX;
let currentTranslate = 0;
let prevTranslate = 0;
let dragging = false;


gallery.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    dragging = true;
});

gallery.addEventListener('touchmove', (e) => {
    if (!dragging) return;
    let touchX = e.touches[0].clientX;
    currentTranslate = prevTranslate + touchX - startX;
    gallery.style.transform = `translateX(${currentTranslate}px)`;
});

gallery.addEventListener('touchend', () => {
    prevTranslate = currentTranslate;
    dragging = false;
});