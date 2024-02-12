
// define the load gist function
var loadGist = function(elem) {
    var gistUrl = $(elem).text().match(/\bhttps?:\/\/\S+(.js)/gi);
    if (typeof gistUrl === 'undefined' || gistUrl === null || gistUrl.length == 0)
        return;
    //load gist
    $(elem).show();
    $(elem).empty();
    postscribe(elem, '<script src=' + gistUrl+ '><\/script>');
};

var gists = $('p:contains("CODE:")');
gists.hide();
gists.toArray().forEach(loadGist);

document.addEventListener("DOMContentLoaded", function() {

    var copyButtonTooltip = document.getElementById('copy-button');
    var copyMessage = document.getElementById('tooltip');

    copyButtonTooltip.addEventListener('click', function() {
        copyMessage.style.display = 'block';
        copyButtonTooltip.focus();
        setTimeout(function() {
            copyMessage.style.display = 'none';
        }, 1000);
    });



    const copyButton = document.getElementById('copy-button');

    copyButton.addEventListener('click', function() {
        const currentURLNew = window.location.href;

        const tempInput = document.createElement('input');
        tempInput.value = currentURLNew;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
    });


    const urlToShare = window.location.href;

    /*Accordion section */

    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");

        header.addEventListener("click", () => {
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector(".accordion-content").style.display = "none";
                    otherItem.querySelector(".accordion-header").classList.remove("active"); // Убираем класс "active" у других элементов
                }
            });

            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                header.classList.add("active");
            } else {
                content.style.display = "none";
                header.classList.remove("active");
            }
        });
    });

    /*Socials section */

    const twitterButton = document.getElementById("twitter");
    twitterButton.addEventListener("click", function(e) {
        e.preventDefault();
        const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}`;
        window.open(twitterUrl, "_blank");
    });

    // LinkedIn
    const linkedinButton = document.getElementById("linkedin");
    linkedinButton.addEventListener("click", function(e) {
        e.preventDefault();
        const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(urlToShare)}`;
        window.open(linkedinUrl, "_blank");
    });

    // Facebook
    const facebookButton = document.getElementById("facebook");
    facebookButton.addEventListener("click", function(e) {
        e.preventDefault();
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
        window.open(facebookUrl, "_blank");
    });


    /*Nav  section */
    const $h2 = document.querySelectorAll('.js-content h2');
    const $nav = document.querySelector(".js-navigation");
    const $postNavBox = document.querySelector(".nav-box");
    const headerHeight = 90;
    let isScrolling = false;

    $h2.forEach(function (item, i) {
        const top = item.getBoundingClientRect().top;
    });

    if ($h2.length > 0) {
        $h2.forEach(function (item, i) {
            item.setAttribute('id', `title-${i}`);
            let link = `<div>${item.innerHTML}</div>`;
            let listItem = document.createElement('li');
            listItem.innerHTML = link;
            listItem.setAttribute('tabindex', '-1');
            $nav.appendChild(listItem);

            listItem.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = `title-${i}`;
                const targetElement = document.getElementById(targetId);

                const startY = window.scrollY;
                const targetY = targetElement.getBoundingClientRect().top + startY - headerHeight;
                const duration = 500;
                const startTime = performance.now();

                function scrollAnimation(currentTime) {
                    const elapsedTime = currentTime - startTime;
                    if (elapsedTime < duration) {
                        const ease = easeOutQuad(elapsedTime / duration);
                        window.scrollTo(0, startY + (targetY - startY) * ease);
                        requestAnimationFrame(scrollAnimation);
                    } else {
                        window.scrollTo(0, targetY);
                        listItem.focus();
                    }
                }

                requestAnimationFrame(scrollAnimation);

                $h2.forEach(function (h2) {
                    h2.classList.remove('active');
                });

                item.classList.add('active');
                listItem.classList.add('active');

                isScrolling = true;

                setTimeout(function () {
                    isScrolling = false;
                }, 300);
            });
        });
    } else {
        $postNavBox.remove();
    }

    window.addEventListener('scroll', function () {
        if (!isScrolling) {
            const $h2 = document.querySelectorAll('.js-content h2');
            let $nav = document.querySelectorAll(".js-navigation li");
            let winScrollTop = window.scrollY + headerHeight + 10;
            let activeIndex = -1;

            $h2.forEach(function (item, i) {
                let targetRect = item.getBoundingClientRect();
                let $h2Top = targetRect.top + window.scrollY - headerHeight;

                if ($h2Top <= winScrollTop) {
                    activeIndex = i;
                }
            });

            $h2.forEach(function (item, i) {
                if (i === activeIndex) {
                    item.classList.add('active');
                    $nav[i].classList.add('active');
                } else {
                    item.classList.remove('active');
                    $nav[i].classList.remove('active');
                }

                if (i < activeIndex) {
                    $nav[i].classList.add('done');
                } else {
                    $nav[i].classList.remove('done');
                }
            });
        } else {
            isScrolling = false;
        }
    });
});

function easeOutQuad(t) {
    return t * (2 - t);
}

const button = document.getElementById("applause");

button.initialClapCount.then(function(count) {
    console.log("initial clap count", count);
});

button.addEventListener("clapped", function(event) {
    console.log("button clapped", event.detail);
});
