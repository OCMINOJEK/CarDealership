(function() {
    // Сохраняем время начала загрузки
    const startTime = performance.now();

    // Функция для добавления статистики загрузки в футер
    function addLoadStats() {
        const endTime = performance.now();
        const loadTime = (endTime - startTime).toFixed(2);

        const footer = document.querySelector('footer');
        const statsElement = document.createElement('div');
        statsElement.className = 'load-stats';
        statsElement.innerHTML = `Время загрузки страницы: ${loadTime} мс`;

        if (footer) {
            footer.appendChild(statsElement);
        }
    }

    // Функция для определения текущей страницы и установки активного состояния
    function setActiveMenuItem() {
        const currentPath = window.location.pathname;
        const menuItems = document.querySelectorAll('.header__menu a');

        menuItems.forEach(item => {
            const href = item.getAttribute('href');
            if (currentPath.includes(href) ||
                (currentPath.endsWith('/') && href === 'index.html') ||
                (currentPath.endsWith('index.html') && href === 'index.html')) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Функция для добавления интерактивности меню
    function addMenuInteractivity() {
        const menuItems = document.querySelectorAll('.header__menu a');

        menuItems.forEach(item => {
            // Обработка наведения мыши
            item.addEventListener('mouseenter', () => {
                item.classList.add('hovered');
            });

            item.addEventListener('mouseleave', () => {
                item.classList.remove('hovered');
            });
        });
    }

    // Добавляем обработчики после загрузки DOM
    document.addEventListener('DOMContentLoaded', () => {
        setActiveMenuItem();
        addMenuInteractivity();
    });

    // Добавляем статистику после полной загрузки страницы
    window.addEventListener('load', addLoadStats);
})();

