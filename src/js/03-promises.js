import { Notify } from 'notiflix/build/notiflix-notify-aio';

const elems = {
    form: document.querySelector('.form'),
    inputDelay: document.querySelector('input[name="delay"]'),
    inputStep: document.querySelector('input[name="step"]'),
    inputAmount: document.querySelector('input[name="amount"]'),
};

elems.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (
        elems.inputDelay.value < 0 ||
        elems.inputStep.value < 0 ||
        elems.inputAmount.value <= 0
    ) {
        Notify.warning(
            'Please, enter correctly values: DELAY>=0; STEP>=0; AMOUNT>0'
        );
        elems.form.reset();
        return;
    }

    let timeOutDelay = Number(elems.inputDelay.value);

    for (let i = 1; i <= Number(elems.inputAmount.value); i += 1) {
        const delay = timeOutDelay;
        setTimeout(() => {
            createPromise(i, delay)
                .then(({ position, delay }) => {
                    Notify.success(
                        `✅ Fulfilled promise ${position} in ${delay}ms`
                    );
                })
                .catch(({ position, delay }) => {
                    Notify.failure(
                        `❌ Rejected promise ${position} in ${delay}ms`
                    );
                });
        }, timeOutDelay);
        timeOutDelay += Number(elems.inputStep.value);
    }
}

function createPromise(position, delay) {
    return new Promise((res, rej) => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
            res({ position, delay });
        } else {
            rej({ position, delay });
        }
    });
}
