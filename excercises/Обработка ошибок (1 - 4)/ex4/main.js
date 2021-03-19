const square = (width, height) => {
    let square = width * height;

    if (typeof(width) !== 'number' || typeof(height) !== 'number') {
        return new TypeError('Wrong paramaters type. Only numbers accepted!');
    }

    return square;
}

try {
    console.log(square('10', 12));
} catch (e) {
    console.log(e);
}