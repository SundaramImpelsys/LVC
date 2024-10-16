let lightbox = document.getElementById('lightbox');
let lightboxImage = lightbox.querySelector('img');
let currentImageIndex = 0;
let images = document.querySelectorAll('[data-toggle="lightbox"]');

images.forEach((image, index) => {
    image.addEventListener('click', (event) => {
        event.preventDefault();
        lightbox.style.display = 'flex';
        currentImageIndex = index;
        lightboxImage.src = image.href;
    });
});

document.querySelector('.lightbox-close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

document.querySelector('.lightbox-prev').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    lightboxImage.src = images[currentImageIndex].href;
});

document.querySelector('.lightbox-next').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    lightboxImage.src = images[currentImageIndex].href;
});