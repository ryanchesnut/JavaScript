
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0; 
    }
        isEmpty() {
            if (this.size == 0) {
                return true;
            }
            return false;
        }
}

class Node {
    constructor(value, next, prev){
        this.value = value;
        this.next = next;
    }
}

function createList() {
    const l1 = new LinkedList();
    return l1;
}

function createNode(item){
    return new Node(item, null); 
}

function appendList(list, node){
    if (list.isEmpty()){
        list.head = node; 
        list.tail = node; 
    }
    else {
        list.tail.next = node;
        node.next = null; 
        list.tail = node;  
    }
    list.size++; 
}



const l1 = createList(); 
const n1 = createNode('A');
const n2 = createNode('B'); 
const n3 = createNode('C');  
appendList(l1, n1); 
appendList(l1, n2); 
appendList(l1, n3); 
console.log(l1); 





