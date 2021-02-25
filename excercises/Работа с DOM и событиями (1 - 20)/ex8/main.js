const textInput = document.getElementById('form__input');
const submit = document.getElementById('form__btn');
const list = document.getElementById('list');

submit.disabled = true;
submit.addEventListener('click', () => {
    addElementToList();
})

textInput.addEventListener('input', () => {
    checkForEmpty();
});

let addElementToList = () => {
    let newItem = document.createElement('li');
    newItem.innerHTML = textInput.value;
    newItem.className = 'list__element';
    newItem.addEventListener('click', () => {
        alert(newItem.innerHTML);
    });
    list.append(newItem);
    textInput.value = '';
    checkForEmpty();
}

let checkForEmpty = () => {
    if (textInput.value !== '') {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
}