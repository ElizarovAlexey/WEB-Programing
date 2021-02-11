let str = 'hello';

let ucFirst = (str) => {
    let newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
}

alert(ucFirst(str));