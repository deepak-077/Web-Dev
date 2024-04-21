// hoisting - how a function is declared in java script is known as hoisting 
// 2 different ways of declaring functions.


console.log(addone(5)) // we can call the function before initialising;

function addone(num){
    return num + 1
}



addTwo(5) //we can't call the function before initialising;

const addTwo = function(num){
    return num + 2
}