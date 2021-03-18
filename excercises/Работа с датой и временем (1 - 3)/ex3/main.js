const tick = () => {
    const clock = document.getElementById('clock__text');
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const stopText = document.getElementById('stop__text');
    let timer;

    daysInput.addEventListener('blur', () => {
        if (daysInput.value < 1 || daysInput.value > 31) {
            daysInput.value = '0';
        }
    });

    hoursInput.addEventListener('blur', () => {
        if (hoursInput.value < 1 || hoursInput.value > 24) {
            hoursInput.value = '0';
        }
    });

    minutesInput.addEventListener('blur', () => {
        if (minutesInput.value < 1 || minutesInput.value > 60) {
            minutesInput.value = '0';
        }
    });

    const dayInMilliseconds = 1000 * 60 * 60 * 24;
    const hoursInMilliseconds = 1000 * 60 * 60;
    const minutesInMilliseconds = 1000 * 60;

    const run = () => {
        let milliseconds = +daysInput.value * dayInMilliseconds + +hoursInput.value * hoursInMilliseconds + +minutesInput.value * minutesInMilliseconds;

        timer = setInterval(() => {
            clock.children[0].innerHTML = (Math.floor(milliseconds / dayInMilliseconds)).toString();
            clock.children[1].innerHTML = (Math.floor((milliseconds % dayInMilliseconds) / hoursInMilliseconds)).toString();
            clock.children[2].innerHTML = (Math.floor((milliseconds % hoursInMilliseconds) / minutesInMilliseconds)).toString();

            daysInput.value = '';
            hoursInput.value = '';
            minutesInput.value = '';

            if (milliseconds > 0) {
                milliseconds -= 1000;
            }

            if (milliseconds === 0) {
                clearInterval(timer);
                timer = 0;
                stopText.innerHTML = 'Время пришло';
            }
        }, 1000);
    }


    document.getElementById('clock__start').addEventListener('click', () => {
        if (daysInput.value !== '' || hoursInput.value !== '' || minutesInput.value !== '') {
            run();
        } else {
            stopText.innerHTML = 'Ошибка. Заполните минимум одно поле';
            setTimeout(() => {
                stopText.innerHTML = '';
            }, 1000);
        }
    });

    // let date = new Date(daysInput.value + ':' + hoursInput.value + ':' + minutesInput.value);

    // let hours = date.getHours();
    // let minutes = date.getMinutes();
    // let seconds = date.getSeconds();

    // clock.children[0].innerHTML = hours;
    // clock.children[1].innerHTML = minutes;
    // clock.children[2].innerHTML = seconds;
}

tick();

// let timer;

// const startTick = () => {
//     timer = setInterval(() => {
//         tick();
//     }, 1000);
//     tick();
// }

// document.getElementById('clock__start').addEventListener('click', () => {
//     startTick();
// });