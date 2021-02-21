const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let processingArray = () => {
    numberArray.splice(4, 1);
    numberArray.splice(4, 0, 0, 0, 0);
}

console.log(processingArray());