const price = '$120';

let extractCurrencyValue = (price) => {
    let numberPrice = price.slice(1);
    return Number(numberPrice);
}

alert(extractCurrencyValue(price) === 120);