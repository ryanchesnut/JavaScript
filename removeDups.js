



Array.prototype.removeDups = function ( array = [] ) {
    let returnArray = array.filter( (ele, index, self) => {
        //console.log(`${ele} ${index} ${self}`);
        return index == self.indexOf(ele);
    });
    return returnArray;
}

dupsArray = [ 1, 4, 5, 7 , 0, 4, 1, 6, 12, 55, 88, 55]; 

dupsArray.removeDups(dupsArray); 


