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

    // Добавляем поведение появления/исчезновения секций при скролле
    const contentSections = document.querySelectorAll('.content, .services, .about');

    const handleScroll = () => {
        contentSections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionPosition < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            } else {
                section.style.opacity = '0';
                section.style.transform = 'translateY(60px)';
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Появление при загрузке страницы
});
