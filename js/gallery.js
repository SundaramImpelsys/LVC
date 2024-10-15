function changeFilter(filter) {
    const images = document.querySelectorAll('.gallery-image');
    images.forEach(img => {
        img.classList.remove('sepia', 'black-and-white');
        if (filter === 'sepia') {
            img.classList.add('sepia');
        } else if (filter === 'bw') {
            img.classList.add('black-and-white');
        }
    });
}