const input = document.getElementById('input');

input.addEventListener('keypress', (event) => {
    let key = event.keyCode;
    key = String.fromCharCode(key);
    let regex = /[0-9]|\./;
    if (!regex.test(key)) {
        event.returnValue = false;
        if (event.preventDefault) {
            event.preventDefault();
        }
    }
});