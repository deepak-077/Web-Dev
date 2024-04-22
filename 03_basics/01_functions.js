function add( num1 ,num2){
    return num1+num2;
}
ans=add(5,6,7);
// console.log(ans);
console.log(add(5,6,7));

// the limitation here is that if we pass 3 arguments then also it adds only 2
//situation- ecom site where we don't know how many arguments will come(how many items a user will buy )
//but we have to calculate the sum of every object. Spread(...) operator helps us do that.


function calculateCartPrice( ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

//it returns every input in the form of an array now we can use loops to find the total sum



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){ //passing array as parameter in function
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));// we can directly initialise the array while passing