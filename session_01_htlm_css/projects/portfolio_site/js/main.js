document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.skill-progress').forEach(function (element) {
        const width = element.dataset.width;
        element.style.width = width;
    });

    document.querySelectorAll('.nav a').forEach(function (link) {
        link.addEventListener('click', function () {
            const menuToggle = document.getElementById('menu-toggle');
            if (menuToggle && menuToggle.checked) {
                menuToggle.checked = false;
            }
        });
    });
});
