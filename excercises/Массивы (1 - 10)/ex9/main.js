const valuesArray = [1, 'a', 2, null, 3, undefined, 4, {}, 5, 6, 'word', 7, 8, false, 9, 100];

let filterDigits = () => {
    let digitsArray = valuesArray.filter(item => Number.isInteger(item));

    return digitsArray;
}

console.log(filterDigits());