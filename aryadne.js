



function start(counter) {
    if (counter < 1003) {
        setTimeout(function () {
            counter++;
            console.log(counter);
            start(counter);
        }, 1000);
    }
}
start(process.argv[2]); 
process.argv.forEach(element => {
    console.log(element);
});

