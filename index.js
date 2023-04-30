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

    // console.log(res);
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

    // console.log(sameWords(arr));
    // console.log(sameWords(arr1))
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



//is object a function

{
    function isFunction(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]'
    }

    //console.log(isFunction(function () {})) // true
}




{
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
    const fn = () => promiseAll([
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
}

{
    function getTrackableObject(obj) {
        if (obj[Symbol.for('isTracked')]) return obj;
        const tracked = Array.isArray(obj) ? [] : {};
        for (const key in obj) {
            Object.defineProperty(tracked, key, {
                configurable: true,
                enumerable: true,
                get() {
                    return obj[key];
                },
                set(value) {
                    if (typeof value === 'object') {
                        value = getTrackableObject(value);
                    }
                    obj[key] = value;
                    console.log(`'${key}' has changed.`);
                },
            });
        }
        // marked as 'tracked'
        Object.defineProperty(tracked, Symbol.for('isTracked'), {
            configurable: false,
            enumerable: false,
            value: true,
        });
        return tracked;
    }

// track app state
    const obj = {foo: 1}
    const appState = getTrackableObject(obj);

    appState.foo = 1; // log `'foo' has changed.`
}

{
    function curry(fn) {

        return function curried(...args){
            if(args.length >= fn.length) {
                return console.log('log')
            } else {
                return function(...args2){
                    console.log(args)
                    return curried.apply(this, args.concat(args2))
                }
            }
        }
    }
    const join = (a, b, c) => {
        return `${a}_${b}_${c}`
    }

    const curried = curry(join)
   // console.log(curried(1)(2)(3))
}

{
    const worker = new Worker("module.js");
    // worker.onmessage = (mes) => {
    //     console.log(mes.data)
    // }

    document.querySelector("#app").addEventListener("click", () => {
        worker.postMessage("Hello");
        console.log("sended");
    });
}

//implement debounce

{
    const debounce = (func, timer = 1000) => {
        let timerID;
        return (...args) => {
            if (timerID) {
                clearTimeout(timerID)
            }

            timerID = setTimeout(() => {
                func.apply(this, args)
            }, timer)
        }
    }

    const fn = () => console.log('call 1 time')

    const debounced = debounce(fn)
}

// create flatten function
{
    const flatten = array => {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                result.push(...flatten(array[i]))
            } else {
                result.push(array[i])
            }
        }

        return result
    }

    //console.debug(flatten([1, [2, [3, 4]]]))
}

{
    function has(path, object) {
        let currentObject = object;

        for (let i = 0; i < path.length; i++) {
            if (!currentObject.hasOwnProperty(path[i])) {
                return false;
            }
            currentObject = currentObject[path[i]];
        }

        return true;
    }

    //console.info(has(['o', 'a'], {o: {a: 2}}))
}
