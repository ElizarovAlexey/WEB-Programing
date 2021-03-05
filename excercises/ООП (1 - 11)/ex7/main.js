class Animal {

    constructor(food, location) {
        this.food = food;
        this.location = location;
    }

    makeNoise() {
        return 'Noises..';
    }

    eat() {
        return `Eat ${this.food}.`
    }

    sleep() {
        return 'Sleeping;'
    }
}

class Dog extends Animal {
    constructor(food, location) {
        super(food, location);
        this.name = 'Dog';
        this.noise = 'woof-woof';
    }

    makeNoise() {
        return `${this.name} makes ${this.noise}.`;
    }

    eat() {
        return `${this.name} eat ${this.food}`;
    }
}

class Cat extends Animal {
    constructor(food, location) {
        super(food, location);
        this.name = 'Cat';
        this.noise = 'meow-meow';
    }

    makeNoise() {
        return `${this.name} makes ${this.noise}.`;
    }

    eat() {
        return `${this.name} eat ${this.food}`;
    }
}

class Horse extends Animal {
    constructor(food, location) {
        super(food, location);
        this.name = 'Horse';
        this.noise = 'neigh';
    }

    makeNoise() {
        return `${this.name} makes ${this.noise}.`;
    }

    eat() {
        return `${this.name} eat ${this.food}`;
    }
}

class Veterinar {
    
    treatAnimal(animal) {
        console.log(`${animal.food} ${animal.location}`); 
    }
}

const dog = new Dog('meet', 'yard');
const cat = new Cat('mouse', 'house');
const horse = new Horse('straw', 'enclosure');

const veterinar = new Veterinar();

const animals = [dog, cat, horse];

for (let animal of animals) {
    veterinar.treatAnimal(animal);
}