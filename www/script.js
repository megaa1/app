function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    } else {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    }
}

// Close when clicking overlay
document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.onclick = function () {
            toggleMenu();
        };
    }
});
