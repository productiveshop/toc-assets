$('.hero-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true
});

$('.data-masking').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
});
$('.anonymization').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true
});


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
setEqualHeight('.list-1');
setEqualHeight('.list-2');
setEqualHeight('.list-3');
setEqualHeight('.hero-list');



document.addEventListener("DOMContentLoaded", function() {
    const catLinks = document.querySelectorAll(".click-cat");
    const selectElement = document.getElementById("field");
    const scrollOffset = 80;

    selectElement.addEventListener("change", function() {
        const selectedValue = selectElement.value;
    });

    catLinks.forEach(function(catLink) {
        catLink.addEventListener("click", function(event) {
            event.preventDefault();

            const section = document.getElementById("all-section");

            const scrollToPosition = section.offsetTop - scrollOffset;

            window.scrollTo({
                top: scrollToPosition,
                behavior: "smooth",
            });
            const newValue = this.getAttribute("data-value");
            selectElement.value = newValue;

            const changeEvent = new Event("change", {
                bubbles: true,
                cancelable: true,
            });
            selectElement.dispatchEvent(changeEvent);
        });
    });

    const mobileNavButton = document.querySelector('.mobile-navigation-button');
    const iconOpen = document.querySelector('.icon-open');
    const iconClose = document.querySelector('.icon-close');
    const body = document.body;
    const mobileMenuArrow = document.querySelector('.mobile-menu-arrow');
    const dropdownToggle = document.querySelector('.mobile-navigation-dropdown-toggle');

    mobileNavButton.addEventListener('click', function () {
        if (mobileNavButton.classList.contains('w--open')) {
            iconOpen.style.display = 'block';
            iconClose.style.display = 'none';
            body.style.overflow = 'visible';
        } else {
            iconOpen.style.display = 'none';
            iconClose.style.display = 'block';
            body.style.overflow = 'hidden';
        }
    });

    function toggleDropdownArrow() {
        if (dropdownToggle.classList.contains('w--open')) {
            mobileMenuArrow.style.transform = 'rotate(180deg)';
        } else {
            mobileMenuArrow.style.transform = 'rotate(0deg)';
        }
    }
    dropdownToggle.addEventListener('click', function () {
        toggleDropdownArrow();
    });

});