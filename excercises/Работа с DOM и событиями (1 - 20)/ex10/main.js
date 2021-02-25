let centering = (widthBlock, heightBlock, widthBall, heightBall) => {
    let block = document.createElement('div');
    block.style.width = widthBlock + 'px';
    block.style.height = heightBlock + 'px';
    block.style.background = 'gray';
    block.style.position = 'relative';
    document.body.append(block);

    let ball = document.createElement('div');
    ball.style.width = widthBall + 'px';
    ball.style.height = heightBall + 'px';
    ball.style.background = 'orange';
    ball.style.position = 'absolute';
    ball.style.top = '50%';
    ball.style.marginTop = -(widthBall / 2) + 'px';
    ball.style.left = '50%';
    ball.style.marginLeft = -(widthBall / 2) + 'px';
    block.append(ball);
}

centering(600, 400, 50, 50);