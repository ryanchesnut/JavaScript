
String.prototype.reverseString = function reverseString() {
    let s = this.valueOf(String);
    if (this === undefined){
        return undefined; 
    }
    s = this.split('');
    revStr = []; 
    s.forEach(elem => {
        revStr.unshift(elem); 
    });
    revStr = revStr.join('');
    return revStr; 
}


Array.prototype.removeDuplicates =  function removeDups() {
    let arr = this.valueOf(Array); 
    let noDupArr = arr.filter( 
        (ele, index, thisArray) => index == thisArray.indexOf(ele) 
    ); 
    return noDupArr; 
}

//console.log([1,5,3,7,6,3,20,1,5,3,6,200,45,66].removeDuplicates()); 


//let str = 'Hello'; 
//console.log(str.reverseString()); 

// console.log(reverseString('Hello')); 

//              0       1       2           3       4           5
let family = ['Fox', 'Daddy', 'Momma', 'Aryadne', 'Maemae', 'Pop-pop'];

//console.log(family[3] , ' ' , family[0]);

//console.log( family.length ); 

for ( let i = 0; i < family.length; i++ ){
    //console.log(family[i], ' ', i); 
    family.pop(); 
}
console.log(family); 
//concatination
// Use a for loop when we know the ending of the loop

//console.log('The value of family = ' + family); 
