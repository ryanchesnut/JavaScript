
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

function findLongestWord(str) {
    str = str.split(" ");
    var longestStringLength = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i].length > longestStringLength) {
            longestStringLength = str[i].length;
        }
    }
    return longestStringLength;
}

function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
        var letterUpperCase = str[i].split("");
        letterUpperCase[0] = letterUpperCase[0].toUpperCase();
        str[i] = letterUpperCase.join("");
    }
    str = str.join(" ");
    return str;
}

