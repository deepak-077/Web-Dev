let mydate=new Date();
console.log(mydate.toDateString());//readable form of date
console.log(mydate.toString()); // includes gmt time and coodinates

console.log(mydate.toLocaleDateString()); //date in daya to day use form


//own created format of date

let myCreatedDate = new Date(2023, 0, 23)

// let myCreatedDate = new Date("01-14-2023")
// let myCreatedDate = new Date("2023-01-14") // both format prints same result
console.log(myCreatedDate.toDateString());