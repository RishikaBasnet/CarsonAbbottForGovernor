// Opens and closes the mobile nav menu when the hamburger button is pressed
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.hamburger');
    var links = document.querySelector('.nav-links');

    if (!button || !links) {
        return;
    }

    button.addEventListener('click', function () {
        var isOpen = links.classList.toggle('open');
        button.setAttribute('aria-expanded', isOpen);
        button.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
});
