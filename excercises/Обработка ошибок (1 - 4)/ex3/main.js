let a = 2;
let b = 0;

try {
    a / b;
    if (b == 0) {
        throw new Error('Вы не можете делить на 0');
    }
} catch (e) {
    console.log(e.message);
} finally {
    console.log(a);
}