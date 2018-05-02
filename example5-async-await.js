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

async function main(a, b) {
    try {
        result = await divide(a, b);
        console.log(a + ':' + b + ' = ' + result);
    } catch(e) {
        console.log(e);
    }
}

main(10, 5);