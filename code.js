// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === true){
        return "Hello, World!"
    } else if (input === false) {
        return "Hello, World!"
    }
    return "Hello, " + input + "!";
}

function isFive(input){
    return (input % 2 !== 0)
}

function isEven(input) {
    if (typeof input == "boolean"){
        return false
    } else if (input === NaN){
        return false
    } else if (input % 2 === 0); {
        return true
    } else if (input === "infinity"){
        return false
    }
}
