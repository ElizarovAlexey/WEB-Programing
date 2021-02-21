let convertItemsOfArray = (func, array) => {
    let newArray = new Array();

    for (let i in array) {
        newArray[i] = func(array[i]);
    }

    return newArray;
}

let square = (x) => {
    return x * x;
}

let factorial = (n) => {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i; 
    }

    return fact;
}

console.log(convertItemsOfArray(factorial, [2, 3, 4, 5]));