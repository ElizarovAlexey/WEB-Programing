const number = Number(prompt('Input the number: '));

if (number < 0) {
    alert(-1);
} else if (number > 0) {
    alert(1);
} else if (number === 0) {
    alert(0);
} else {
    alert('Error');
}