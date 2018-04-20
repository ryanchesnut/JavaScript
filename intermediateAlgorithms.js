
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



