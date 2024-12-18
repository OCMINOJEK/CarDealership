document.addEventListener('DOMContentLoaded', function () {
    // Экземпляр Swiper для элемента с классом swiper-container
    const swiper = new Swiper('.swiper-container', {
        // Отключаем режим бесконечной прокрутки
        loop: false,
        // Отступ между слайдами
        spaceBetween: 30,

        //настройка авто-пролистывания
        autoplay: {
            delay: 2000,
            // Не останавливать автопрокрутку при взаимодействии с пользователем
            disableOnInteraction: false,
        },
        //адаптация под разное разрешение
        breakpoints: {
            //для разрешения экрана 640 и больше
            640: {
                // Количество слайдов отображаемых одновременно
                slidesPerView: 1,
                spaceBetween: 10,
            },
            //для разрешения экрана 720 и больше
            720: {
                // Количество слайдов отображаемых одновременно
                slidesPerView: 2,
                // Отступ между слайдами
                spaceBetween: 20,
            },
            //для разрешения экрана 1024 и больше
            1024: {
                // Количество слайдов отображаемых одновременно
                slidesPerView: 3,
                // Отступ между слайдами
                spaceBetween: 30,
            },
        },
    });
});
