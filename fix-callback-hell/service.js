exports.getData1 = function() {
    console.log('hit getData1()');
    return new Promise((resolve, reject) => { 
        setTimeout(resolve, 1000, {data1: 1});
    });
}
exports.getData2 = function (params) {
    console.log('hit getData2()');
    return new Promise((resolve, reject) => {
        //...
        if (params.data1 == 1) {
            setTimeout(resolve, 1000, {data2: 2});
        } else {
            setTimeout(reject, 1000, 'Hubo un error. params.data1 != 1');
        }
    });
}
exports.getData3 = function (params) {
    console.log('hit getData3()');
    return new Promise((resolve, reject) => {
        //...
        if (params.data2 == 2) {
            setTimeout(resolve, 1000, {data3: 3});
        } else {
            setTimeout(reject, 1000, 'Hubo un error. params.data2 != 2');
        }
    });
}
exports.getData4 = function (params) {
    console.log('hit getData4()');
    return new Promise((resolve, reject) => {
        //...
        if (params.data3 == 3) {
            setTimeout(resolve, 1000, {data4: 4});
        } else {
            setTimeout(reject, 1000, 'Hubo un error. params.data3 != 3');
        }
    });
}
exports.getData5 = function (params) {
    console.log('hit getData5()');
    return new Promise((resolve, reject) => {
        //...
        if (params.data4 == 4) {
            setTimeout(resolve, 1000, {data5: 5});
        } else {
            setTimeout(reject, 1000, 'Hubo un error. params.data4 != 4');
        }
    });
}