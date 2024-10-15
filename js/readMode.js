
document.getElementById('readMore').addEventListener('click', function() {
    const text = document.getElementById('text');
    text.classList.toggle('expanded');
    this.textContent = text.classList.contains('expanded') ? 'Read Less' : 'Read More';
});