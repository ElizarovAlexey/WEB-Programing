const ball = document.getElementById('ball');

ball.onmousedown = (event) => {

    let offsetX = event.clientX - ball.getBoundingClientRect().left;
    let offsetY = event.clientY - ball.getBoundingClientRect().top;

    let moveAt = (pageX, pageY) => {
        ball.style.left = pageX - offsetX + 'px';
        ball.style.top = pageY - offsetY + 'px';
    }

    moveAt(event.pageX, event.pageY);

    let onMouseMove = (event) => {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    ball.onmouseup = () => {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
    };
};

ball.ondragstart = () => {
    return false;
};