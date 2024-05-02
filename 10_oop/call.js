function SetUsername(username){
    //complex DB calls
    this.username = username
    
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this,username) 
    // .call - this calls a method of an object
    // its no longer used because of implementation of class in JS
    // super keyword is used instead
   
    this.email = email

    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);




// ----------------------------Class implementation-----------------------

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}