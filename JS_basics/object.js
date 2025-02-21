//dingleton
// Object.create

// object literals

const mySym = Symbol("key1")

const user ={
    name : "Adarsh",
    "full name" : "Adarsh Anand",
    age : 21,
    [mySym] : "myKey1",
    location : "Bangalore",
    email:"adarshanand141203@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday" , "Saturday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"])
// console.log(typeof user[mySym]);

// change the values inside the object

user.email = "addynagar@gmail.com";
// Object.freeze(user);
// user.email = "hellobudy@gmail.com"
// console.log(user);


user.greetings = function() {
    console.log("Hello Mr.user")
}

user.greetingsTwo = function(){
    console.log(`Hello user, ${this["full name"]}`)
}

console.log(user.greetings());
console.log(user.greetingsTwo());

console.log(user);