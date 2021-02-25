const btnIncrease = document.getElementById('btn_increase');
const btnDecrease = document.getElementById('btn_decrease');
const inputCount = document.getElementById('input__count');

let inputValue = 0;
inputCount.value = inputValue;
inputCount.disabled = true;

let increase = () => {
    if (inputValue > 0) {
        inputValue--;
        btnIncrease.disabled = false;
    } else {
        btnDecrease.disabled = true;
    }
    inputCount.value = inputValue;
}

let decrease = () => {
    if (inputValue < 9) {
        inputValue++;
        btnDecrease.disabled = false;
    } else {
        btnIncrease.disabled = true;
    }
    inputCount.value = inputValue;
}

btnDecrease.addEventListener('click', () => {
    increase();
});

btnIncrease.addEventListener('click', () => {
    decrease();
});
