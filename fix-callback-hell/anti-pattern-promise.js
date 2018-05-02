const service = require('./service');

service.getData1().then(
    function (result1) {
        service.getData2(result1).then(
            function (result2) {
                service.getData3(result2).then(
                    function (result3) {
                        service.getData4(result3).then(
                            function (result4) {
                                service.getData5(result4).then(
                                    function (result5) {
                                        console.log(result5);
                                    },
                                    function (error5) {
                                        console.log(error5);
                                    },
                                );
                            },
                            function (error4) {
                                console.log(error4);
                            },
                        );
                    },
                    function (error3) {
                        console.log(error3);
                    },
                );
            },
            function (error2) {
                console.log(error2);
            },
        );
    },
    function (error1) {
        console.log(error1);
    },
);
