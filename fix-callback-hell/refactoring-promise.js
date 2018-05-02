const service = require('./service');

service.getData1()
    .then(resultGetData1 => service.getData2(resultGetData1))
    .then(resultGetData2 => service.getData3(resultGetData2))
    .then(resultGetData3 => service.getData4(resultGetData3))
    .then(resultGetData4 => service.getData5(resultGetData4))
    .then(resultGetData5 => console.log(resultGetData5))
    .catch(error => console.log(error));
