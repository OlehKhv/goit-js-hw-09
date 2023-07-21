import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

let selectedDate = null;
const elems = {
    startBtn: document.querySelector('button[data-start]'),
    spanDays: document.querySelector('span[data-days]'),
    spanHours: document.querySelector('span[data-hours]'),
    spanMinutes: document.querySelector('span[data-minutes]'),
    spanSeconds: document.querySelector('span[data-seconds]'),
};
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= Date.now()) {
            Notify.failure('Please choose a date in the future');
            // alert('Please choose a date in the future');
            elems.startBtn.setAttribute('disabled', '');
            return;
        }
        elems.startBtn.removeAttribute('disabled');
        selectedDate = selectedDates[0];
    },
};

elems.startBtn.addEventListener('click', onClick, { once: true });

flatpickr('#datetime-picker', options);

function onClick() {
    const timerId = setInterval(() => {
        const counter = selectedDate - Date.now();
        renderTime(convertMs(counter));

        if (counter < 1000) {
            clearInterval(timerId);
        }
    }, 1000);
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, 0);
}

function renderTime(value) {
    const { days, hours, minutes, seconds } = value;

    elems.spanDays.textContent = addLeadingZero(days);
    elems.spanHours.textContent = addLeadingZero(hours);
    elems.spanMinutes.textContent = addLeadingZero(minutes);
    elems.spanSeconds.textContent = addLeadingZero(seconds);
}
