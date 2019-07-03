function binarySearchRecursive(arr, queryValue) {
    let high = arr.length; 
    let low = 0; 
    let mid = Math.floor((high - low) / 2); 
    let midValue = arr[mid]; 
    if (high <= low){
        return false;
    }
    else if (midValue == queryValue){
        return true; 
    }
    else if (queryValue < midValue){
        let lowArr = arr.slice(low, mid); 
        return binarySearchRecursive(lowArr, queryValue); 
    }
    else if (queryValue > midValue) {
        let highArr = arr.slice(mid + 1, high + 1); 
        return binarySearchRecursive(highArr, queryValue); 
    }
    else {
        return false; 
    }
}