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
hey();


// -------------------------- ARROW FUNCTION ------------------------------


