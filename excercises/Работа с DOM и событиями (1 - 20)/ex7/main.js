const links = document.getElementsByTagName('a');
// const link = document.querySelectorAll('.link');

for (let link of links) {
    if (link.href.includes('https://')) {
        link.style.color = 'red';
    }
} 