//sometimes we don't want anyone else to access the so we can apply some functions using get and set method and prevent from accessing the original one
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    //the variable name should be same as the one in constructor

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
        // "_" defines the variable as private 
        // if we don't use _email their will be a stack overflow as the set method is also initialising value and the constructor is also doing the same 
        
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const deepak = new User("h@open.ai", "abc")
console.log(deepak.email);