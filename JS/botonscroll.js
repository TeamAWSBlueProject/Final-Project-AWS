document.addEventListener('DOMContentLoaded', function() {
    var goTopBtn = document.getElementById('goTopBtn');

    // Show the button when the page is scrolled down
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goTopBtn.style.display = 'block';
        } else {
            goTopBtn.style.display = 'none';
        }
    };

    // Scroll to the top when the button is clicked
    goTopBtn.addEventListener('click', function() {
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});