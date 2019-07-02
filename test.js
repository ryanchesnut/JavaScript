
class Automobile {

    constructor(make, model, color, engineSize, numOfWheels) {
        this.name  = ''; 
        this.make = make; 
        this.model = model; 
        this.color = color; 
        this.engineSize = engineSize; 
        this.numOfWheels = numOfWheels; 
    }

    getUUID(){
        let uuid = Math.random();
        return this.name + ' ' + uuid; 
    }

}

class Car extends Automobile {

    constructor(make, model, color, engineSize, numOfWheels){
        super(make, model, color, engineSize, numOfWheels); 
        super.getUUID();
        this.name = 'Car'; 

    }

}

class Truck extends Automobile {

    constructor(make, model, color, engineSize, numOfWheels) {
        super(make, model, color, engineSize, numOfWheels);
         
        this.name = 'Truck'; 
    }

}

let a1 = new Automobile('bmw', 'm3', 'red', 'v4', 4); 
console.log(a1.getUUID()); 
let c1 = new Car('bmw', 'm3', 'red', 'v4', 4);
console.log(c1.getUUID()); 
let t1 = new Truck('chevy', 'silverado', 'blue', 'v8', 4);
console.log(t1.getUUID()); 

//each car 4 wheels, trucks 6  
// 8 obj, rand, 
let arr = []; 

for ( let i = 0; i < 4; i++) {
    let tempC = new Car('bmw', 'm3', 'red', 'v4', 4);
    let tempT = new Truck('chevy', 'silverado', 'blue', 'v8',  6);
    arr.push(tempC);
    arr.push(tempT);
}

console.log(arr.length);

let arr2 = arr.filter( elem => elem.name == 'Car' ); 
console.log(arr2);

