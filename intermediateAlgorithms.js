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

function convertToRoman(num) {
    var tens;
    var hundreds;
    var thousands;
    var tenThousands;
    var finalString;
    var str = num.toString();
    str = str.split('');

    for (var i = str.length - 1; i >= 0; i--) {
        if (i === str.length - 1) {
            finalString = findOnes(str[i]);
        }
        else if (i == str.length - 2) {
            finalString = findTens(str[i]) + finalString;
        }
        else if (i == str.length - 3) {
            finalString = findHundreds(str[i]) + finalString;
        }
        else if (i == str.length - 4) {
            finalString = findThousands(str[i]) + finalString;
        }
    }

    //alert(finalString); 
    return finalString;
}

//=======================================
//Roman Numeral Converter

function findThousands(num) {
    switch (num) {
        case '0':
            return '';
        case '1':
            return 'M';
        case '2':
            return 'MM';
        case '3':
            return 'MMM';
        case '4':
            return 'MMMM';
        case '5':
            return 'MMMMM';
        case '6':
            return 'MMMMMM';
        case '7':
            return 'MMMMMMM';
        case '8':
            return 'MMMMMMMM';
        case '9':
            return 'MMMMMMMMM';
        default:
            return null;
    }
}

function findHundreds(num) {
    switch (num) {
        case '0':
            return '';
        case '1':
            return 'C';
        case '2':
            return 'CC';
        case '3':
            return 'CCC';
        case '4':
            return 'CD';
        case '5':
            return 'D';
        case '6':
            return 'DC';
        case '7':
            return 'DCC';
        case '8':
            return 'DCCC';
        case '9':
            return 'CM';
        default:
            return null;
    }
}

function findTens(num) {
    switch (num) {
        case '0':
            return '';
        case '1':
            return 'X';
        case '2':
            return 'XX';
        case '3':
            return 'XXX';
        case '4':
            return 'XL';
        case '5':
            return 'L';
        case '6':
            return 'LX';
        case '7':
            return 'LXX';
        case '8':
            return 'LXXX';
        case '9':
            return 'XC';
        default:
            return null;
    }
}

function findOnes(num) {
    switch (num) {
        case '0':
            return '';
        case '1':
            return 'I';
        case '2':
            return 'II';
        case '3':
            return 'III';
        case '4':
            return 'IV';
        case '5':
            return 'V';
        case '6':
            return 'VI';
        case '7':
            return 'VII';
        case '8':
            return 'VIII';
        case '9':
            return 'IX';
        default:
            return null;
    }
}

//=======================================


