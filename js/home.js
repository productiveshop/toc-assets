document.addEventListener('DOMContentLoaded', function () {
    // POP-up
    const openPopupButton = document.getElementById('openPopup');
    const closePopupButton = document.getElementById('closePopup');
    const popup = document.getElementById('popup');
    const body = document.body;

    function openPopup() {
        popup.style.display = 'flex';
        body.style.overflow = 'hidden';
    }

    function closePopup() {
        popup.style.display = 'none';
        body.style.overflow = 'auto';
    }

    openPopupButton.addEventListener('click', openPopup);
    openPopupButton.addEventListener('touchstart', openPopup);

    closePopupButton.addEventListener('click', closePopup);
    closePopupButton.addEventListener('touchstart', closePopup);

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            closePopup();
        }
    });

    window.addEventListener('touchstart', (e) => {
        if (e.target === popup) {
            closePopup();
        }
    });

    closePopupButton.addEventListener('click', () => {
        const videoFrameContainer = document.getElementById('videoFrame');
        const iframe = videoFrameContainer.querySelector('iframe');
        iframe.src = iframe.src;
    });

    closePopupButton.addEventListener('touchstart', () => {
        const videoFrameContainer = document.getElementById('videoFrame');
        const iframe = videoFrameContainer.querySelector('iframe');
        iframe.src = iframe.src;
    });

    // Equal Height
    function setEqualHeight(className) {
        const elements = document.querySelectorAll(className);

        if (elements.length > 0) {
            let maxHeight = 0;

            elements.forEach((element) => {
                element.style.height = 'auto';
                const elementHeight = element.offsetHeight;
                maxHeight = Math.max(maxHeight, elementHeight);
            });

            elements.forEach((element) => {
                element.style.height = `${maxHeight}px`;
            });
        }
    }
    setEqualHeight('.guide-item');
    window.addEventListener('resize', setEqualHeight('.guide-item'));
});
// white navigation
var header = document.querySelector('.navigation-light-bg');
var dropdownLinks = document.querySelectorAll('.main-nav-dropdown-link');
var isScrolled = false;

dropdownLinks.forEach(function (dropdownLink) {
    dropdownLink.addEventListener('click', function () {

        var blackElements = document.querySelectorAll('.nav-menu-dropdown');

        setTimeout(function () {
            var isOpen = false;

            blackElements = document.querySelectorAll('.nav-menu-dropdown');

            blackElements.forEach(function (blackElement) {
                var elementStyle = window.getComputedStyle(blackElement);
                var displayValue = elementStyle.getPropertyValue('display');

                if (displayValue === 'block') {
                    isOpen = true;
                }
            });

            if (isOpen) {
                header.style.backgroundColor = '#FBFBFC';
            } else {
            }
        }, 100);
    });
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        if (!isScrolled) {
            header.style.backgroundColor = 'white';
            isScrolled = true;
        }
    } else {
        header.style.backgroundColor = 'transparent';
        isScrolled = false;
    }
});


// Sliders
$('.home-slider-row').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 4000
});
$('.anonymization').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true
});

const contentDesktopAchieve = document.querySelector('#achieve-append');
const contentMobileAchieve = document.querySelector('.achieve-append');

const contentDesktopKeep = document.querySelector('#keep-append');
const contentMobileKeep = document.querySelector('.keep-append');

if (window.innerWidth < 767) {
    contentMobileAchieve.append(contentDesktopAchieve);
    contentMobileKeep.append(contentDesktopKeep);
}