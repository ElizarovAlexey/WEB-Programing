const name = prompt('Введите имя: ');
alert(`Привет, ${name}`);

result = confirm('Вы знакомы с языком JavaScript?');
if (result) {
    alert('Молодец!');
} else {
    alert('Можно начать изучение прямо сейчас.');
}