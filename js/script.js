document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    const overlay = document.getElementById('overlay');

    if (burger && nav && overlay) {
        const toggleMenu = () => {
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
            burger.classList.toggle('active'); // Добавляем класс для бургер-меню, чтобы изменить его состояние
        };

        burger.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
    } else {
        console.error('Не удалось найти элементы бургер-меню, навигации или overlay.');
    }
});
