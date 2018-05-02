function divide(dividend, divisor) {
    if (divisor == 0) {
        return null;
    }
    return dividend / divisor;
}

let a = 10;
let b = 5;
let result = divide(a, b);

if (result === null) {
    console.log('El divisor debe ser distinto a cero');
} else {
    console.log(a + ':' + b + ' = ' + result);
}
