// const userEmail = "hey@123"; //it will return true if there is any value
const userEmail = []; //returns true in case of empty array as well
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// falsy values - these will always be false

// false, 0, -0, BigInt 0n, "", null, undefined, NaN



//truthy values - these will always be true
// Note - anything passed as a string will return true;

// "0", 'false', " ", [], {}, function(){}



// How to check if the array is empty? 

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// How to check if the object is empty? 

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) { 

    //store keys as array, & check array length;

//     console.log("Object is empty");  
// }


// Nullish Coalescing Operator (??): null undefined

// it is used to check if the returned value is null or undefined.
// if its null it will call another function
// if its not null it will store the value whichever comes first 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);