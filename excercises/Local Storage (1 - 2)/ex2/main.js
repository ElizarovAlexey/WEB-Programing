const todosInput = document.getElementById('todos__input');
const todosList = document.getElementById('todos__list');

todosInput.onkeypress = (e) => {
    if (e.which == 13) {
        todos.push(todosInput.value);
    } else {
        return;
    }
    printTodos();
    deleteTodos();

    localStorage.setItem('todos', JSON.stringify(todos));
}

const printTodos = () => {
    let list = '';
    
    todos.forEach((todo) => {
        list += `
        <li class="todos__list-item">
        <p>${todo}</p>
        <button class="todo__delete">&#10006;</button>
        </li>
        `;
    });
    todosInput.value = '';
    todosList.innerHTML = list;
}

const deleteTodos = () => {
    const deleteBtns = document.querySelectorAll('.todo__delete');
    
    deleteBtns.forEach((btn, index) => {
        deleteBtns[index].addEventListener('click', () => {
            btn.parentElement.remove();
            todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
        });
    });
}

let todos = [];

if (localStorage.getItem('todos') !== undefined) {
    todos = JSON.parse(localStorage.getItem('todos'));
    printTodos();
    deleteTodos();
}