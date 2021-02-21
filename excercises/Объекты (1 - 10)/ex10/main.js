const person1 = {
    name: 'Person',
    age: 123,
    salary: 1235.67,
    contacts: {
        phone: 112,
        email: 'email@email.com'
    },
    adress: 'Moldova',
};

const person2 = {
    name: 'Person2',
    age: 123,
    salary: 1235.68,
    contacts: {
        phone: 112,
        email: 'email@email.com'
    },
    adress: 'Moldova',
};

let intersection = (person1, person2) => {
    const personOne = Object.entries(person1);
    const personTwo = Object.entries(person2);
    const newPerson = [];

    
    for(let i in personOne) {
        for (let j in personTwo) {
            if (JSON.stringify(personOne[i]) == JSON.stringify(personTwo[j])) {
                newPerson.push(personTwo[j]);
            }
        }
    }

    return Object.fromEntries(newPerson);
}

console.log(intersection(person1, person2));