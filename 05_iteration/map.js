const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//map by default returns unlike for-each loop
//it doesn't conditionally returns unlike filter, it just does some operation 
// const newNums = myNumers.map( (num) => { return num + 10})


// chaining -- attatching multiple functions one after another.
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1) //it will do operation after the first operation i.e[10,20,30,....100]
                .filter( (num) => num >= 40) //similarly it will do operation  

console.log(newNums);