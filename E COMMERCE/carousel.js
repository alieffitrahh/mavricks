document.addEventListener("DOMContentLoaded", function() {
    const carouselContainer = document.querySelector(".carousel-container");
    const carouselSlides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.querySelector(".carousel-prev");
    const nextBtn = document.querySelector(".carousel-next");

    let slideIndex = 0;

    function showSlides() {
        carouselContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    function nextSlide() {
        if (slideIndex >= carouselSlides.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        showSlides();
    }

    function prevSlide() {
        if (slideIndex <= 0) {
            slideIndex = carouselSlides.length - 1;
        } else {
            slideIndex--;
        }
        showSlides();
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    setInterval(nextSlide, 3000);
});