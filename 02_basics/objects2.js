// another way to define values of objects
const car={};
car.company="Lamborghini";
car.model="urus performante";

car.price="5cr";

// console.log(car);

//concatenating objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } 
//it prints obj1 and then obj2 similar to arrays
// const obj3 = Object.assign({}, obj1, obj2, obj4)
//the empty braces are target and the obj1,obj2 obj3 are 
// source from  where elements to be inserted 


const obj3 = {...obj1, ...obj2} //spread operator
// console.log(obj3);


// console.log(Object.keys(car)); //it returns all keys in the form of an array we can use it later on using loops 

//similarly we can print values

//data comes in the form of array when it comes to database 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// then we can access them using loops or normal array variables
// ex 
console.log(users[1]);

//we can now use .operator to access its variables
console.log(users[1].email);

console.log(Object.entries(car)); //return key, value pair in the form of an array

console.log(users.hasOwnProperty('isLoggedIn')); //return boolean value

//its important if we are performing some operation on database and if there is no such value it will crash. So we can check before hand to avoid crash



// ----------------------   DE-STRUCTUTRING OBJECTS ----------------------------
// value to be extracted     source 
const {company}=          car;//we can change the key
const {company:com}=      car;


console.log(company);
console.log(com);




// ------------------------------------- API ------------------------------

//we get api from back end in 2 forms 
 //1 its like objects but it doesn't have name and keys are also strings

//  {
//     "name": "chai or code",
//     "coursename": "js in hindi",
//     "price": "free"
// }


//2 in the form of an array
[
    {},
    {},
    {}
]