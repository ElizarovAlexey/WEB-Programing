const number = Number(prompt('Введите число: ', ''));

let detectionDivisors = (number) => {
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            console.log(i);
        }
    }
}

detectionDivisors(number);