// Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.
{
    Number.prototype.plus = function (value) {
        return this + value
    }

    Number.prototype.minus = function (value) {
        return this - value
    }

    //console.log((2).plus(3).minus(1)) // 4
}


// Есть массив в котором лежат объекты с датами, отсортировать по датам.
{
    let arr = [{date: '12.12.2002'},{date: '10.01.2017'},  {date: '05.11.2016'}];

    arr.forEach(function(item) {
        item.time = new Date(item.date).getTime();
    });

    let sorted = arr.sort((a, b) =>  b.time - a.time);

    let res = sorted.map(function (item) {
        return {date: item.date};
    });

    console.log(res);
}


{
    var arr = ['kot', 'tok', 'okt'],
        arr1 = ['kot', 'tok', 'ott'];

    function sameWords(arr) {
        var word1, word2;

        for (var i = 0; i < arr.length - 1; i++) {
            word1 = 0;
            word2 = 0;

            if (arr[i].length !== arr[i + 1].length) {
                return false;
            } else {
                for (var j = 0; j < arr[i].length; j++) {
                    word1 += arr[i][j].charCodeAt(0);
                    word2 += arr[i + 1][j].charCodeAt(0);
                }

                if (word1 !== word2) {
                    return false;
                }
            }
        }

        return true;
    }

    console.log(sameWords(arr));
    console.log(sameWords(arr1))
}


{
    function addMethod(object, name, fn) {
        let old = object[name]
        object[name] = function (){
            if (fn.length === arguments.length){
                return fn.apply(this, arguments)
            } else if (typeof old == 'function'){
                return old.apply(this, arguments)
            }
        }
    }
}



//is object function

{
    function isFunction(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]'
    }

    console.log(isFunction(function () {})) // true
}


function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let resolvedCount = 0;

        promises.forEach((promise, index) => {
            promise
                .then((result) => {
                    results[index] = result;

                    resolvedCount++;

                    if (resolvedCount === promises.length) {
                        resolve(results);
                    }
                })
                .catch((err) => reject(err));
        });
    });
}

promiseAll([
    new Promise((resolve) => {
        setTimeout(() => resolve('foo'), 5000)
    }),

    new Promise((resolve, reject) => {
        setTimeout(() => reject('bar'), 1000);
    }),

    new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.round(Math.random() * 10) % 2 === 0
                ? resolve('baz')
                : reject(new Error());
        }, 300);
    }),
])
    .then((res) => console.log('RESOLVED: ', res))
    .catch((err) => console.log('REJECTED: ', err));


