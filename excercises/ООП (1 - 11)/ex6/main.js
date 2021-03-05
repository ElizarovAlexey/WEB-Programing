class Transport {
    
    constructor(model, price, year) {
        this.model = model;
        this.price = price;
        this.year = year;
    } 

    getModel() {
        return this.model;
    }

    getAge() {
        return new Date().getFullYear() - this.year;
    }

    move() {
        return 'Move...';
    }
}

class Mercedes extends Transport {
    constructor(model, price, year) {
        super(model, price, year);
    }
    
    move() {
        return 'moving along the road';
    }
}

class Truck extends Transport {
    constructor(model, price, year) {
        super(model, price, year);
    }
    
    move() {
        return 'moving along the road';
    }
}

class Man extends Transport {
    constructor(model, price, year) {
        super(model, price, year);
    }
    
    move() {
        return 'moving along the road';
    }
}

class Boeing extends Transport {
    constructor(model, price, year) {
        super(model, price, year);
    }

    move() {
        return 'moving through the air';
    }
}

class Airplane extends Transport {
    constructor(model, price, year) {
        super(model, price, year);
    }

    move() {
        return 'moving through the air';
    }
}

class Airbus extends Transport {
    constructor(model, price, year) {
        super(model, price, year);
    }

    move() {
        return 'moving through the air';
    }
}

let mers = new Mercedes('AMG GT', 95000, 2017);
console.log(`The Mercedes car, model ${mers.model}, worth ${mers.price}$, was released ${mers.getAge()} years ago. This car ${mers.move()}.`);
let airBus = new Airbus('A350 XWB', 350000000, 2013);
console.log(`The Airbus plane, model ${airBus.model}, worth ${airBus.price}$, was released ${airBus.getAge()} years ago. This plane ${airBus.move()}.`);
