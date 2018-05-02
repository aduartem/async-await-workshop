const service = require('./service');

async function getData() {
    try {
        let resultGetData1 = await service.getData1();
        let resultGetData2 = await service.getData2(resultGetData1);
        let resultGetData3 = await service.getData3(resultGetData2);
        let resultGetData4 = await service.getData4(resultGetData3);
        let resultGetData5 = await service.getData5(resultGetData4);
        console.log(resultGetData5)
    } catch (e) {
        console.log(e);
    }
}

getData();
