self.onmessage = function (mes) {
    console.log(mes);
    let sum = 0
    for (let i = 0; i < 10000000000; i++) {
        sum+=1
    }
    postMessage('sum 1')
};

