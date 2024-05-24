// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded(buttonId, ulId) {
    const csUL = document.querySelector(ulId);
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('more-btn').addEventListener('click', function(event) {
        event.preventDefault();
        ariaExpanded('more-btn', '#cs-expanded');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let current = 0;
    const images = document.querySelectorAll('.banner-image');
    const totalImages = images.length;

    function updateActiveImage() {
        images.forEach((img, index) => {
            img.classList.remove('active');
            if (index === current) {
                img.classList.add('active');
            }
        });
    }

    if (totalImages > 0) {
        updateActiveImage();
    }

    function changeImage(next = true) {
        if (next) {
            current = (current + 1) % totalImages;
        } else {
            current = (current - 1 + totalImages) % totalImages;
        }
        updateActiveImage();
    }

    document.querySelector('.right-arrow').addEventListener('click', () => changeImage(true));
    document.querySelector('.left-arrow').addEventListener('click', () => changeImage(false));

    setInterval(() => changeImage(true), 3000);
});

document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = Array.from(document.querySelectorAll('.cs-button'));
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.closest('.cs-faq-item');
            faqItem.classList.toggle('active');
        });
    });
});
                                
                                