function divide(dividend, divisor) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            if (divisor == 0) {
                reject('El divisor debe ser distinto a cero');
            }
            let result = dividend / divisor;
            resolve(result);
        }, 2000);
    });
}

let a = 10, b = 5;

divide(a, b).then(
    function (result) {
        console.log(a + ':' + b + ' = ' + result);
    }, 
    function (error) {
        console.log(error);
    }
);