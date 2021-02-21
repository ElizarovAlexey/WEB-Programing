const array = [2, 9, 10, 5, 3, 7, 12, 999];
let item = 0;

// Method one (for pure)
for (let item = 0; item < array.length; item++) {
    console.log(array[item]);
}

// Method two (for in)
for (let item in array) {
    console.log(array[item]);
}


// Method three (for of) // в тройке самых удобных
for (let item of array) {
    console.log(item);
}


// Method four (while)
while (item < array.length) {
    console.log(array[item]);
    item++;
}


// Method five (do while)
item = 0;

do {
    console.log(array[item]);
    item++;
} while (item < array.length);


// Method six (forEach)
array.forEach((item) => {
    console.log(item);
});


// Method seven (map)
array.map((item) => {
    console.log(item);
});


// Method eight (filter)
array.filter((item) => {
    console.log(item);
});