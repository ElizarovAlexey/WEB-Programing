let dateBirth = new Date(prompt('Введите дату рождения: ', ''));
let dateNow = new Date;

const yearDifference = (dateNow, dateBirth) => {
    return dateNow.getFullYear() - dateBirth.getFullYear();
}

const monthDifference = (dateNow, dateBirth) => {
    let months = yearDifference(dateNow, dateBirth) * 12;
    months -= dateNow.getMonth() + 1;
    months += dateBirth.getMonth();
    return months;
}

const dayDifference = (dateNow, dateBirth) => {
    let oneDay = 1000 * 60 * 60 * 24;

    return Math.ceil((dateNow.getTime() - dateBirth.getTime()) / oneDay);
}

console.log('На данный момент ваш возраст составляет: ');
console.log(yearDifference(dateNow, dateBirth) + ' лет');
console.log(monthDifference(dateNow, dateBirth) + ' месяцев');
console.log(dayDifference(dateNow, dateBirth) + ' дней');