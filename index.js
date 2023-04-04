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


