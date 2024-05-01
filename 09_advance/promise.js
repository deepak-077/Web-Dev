//Creating a new Promise
// promise contains 2 functions 1 resolve and 2 reject
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task - which will take time for completion.
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
        let error = false;
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



const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    const response=await promiseFive 
    console.log(response); //this works fine when no error (i.e error =false) are there
}
consumePromiseFive();
//when there is chance of getting error use try catch


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();



// async function - It like ".then" it  waits for some time for the function to complete if its completed it will move forward else give error
//it can't handle errors 

// it is useful in situations where it can't move forward without database connection. 