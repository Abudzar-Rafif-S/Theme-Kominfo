const carousel = document.getElementById('news-carousel');
let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.news-carousel-item');
    const itemsToShow = Math.floor(carousel.offsetWidth / items[0].offsetWidth);
    const totalItems = items.length;
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - itemsToShow;
    } else if (currentIndex >= totalItems - itemsToShow + 1) {
        currentIndex = 0;
    }

    const offset = -currentIndex * (items[0].offsetWidth + 5);
    carousel.style.transform = `translateX(${offset}px)`;
}