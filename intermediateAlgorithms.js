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


// Wherefore art thou
function whatIsInAName(collection, source) {
    var arr = [];
    var matches;
    for (var i = 0; i < collection.length; i++) {
        var keys = Object.keys(source);
        for (var j = 0; j < keys.length; j++) {
            matches = true;
            console.log(source[keys[j]] + " == " + collection[i][keys[j]]);
            if (source[keys[j]] !== collection[i][keys[j]]) {
                matches = false;
            }
        }
        if (matches) {
            arr.push(collection[i]);
        }

    }
    return arr;
}

// Search and Replace

function myReplace(str, before, after) {
    str = str.split(' ');
    var index = str.indexOf(before);

    if (before[0] == before[0].toUpperCase()) {
        after = after.split('');
        after.splice(0, 1, after[0].toUpperCase());
        after = after.join('');
    }
    else {
        after = after.split('');
        after.splice(0, 1, after[0].toLowerCase());
        after = after.join('');
    }

    str.splice(index, 1, after);
    str = str.join(" ");
    return str;
}

// Pig Latin 

//=======================================

function translatePigLatin(str) {

    if (isConsonant(str[0])) {
        str = str.split('');
        var i = 0;

        while (isConsonant(str[0])) {
            var consonant = str[0];
            str.push(consonant);
            str.shift();
        }

        str = str.join('') + 'ay';
    }
    else {
        str = str + 'way';
    }
    return str;
}


function isConsonant(char) {
    char = char.toLowerCase();
    switch (char) {
        case 'a':
            return false;
        case 'e':
            return false;
        case 'i':
            return false;
        case 'o':
            return false;
        case 'u':
            return false;
        case 'y':
            return false;
        default:
            return true;
    }

}

//=======================================

// DNA Pairing

function pairElement(str) {
    str = str.split('');
    var finalArray = [];

    for (var i = 0; i < str.length; i++) {
        var pairArray = [];
        pairArray.push(str[i]);
        pairArray.push(matchPair(str[i]));
        finalArray.push(pairArray);
    }
    return finalArray;
}

function matchPair(element) {
    switch (element) {
        case 'A':
            return 'T';
        case 'T':
            return 'A';
        case 'C':
            return 'G';
        case 'G':
            return 'C';
        default:
            return null;
    }
}

//=======================================

// Missing letters

function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) + 1 !== str.charCodeAt(i + 1) && i !== str.length - 1) {
            console.log(String.fromCharCode(str.charCodeAt(i) + 1));
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }

    return undefined;
}


//=======================================

// Boo who

function booWho(bool) {

    if (typeof (bool) === 'boolean') {
        return true
    }

    return false;
}

//=======================================

// Sorted Union

function uniteUnique(arr) {
    arr = Array.from(arguments);
    var finalArr = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (finalArr.indexOf(arr[i][j]) == -1) {
                finalArr.push(arr[i][j]);
            }
        }
    }
    return finalArr;
}

//=======================================

// Convert HTML Entities
function convertHTML(str) {
    // &colon;&rpar;

    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&apos;');

    return str;
}


//=======================================

// Spinal Tap Case

function spinalCase(str) {
    str = str.replace(/ /g, '-');
    str = str.replace(/_/g, '-');
    str = str.split('');
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            str[i] = str[i].toLowerCase();
            if (i > 0 && str[i - 1] !== '-' && str[i] !== '-') {
                str.splice(i, 0, '-');
            }
        }
    }
    str = str.join('');
    return str;
}

//=======================================

// Sum All Odd Fibonacci Numbers

function sumFibs(num) {

    var num1 = 1;
    var num2 = 1;
    var sum = 0;
    var oddTotal = 0;

    while (num1 <= num) {
        sum = num1 + num2;
        if ((num1 % 2) == 1) {
            oddTotal += num1;
        }
        num1 = num2;
        num2 = sum;
    }

    return oddTotal;
}

//=======================================

// Sum All Primes

function sumPrimes(num) {
    var sum = 0;
    for (var i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

function isPrime(num) {
    var upperBound = num;
    for (var i = 2; i < upperBound - 1; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

//=======================================

// Smallest Common Multiple

function smallestCommons(arr) {
    arr = Array.from(arguments);
    var start = 0;
    var end = 0;
    var startNumber = 0;
    var numberFound = false;
    var endNumber = 0;
    if (arr[0][0] > arr[0][1]) {
        start = arr[0][1];
        end = arr[0][0];
    }
    else {
        start = arr[0][0];
        end = arr[0][1];
    }
    startNumber = start * end;
    while (!numberFound) {
        for (var i = start; i <= end; i++) {
            if (startNumber % i !== 0) {
                break;
            }
            if (i == end) {
                endNumber = startNumber;
                numberFound = true;
            }
        }
        startNumber++;
    }
    return endNumber;
}

//=======================================

// Finders Keepers

function findElement(arr, func) {
    var num;
    var firstInst = false;
    arr.filter(function (val) {

        console.log(val);
        if (func(val) && !firstInst) {

            console.log(func(val), val);
            firstInst = true;
            num = val;
        }

    });

    return num;
}

//=======================================

// Drop it 

function dropElements(arr, func) {
    var returnArr = [];
    var count = 0;
    var len = arr.length;

    while (!func(arr[0]) || count >= len) {
        arr.shift();
        count++;
    }
    return arr;
}

//=======================================

//Steamroller

function steamrollArray(arr) {
    var steamArray = [];
    // I'm a steamroller, baby
    arr.forEach(function (elem) {
        if (Array.isArray(elem)) {
            var subArray = steamrollArray(elem);
            steamArray = steamArray.concat(subArray);
        }
        else {
            steamArray.push(elem);
        }
    });
    return steamArray;
}

//=======================================

//Binary Agents

function binaryAgent(str) {
    str = str.split(' ');
    var endString = '';
    for (var i = 0; i < str.length; i++) {
        var code = convertBinaryToTen(str[i]);
        var char = String.fromCharCode(code);
        endString += char;
    }
    console.log(endString);

    return endString;
}

function convertBinaryToTen(str) {
    str = str.split('');
    var sum = 0;
    var index = 0;

    for (var i = str.length - 1; i >= 0; i--) {
        sum += (Number(str[index]) * Math.pow(2, i));
        index++;
    }

    return sum;
}
//=======================================


