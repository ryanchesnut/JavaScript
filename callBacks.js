
/*
function one() {
    setTimeout( function() {
        console.log(1); 
    }, 500); 
}

function two() {
    console.log(2); 
}

one(); 
two(); 
*/ 

function doHomework(subject, callback) {
    console.log(`Start my ${subject} homework.`); 
    callback();
}

doHomework('Math', function() { 
    console.log('Finished my homework');
}); 