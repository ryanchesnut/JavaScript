// Sum All Numbers in a Range Complete  
function sumAll(arr) {
    var sum = 0;
    arr.reduce(function red(a, b) {
        var max = Math.max(a, b);
        var min = Math.min(a, b);
        for (var i = min; i <= max; i++) {
            sum += i;
        }
    });
    return sum;
}

// Diff Two Arrays
function diffArray(arr1, arr2) {
    var newArr = [];
    var tempArr1 = [];
    var tempArr2 = [];

    tempArr1 = arr1.filter(function (x) {
        return (arr2.indexOf(x) < 0);
    });

    tempArr2 = arr2.filter(function (y) {
        return (arr1.indexOf(y) < 0);
    });

    newArr = tempArr1.concat(tempArr2);

    return newArr;
}



