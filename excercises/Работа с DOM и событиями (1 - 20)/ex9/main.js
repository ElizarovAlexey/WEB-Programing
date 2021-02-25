let showNotification = ({
    top = 10,
    right = 10,
    message = 'Warning!',
    className = 'welcome'
}) => {
    let notificationBlock = document.createElement('div');
    notificationBlock.classList.add('notification');

    notificationBlock.style.position = 'absolute';
    notificationBlock.style.top = top + 'px';
    notificationBlock.style.right = right + 'px';

    notificationBlock.innerHTML = message;

    if (className) {
        notificationBlock.classList.add(className);
    }

    document.body.append(notificationBlock);

    setTimeout(() => {
        notificationBlock.remove();
    }, 1500);
}

showNotification({top: 10, right: 10, message: 'Warning!', className: 'welcome'});