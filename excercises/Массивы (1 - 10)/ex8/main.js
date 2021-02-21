const colors = ['red', 'green', 'blue', 'white', 'yellow', 'pink'];

let searchElementOfArray = (color) => {
    return colors.indexOf(color, 0);
}

console.log(searchElementOfArray('white'));
console.log(searchElementOfArray('silver'));