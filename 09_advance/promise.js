//Creating a new Promise
// promise contains 2 functions 1 resolve and 2 reject
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        // console.log('Async task is complete');
        resolve() //its linking it to then
    }, 1000)
})


// consuming promise
promiseOne.then(function(){
    // console.log("Promise consumed");
})
// then keyword- its directly linked to resolved it defines what should be done after a task is resolved 


// -------------------------integrating the process in one step----------------
new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("async task 2");
        resolve()
    },1000)

}).then(function(){
    // console.log("async 2 resolved");
})



// -----------------------------Accessing some data from database-----------------
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"deepak",email:"deepak.77@gmail.com"})

    },1000)
}).then(function(user){ 
    //we can pass parameters in resolve and it will be returned to then function
    console.log(user);
})


//handling errors 
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})


 promiseFour
 .then((user) => {
    console.log(user);
    return user.username 
    //we can't just return it in a variable and print it
    //let user=promiseFour => console.log(user) it gives unhandled promise exception
}).then((username) => {
    //example of chaining of functions
    //it gets the returned value from previous *then*
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))