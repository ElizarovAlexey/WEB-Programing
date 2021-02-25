const elem = document.getElementById('elem');
elem.addEventListener('click', () => {
    console.log('Width: ' + elem.clientWidth);
    console.log('Height: ' + elem.clientHeight);

    elem.style.width = elem.clientWidth * 2 + 'px';
    elem.style.height = elem.clientHeight * 2 + 'px';
});