const weekDays = {
    'Mo': 'Понедельник',
    'Tu': 'Вторник',
    'We': 'Среда',
    'Th': 'Четверг',
    'Fr': 'Пятница',
    'Sa': 'Суббота',
    'Su': 'Воскресенье'
};

let transtale = (days) => {
    const roDays = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Simbata', 'Duminica'];
    const newDays = Object.entries(days);
    for (let item in newDays) {
        newDays[item][1] = roDays[item];
    }
    
    return Object.fromEntries(newDays);
}

console.log(transtale(weekDays));