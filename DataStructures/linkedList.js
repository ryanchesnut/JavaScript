
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
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

function createList() {
    const l1 = new LinkedList();
    return l1;
}

function createNode(item){
    if(item == undefined){
        item = 'undefined'; 
    }
        return new Node(item, null); 
}

function appendList(list, node){ 
    if (list != null && typeof list !== 'undefined' && node.value !== 'undefined'){
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
}

function prependList(list, node){
    if (list != null && typeof list !== 'undefined' && typeof node !== 'undefined') {
        if(list.isEmpty()){
            list.head = node; 
            list.rear = node;
        }
        else {
            node.next = list.head; 
            list.head = node; 
        }
        list.size++;
    }
}

function insertAtIndex(list, node, index){
    if (list != null && typeof list !== 'undefined' && typeof node !== 'undefined') {
        let result = index >=0 && index <= list.size;
        if(result) {
            if(index == 0){
                prependList(list, node); 
            }
            else if (index == list.size){
                appendList(list, node); 
            }
            else {  
                let temp = list.head; 
                for(let i = 0; i < index -1; i++){
                    temp = temp.next; 
                }              
                let newNode = createNode(node.value); 
                newNode.next = temp.next; 
                temp.next = newNode; 
                list.size++; 
            }
        }
        return result;
    }
}

function deleteFromList(list, index){
    let result = index >= 0 && index < list.size; 
    if(result){
        let node; 
        if (index == 0) {  
            node = list.head; 
            list.head = node.next;
        }
        else {
            let tempNode = list.head;
            for(let i = 0; i < index - 1; i++){
                tempNode = tempNode.next;
            }
            node = tempNode.next; 
            tempNode.next = node.next; 
        }
        list.size--; 
    }
    return result; 
}

function printList(){
    let n = l1.head;
    console.log('Size of linked list', l1.size);
    process.stdout.write(n.value + '=> ');
    for (let i = 0; i < l1.size - 1; i++) {
        if (i == l1.size - 2){
            process.stdout.write(n.next.value + '');
        }
        else {
            process.stdout.write(n.next.value + '=> ');
        }
        n = n.next;
    }
    console.log('');
}

//---------Testing Code ------//

const l1 = createList(); 
const n1 = createNode('1'); 
const n2 = createNode('2'); 
const n3 = createNode('3'); 
const nA = createNode('A');
const nB = createNode('B'); 
const nC = createNode('C'); 
const n4 = createNode('4'); 


appendList(l1, nA); 
appendList(l1, nB); 
appendList(l1, nC); 
appendList(l1, n1); 
prependList(l1, n2); 
insertAtIndex(l1, n2, 4);

printList(); 
deleteFromList(l1, 1); 
printList(); 

for(let i = 0; i < 100; i++){
    let node = createNode('A' + i);
    appendList(l1, node); 
}
printList(); 
for (let i = 0; i < 100; i++) {
    let node = createNode('B' + i);
    prependList(l1, node);
}
printList(); 
for (let i = 0; i < 100; i++) {
    let node = createNode('C' + i);
    insertAtIndex(l1, node, i);
}
printList(); 

//=====Edge Cases======//

const nullNode = createNode(null); 
appendList(l1, nullNode);
prependList(l1, nullNode);
insertAtIndex(l1, nullNode, 200);

const undefinedNode = createNode(undefined);
appendList(l1, undefinedNode);
prependList(l1, undefinedNode);
insertAtIndex(l1, undefinedNode, 300);

const emptyNode = createNode('');
appendList(l1, emptyNode);
prependList(l1, emptyNode);
insertAtIndex(l1, emptyNode, 300);

printList();

insertAtIndex(l1, nullNode, l1.size + 2);
insertAtIndex(l1, nullNode, -1);

appendList(null, nullNode);
appendList(undefined, nullNode);

printList();  



//=====================//
