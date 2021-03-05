class Elem {
    constructor(selector) {
        this.elem = document.querySelector(selector);
    }

    html(text) {
        this.elem.innerHTML = text;
        return this;
    }

    append(text) {
        this.elem.innerHTML += text;
        return this;
    }

    prepend(text) {
        this.elem.innerHTML = text + this.elem.innerHTML;
        return this;
    }

    attr(attr, text) {
        this.elem.setAttribute(attr, text);
        return this;
    }
}

const divElem = new Elem('.test');
divElem.attr('data-color', 'red').html('nice').prepend('!').append('!');