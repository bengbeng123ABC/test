let text = document.getElementById('text');
let cloud1 = document.getElementById('cloud1');
let plane = document.getElementById('plane');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.5 + 'px';
    cloud1.style.top = value * -1.5 + 'px';
    cloud1.style.left = value * 1.5 + 'px';

    plane1.style.top = value * 0.5 + 'px';
});