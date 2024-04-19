// In real life, a car is an object.
// A car has properties like weight and color, and methods like start and stop:
// Objects are variables too. But objects can contain many values.
// This code assigns many values (Fiat, 500, white) to a variable named car:
//its common practice to declare objects with const keyword

// const newcar={} //empty object
const car={
"Established": 1931,   
company:"Porsche",
model:911,
price:"3cr",
place :"Delhi"

};
console.log(car.company);
console.log(car.model);
console.log(car["price"]); //another way to print objects
console.log(car["Established"]); //as sometimes this may be the case where we cant use .operator

//we have to js to take the variable as string 
// as internally it is stored as string only

car.model=912;
console.log(car.model);
// Object.freeze(car); //it freezes any changes to the object

// car.company="lamborghini";
// car.model="912 GTRS";
// console.log(car.model);
// console.log(car.company);

car.dealer=function(){
    console.log("Welcome to "+ this.place +" Showroom");
}
console.log(car.dealer());
