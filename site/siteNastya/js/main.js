// Мобильное меню
document.querySelector('.mobile-menu-button').addEventListener('click', function() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('hidden');
});

// Активная страница в навигации
const currentPage = location.pathname.split('/').pop();
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});