

// Factorial 
function factorialize(num) {
    var product = 1;
    for (var i = num; i > 1; i--) {
        product *= i;
    }
    return product;
}

// Reverse a string
function reverseString(str) {
    strArray = str.split("");
    tempArray = strArray.reverse();
    str = tempArray.join("");
    return str;
}

// Check for palindromes
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

// Find the longest word in a string
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

// Title case a sentence 
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

// Return largest numbers in arrays 
function largestOfFour(arr) {
    var maxArray = [];
    for (var i = 0; i < arr.length; i++) {
        var maxNumber = 0;
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > maxNumber) {
                maxNumber = arr[i][j];
                maxArray[i] = maxNumber;
            }
        }
    }
    return maxArray;
}

// Confirm the ending 
function confirmEnding(str, target) {
    var startString = str.length - target.length;
    var endString = str.length;
    if (target == str.substring(startString, endString)) {
        return true;
    }
    return false;
}

// Repeat a string, repeat a string 
function repeatStringNumTimes(str, num) {
    // repeat after me
    var compiledString = "";
    if (num < 0) {
        return "";
    }
    else {
        for (var i = 0; i < num; i++) {
            compiledString += str;
        }
        return compiledString;
    }
}

//Truncate a string 
function truncateString(str, num) {
    var truncatedString = "";
    if (str.length > num) {
        if (num <= 3) {
            truncatedString = str.slice(0, num);
        }
        else {
            truncatedString = str.slice(0, num - 3);
        }
        truncatedString += "...";
        return truncatedString;
    }
    return str;
}

// Chunky Monkey 
function chunkArrayInGroups(arr, size) {
    var tempArray = [];
    var end = size;
    for (var i = 0; i < arr.length; i += size) {
        tempArray.push(arr.slice(i, end));
        end += size;
    }
    arr = tempArray;
    return arr;
}

// Slasher Flick 
function slasher(arr, howMany) {
    for (var i = 0; i < howMany; i++) {
        arr.splice(0, 1);
    }
    return arr;
}

// Mutations 
function mutation(arr) {
    var compareArray = arr[1].toLowerCase().split("");
    for (var i = 0; i < compareArray.length; i++) {
        var letterFound = arr[0].toLowerCase().indexOf(compareArray[i]);
        if (letterFound < 0) {
            return false;
        }
    }
    return true;
}


// Falsy Bouncer 
function bouncer(arr) {
    arr = arr.filter(isInFalsyArray);
    return arr;
}

function isInFalsyArray(element) {
    var falsyArray = [false, null, 0, "", undefined, NaN];
    if (falsyArray.includes(element)) {
        return false;
    }

    return true;
}



// Seek and Destroy
var filterArguments = [];

function destroyer(arr) {
    for (var i = 1; i < arr.length; i++) {
        if (arguments[i] !== undefined) {
            filterArguments[i - 1] = arguments[i];
        }
    }
    var filteredArray = arguments[0].filter(isInArray);
    return filteredArray;
}

function isInArray(element) {
    if (filterArguments.includes(element)) {
        return false;
    }
    return true;
}





