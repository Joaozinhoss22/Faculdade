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





let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i ++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}

setInterval(() =>{
    showSlides(slideIndex += 1);
}, 5000);