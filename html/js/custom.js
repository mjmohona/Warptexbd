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


document.querySelectorAll('.scroll-trigger').forEach(trigger => {
    trigger.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Get the ID without `#`
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start', // Align the section to the top of the viewport
            });
        }
    });
});