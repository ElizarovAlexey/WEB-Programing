const tick = () => {
    const clock = document.getElementById('clock');
    let dateNow = new Date();
    let hours = dateNow.getHours();
    let minutes = dateNow.getMinutes();
    let seconds = dateNow.getSeconds();

    clock.children[0].innerHTML = hours;
    clock.children[1].innerHTML = minutes;
    clock.children[2].innerHTML = seconds;
}

tick();

let timer;

const startTick = () => {
    timer = setInterval(() => {
        tick();
    }, 1000);
    tick();
}

const stopTick = () => {
    clearInterval(timer);
    timer = 0;
}

document.getElementById('clock__start').addEventListener('click', () => {
    startTick();
});

document.getElementById('clock__stop').addEventListener('click', () => {
    stopTick();
});