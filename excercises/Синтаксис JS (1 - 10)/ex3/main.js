const firstNumber = 3;
const secondNumber = 0;
const thirdNumber = 7;
let max = firstNumber;
let min = firstNumber;

let checkMaxNumber = () => {
    if (max < secondNumber) {
        max = secondNumber;
    } else if (max < thirdNumber) {
        max = thirdNumber;
    }

    if (min > secondNumber) {
        min = secondNumber;
    } else if (min > thirdNumber) {
        min = thirdNumber;
    }
}

checkMaxNumber();

console.log('Max:', max, '.', 'Min:', min);