const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');
let isOpen = false;
toggle.addEventListener('click', function () {

    if (!isOpen) {
        isOpen = true;
        toggle.classList += 'open';
        menu.classList += 'opened background-borders';
    } else {
        isOpen = false;
        toggle.classList = '';
        menu.classList = '';
    }
});