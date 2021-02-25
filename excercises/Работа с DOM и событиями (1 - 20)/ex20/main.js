const input = document.getElementById('input');
const addButton = document.getElementById('button');
const list = document.getElementById('list');

addButton.addEventListener('click', () => {
    if (input.value != '') {
        createElement(input.value);
    }
    input.value = '';
});

let createElement = (value) => {
    const listElement = document.createElement('li');
    listElement.className = 'list__element';
    listElement.innerHTML = value;
    list.appendChild(listElement);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn';
    deleteBtn.innerHTML = 'x';
    listElement.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
        list.removeChild(listElement);
    });
}