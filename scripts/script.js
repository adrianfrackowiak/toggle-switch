const body = document.querySelector('body');
const txt = document.querySelector('h2');
const toggle = document.querySelector('.toggle');
const toggleButton = document.querySelector('.toggle--button');

toggle.addEventListener('click', () => {
    
    if (toggle.classList.contains('flex-jc-fs')) {
        toggle.classList.remove('flex-jc-fs');
        toggle.classList.add('flex-jc-fe');
        body.style.background = '#0e0e0e';
        txt.style.color = '#ececec';
        toggle.style.background = '#2e2e2e';
        toggleButton.style.background = '#0e0e0e';
    } else {
        toggle.classList.remove('flex-jc-fe');
        toggle.classList.add('flex-jc-fs');
        body.style.background = '#ececec';
        txt.style.color = '#0e0e0e';
        toggle.style.background = '#dddddd';
        toggleButton.style.background = '#ececec';
    }
});