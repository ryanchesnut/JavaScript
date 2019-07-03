class Stack{
    constructor(max){
        this.max = max; 
        this.stack = []; 
        this.stack.length = max; 
    }

    pop() {
        let i = this.max; 
        while(this.stack[i] == undefined){
            i--; 
        }
        let returnVal = this.stack[i]; 
        this.stack[i] = undefined;
        return returnVal; 
    }

    push(elem){
        let i = 0; 
        while (this.stack[i] != undefined) {
            i++; 
        }
        if(!this.isFull()){
            this.stack[i] = elem; 
        }
    }

    peek(){
        let i = this.max; 
        while (this.stack[i] != undefined){
            i--; 
        }
        let val = this.stack[i - 1]; 
        return val; 
    }

    isFull(){
        if(this.stack[this.max - 1] !== undefined){
            return true; 
        }
        else {
            return false; 
        }
    }

    isEmpty(){
        if(this.stack[0] == undefined){
            return true;
        }
        else {
           return false;  
        }
    }

    print(){
        console.log('============STACK==============');
        for (let i = this.stack.length - 1; i >= 0; i--){
            console.log(
                `| ${this.stack[i]} |`
            )
        }
        console.log('==============================');
        console.log('##############################')
    }

}

let s1 = new Stack(10); 
for(let i = 0; i < s1.max; i++){
    s1.push(i)
}

s1.print(); 
s1.pop(); 
s1.print(); 
s1.push(100); 
s1.print(); 
s1.peek(); 