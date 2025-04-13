// Header animation
const header = document.querySelector('header');
let isScrolling = false;

const scrollHandler = () => {
    let UserPosition = window.scrollY;

    if (UserPosition > 500) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }

    isScrolling = false;
};

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(scrollHandler);
        isScrolling = true;
    }
});
