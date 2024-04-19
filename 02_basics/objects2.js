// another way to define values of objects
const car={};
car.company="Lamborghini";
car.model="urus performante";

car.price="5cr";

console.log(car);

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


console.log(Object.keys(car));//similarly we can print values

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