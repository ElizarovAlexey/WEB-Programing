let array = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

let deleteDublicates = () => {
    let newArray = new Set(array);
    newArray = Array.from(newArray);
    return newArray;
}

let compareNumeric = (a, b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

let sortArray = () => {
    let arrayWithoutDublicates = deleteDublicates();
    let sortedArray = arrayWithoutDublicates.sort(compareNumeric);
    return sortedArray;
}

console.log(sortArray());