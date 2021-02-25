// 12
const elem = document.getElementById('elem');
elem.firstElementChild.style.color = 'red';

// 13
const elem2 = document.getElementById('elem2');
elem2.previousElementSibling.textContent += '!';

// 14
const button = document.getElementById('button');
const parent = document.getElementById('parent');
button.addEventListener('click', () => {
    //parent.firstElementChild.remove();
    parent.querySelector('#child').remove();
});