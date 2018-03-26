
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

function palindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/\s|_|\.|,|-|\(|\)|\\|\/|\||:|/g, '');
    strArray = str.split("");
    halfBoundry = strArray.length / 2;
    var j = strArray.length - 1;
    for (var i = 0; i < halfBoundry; i++) {
        if (strArray[i] !== strArray[j]) {
            return false;
        }
        j--;
    }
    return true;
}

