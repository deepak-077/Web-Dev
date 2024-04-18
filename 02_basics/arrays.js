let arr=[1,2,3,4,"hey"]; //we can pass any objects in the array. we can also pass another array as object
console.log(arr);

// let arr2=new Array(1,2,3,"hey");
// console.log(arr2);

arr.push(6);
arr.push(8);
// arr.pop(4); //it will pop the last element only
console.log(arr);

console.log("spliced = "+arr.splice(4,1)); //it return the deleted number in array

console.log(arr);



let marvel=["thor",'iron man'];
console.log(marvel);

let dc=["batman",'superman'];
// marvel.push(dc); ///passing another array as object
console.log(dc);

let pichkuHeros=["vision",'spiderman'];


//another ways to concatenate 2 arrays.
//1 concatenate

 let newHero=marvel.concat(dc,pichkuHeros); 
 console.log(newHero);

//2 spread operator- it breaks down pieces as the name suggests
let new_hero=[...marvel, ...dc];//it can concatenate as many elements


//convertion to array

//case 1

let dhoni_sr=200;
let kohli_sr=175;
let rohit_sr=180;
let sr=Array.of(dhoni_sr,kohli_sr,rohit_sr);
console.log(sr);


//case 2 array inside array

let another=[1,2,[3,4,5],6,7["hola","bonjour"]];
let another2=["hey","hello",["namaste","ciao","helo"],["hola","bonjour"]];
let newarr =another2.flat(Infinity); //it can only convert to array if it 
//contains similar items 
console.log(newarr);


//case 3 - useful for data scraping

console.log(Array.isArray("hola"));
console.log(Array.from("hola"));// converting anything to array 
// if there is anything its not able to convert it will return empty array.











