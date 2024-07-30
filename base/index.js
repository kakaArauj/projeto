let currentIndex = 0;
let autoSlideInterval;
const slideInterval = 3000;

function showSlide(index) {
    // const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = 3;
    
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    
    const offset = -currentIndex * 900; // Largura das imagens
    document.querySelector('.carousel-culinaria').style.transform = `translateX(${offset}px)`;
    document.querySelector('.carousel-artesanato').style.transform = `translateX(${offset}px)`;
    document.querySelector('.carousel-festas').style.transform = `translateX(${offset}px)`;
    document.querySelector('.carousel-turismo').style.transform = `translateX(${offset}px)`;
    
}

function moveSlide(step) {
    showSlide(currentIndex + step);
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        moveSlide(1); // Avança para o próximo slide
    }, slideInterval);
}

showSlide(currentIndex);
startAutoSlide();