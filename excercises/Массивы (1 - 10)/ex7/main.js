const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let extractNumbers = (startPosition, endPosition) => {
    return numberArray.slice(startPosition, endPosition + 1);
}

console.log(extractNumbers(2, 4));