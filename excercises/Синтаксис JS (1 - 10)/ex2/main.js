const firstValueOfInterval = 10;
const secondValueOfInterval = 50;

let calculateSum = () => {
    let sumOfValues = 0;
    for (let i = firstValueOfInterval; i <= secondValueOfInterval; i++) {
        if (i % 2 == 0) {
            sumOfValues += i;
        }
    }
    return sumOfValues;
}

console.log(calculateSum());