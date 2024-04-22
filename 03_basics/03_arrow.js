// this keyword- The this keyword refers to the current object in a method or constructor. 

const user = {
    username: "deepak",
    price: 999,

    welcomeMessage: function() {
        console.log(this.username , "welcome to website");
        // here username is = deepak so this refers to deepak.

        console.log(this);
    }
}
// user.welcomeMessage();
// user.username="mahi"; //now its refering to mahi. context is changed from deepak to mahi
// user.welcomeMessage();

// console.log(this); //returns empty as there is no object reference in global

//if we print this on console of a browser it returns "window" object as its the most common global object 

//it gives the same result if we print "this" inside a function
// ex
function hey(){
    let user="random"
    console.log(this);
    console.log(this.user); //it returns undefined as this is only used inside an object not inside function. 
}
// hey();


// -------------------------- ARROW FUNCTION ------------------------------

// Arrow functions allow us to write shorter function syntax:
// int eliminates the use of "function keyword " to declare functions

let myFunction = (a, b) => {
   return a * b       //explicit return
};
// console.log(myFunction(2,3));


// before arrow function

function multiply(a,b){
    return a*b;
}

// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the braces and the return keyword:

let myFunction2 = (a, b) => ( a * b);  //it is known as implicit return

//if there are curly braces it means there should be a return type
// if there are parenthesis it means there is only one statement, hence return type can be avoided
 






// returning an onject with arrow functions

let myFunction3 = (a, b) => ({username:"bryan"}); //objects  must be returned with parenthesis

console.log(myFunction3(2,3));