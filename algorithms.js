
function factorialize(num) {
    var product = 1;
    for (var i = num; i > 1; i--) {
        product *= i;
    }
    return product;
}

function reverseString(str) {
    strArray = str.split("");
    tempArray = strArray.reverse();
    str = tempArray.join("");
    return str;
}


