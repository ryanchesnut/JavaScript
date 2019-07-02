
function binarySearchIterative (arr, queryValue) {
    let high = arr.length -1; 
    let low = 0; 

    while (low <=  high) { 
        let mid = parseInt((high + low) / 2); 
        if (queryValue === arr[mid] ){
            return true; 
        } 
        else if (queryValue < arr[mid]){
            high = mid - 1;
        }
        else {
            low = mid + 1; 
        }
    }
    return false; 
}

//Tests 
let arr = [1, 3, 5, 7, 8, 9, 10, 23]; 
for(let i = 0; i < arr[arr.length-1]; i++){
    console.log('Query value : ' + i + '|'+ binarySearchIterative(arr, i)); 
}




