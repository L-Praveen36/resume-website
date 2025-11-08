
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', e => {
        // Opens external links in a new tab
        link.setAttribute('target', '_blank');
    });
});

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            section.querySelector('h2').style.color = '#0078D7';
        } else {
            section.querySelector('h2').style.color = 'black';
        }
    });
});

window.addEventListener('load', () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 1.5s ease-in';
    setTimeout(() => (document.body.style.opacity = 1), 100);
});
