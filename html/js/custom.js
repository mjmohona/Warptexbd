function scrollIndicator() {
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 200) {
        document.querySelector('.scroll-progress').classList.add('visible');
    } else {
        document.querySelector('.scroll-progress').classList.remove('visible');
    }

    var scrollHeight = document.documentElement.scrollHeight;
    var windowHeight = document.documentElement.clientHeight;
    var maxScrollTop = scrollHeight - windowHeight;
    var scrollTop = document.documentElement.scrollTop;
    var scrollPercentage = (scrollTop / (maxScrollTop - 200)) * 100;

    document.querySelector('.scroll-point').style.height = Math.min(scrollPercentage, 100) + '%';

    /***** Theme demos button scroll to show *****/
    var scrollPos = window.scrollY;
    if (scrollPos > 150) {
        document.querySelector('.theme-demos').style.display = 'block';
    } else {
        document.querySelector('.theme-demos').style.display = 'none';
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', function () {
    scrollIndicator();
    console.log("Scrolling");
});


const mouseButton = document.querySelector('#mouse-button')
const aboutSection = document.querySelector('#about-section')

mouseButton.style.cursor = "pointer";

if(mouseButton) {
    mouseButton.addEventListener('click', function() {
        aboutSection.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
        });
    })
}