function divide(dividend, divisor, callback) {
    setTimeout(function() {
        if (divisor == 0) {
            return callback('El divisor debe ser distinto a cero', null);
        }
        callback(null, dividend / divisor);
    }, 2000);
}

let a = 10, b = 5;

divide(a, b, function(error, result) {
    if (error) {
        console.log(error);
        return;
    }
    console.log(a + ':' + b + ' = ' + result);    
});
