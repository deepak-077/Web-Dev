const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
Math.PI = 5; //we can't override PI value because writable property is false
// console.log(Math.PI);

// we can also create our own objects which can't be changed, can't be traversed

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// changing properties of our own functions

Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false,
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));


//since enumerable is false we can't apply loop on name property
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
