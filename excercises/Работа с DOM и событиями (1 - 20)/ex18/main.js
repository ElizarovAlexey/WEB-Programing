const player1 = document.getElementById('player');
const player2 = document.getElementById('player2');
const viewport = document.getElementById('viewport');

const settings = {
    width: 500,
    height: 500
};

const coordinates = {
    leftX: viewport.getBoundingClientRect().x,
    rightX: viewport.getBoundingClientRect().x + settings.width,
    topY: viewport.getBoundingClientRect().y,
    bottomY: viewport.getBoundingClientRect().y + settings.height
}

viewport.style.width = settings.width + 'px';
viewport.style.height = settings.height + 'px';

document.addEventListener('keydown', (event) => {
    const player1Coordinates = player1.getBoundingClientRect();
    const player2Coordinates = player2.getBoundingClientRect();
    const step = 10;
    if (event.code == 'ArrowUp') {
        player1.style.top = player1Coordinates.y - step + 'px';

        if (player2Coordinates.y >= coordinates.topY + step) {
            player2.style.top = player2Coordinates.y - step + 'px';
        }
    }
    if (event.code == 'ArrowDown') {
        player1.style.top = player1Coordinates.y + step + 'px';

        if (player2Coordinates.y <= coordinates.bottomY - (step + player2.clientHeight)) {
            player2.style.top = player2Coordinates.y + step + 'px';
        }
    }
    if (event.code == 'ArrowLeft') {
        player1.style.left = player1Coordinates.x - step + 'px';
        
        if (player2Coordinates.x >= coordinates.leftX + step) {
            player2.style.left = player2Coordinates.x - step + 'px';
        }
    }
    if (event.code == 'ArrowRight') {
        player1.style.left = player1Coordinates.x + step + 'px';
        
        if (player2Coordinates.x <= coordinates.rightX - (step + player2.clientWidth)) {
            player2.style.left = player2Coordinates.x + step + 'px';
        }
    }
});