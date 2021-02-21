let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sumOfSalaries = 0;

for (let item in salaries) {
    sumOfSalaries += salaries[item]
}

console.log(sumOfSalaries)