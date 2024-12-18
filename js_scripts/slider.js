document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        // Отключаем режим бесконечного слайдера
        loop: false,
        spaceBetween: 30,
        slidesPerView: 1,

        autoplay: {
            delay: 2000,
            // Не останавливать автопрокрутку при взаимодействии с пользователем
            disableOnInteraction: false,
        },

        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});
