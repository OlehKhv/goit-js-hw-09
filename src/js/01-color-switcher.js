function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');

bodyEl.addEventListener('click', onClick);

let timerId = null;

function onClick(e) {
    if (e.target === startBtnEl) {
        bodyEl.style.backgroundColor = getRandomHexColor();

        startBtnEl.setAttribute('disabled', '');
        stopBtnEl.removeAttribute('disabled');

        timerId = setInterval(() => {
            bodyEl.style.backgroundColor = getRandomHexColor();
        }, 1000);
    } else if (e.target === stopBtnEl) {
        clearInterval(timerId);

        startBtnEl.removeAttribute('disabled');
        stopBtnEl.setAttribute('disabled', '');
    }
}
