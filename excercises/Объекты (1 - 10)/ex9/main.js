const weekDays = {
    'Luni': 'Mo',
    'Marti': 'Tu',
    'Miercuri': 'We',
    'Joi': 'Th',
    'Vineri': 'Fr',
    'Simbata': 'Sa',
    'Duminica': 'Su'
};

let reverseKeysToValues = (obj) => {
    const temporyObj = {};

    Object.keys(obj).forEach(function(value) {
        let key = obj[value];
        temporyObj[key] = value;
    });
    return temporyObj;

    /* 
    Метод короче, но выглядит сложнее
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
    */
}

console.log(reverseKeysToValues(weekDays));