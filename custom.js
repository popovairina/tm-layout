window.addEventListener('DOMContentLoaded', function () {
    const ideasForm = document.querySelector('.ideas-form');
    const thankYouPopup = document.getElementById('thank-you-popup');
    const closePopups = Array.from(document.querySelectorAll('.popup-close'));

    ideasForm.addEventListener('submit', function (event) {
        event.preventDefault();
        thankYouPopup.classList.add('opened');
    })

    closePopups.forEach(function (closePopup) {
        closePopup.addEventListener('click', function (event) {
            const popup = event.target.closest('.overlay');
            popup.classList.remove('opened');
        });
    });
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.popup')) {
            thankYouPopup.classList.remove('opened');
        }
    });

});