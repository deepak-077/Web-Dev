// IIFE - Imidiately invoked function expression
// its main purpose is to execute the function immediately and it also saves the function from global variable pollution i.e it save us from affecting the functions from global variables.

(function chai(){ 
    // named IIFE because it has name
    console.log(`DB CONNECTED`);
})();

//SYNTAX ----- ()(); 

// first parenthesis is for the function declaration and second for calling the function.
// similar to function add() for declaration and second add() for invoking the function
// the semicolon tells the program to stop execution because sometimes it doesn't know when to stop execution. it can cause problems while writing 2 iife

( () => {
    // unnamed iife
    console.log("DB CONNECTED TWO" );
} )();

//passing an argument
((num) => {
    console.log("db connected", num)

})(3);
