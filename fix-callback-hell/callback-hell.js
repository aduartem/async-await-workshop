function getData1(callback) {
    console.log('hit getData1()');
    setTimeout(() => {
        callback(null, {data1: 1});
    }, 1000);
}

function getData2(params, callback) {
    console.log('hit getData2()');
    setTimeout(() => {
        //...
        if (params.data1 != 1) {
            return callback('Hubo un error. params.data1 != 1', null);
        }
        callback(null, {data2: 2});
    }, 1000);
}

function getData3(params, callback) {
    console.log('hit getData3()');
    setTimeout(() => {
        //...
        if (params.data2 != 2) {
            return callback('Hubo un error. params.data2 != 2', null);
        }
        callback(null, {data3: 3});
    }, 1000);
}

function getData4(params, callback) {
    console.log('hit getData4()');
    setTimeout(() => {
        //...
        if (params.data3 != 3) {
            return callback('Hubo un error. params.data3 != 3', null);
        }
        callback(null, {data4: 4});
    }, 1000);
}

function getData5(params, callback) {
    console.log('hit getData5()');
    setTimeout(() => {
        //...
        if (params.data4 != 4) {
            return callback('Hubo un error. params.data4 != 4', null);
        }
        callback(null, {data5: 5});
    }, 1000);
}

getData1((errorGetData1, resultGetData1) => {
    if (errorGetData1) {
        console.log(errorGetData1);
    }
    getData2(resultGetData1, (errorGetData2, resultGetData2) => {
        if (errorGetData2) {
            console.log(errorGetData2);
        }
        getData3(resultGetData2, (errorGetData3, resultGetData3) => {
            if (errorGetData3) {
                console.log(errorGetData3);
            }
            getData4(resultGetData3, (errorGetData4, resultGetData4) => {
                if (errorGetData4) {
                    console.log(errorGetData4);
                }
                getData5(resultGetData4, (errorGetData5, resultGetData5) => {
                    if (errorGetData4) {
                        console.log(errorGetData4);
                    }
                    console.log(resultGetData5);
                });
            });
        });
    });
});