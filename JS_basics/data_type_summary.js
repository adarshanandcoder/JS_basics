// Based on how we can store and access the data from memory, we have classified data types into two :- 

// 1. Primitive
// 7 types => String, Number, Boolean, null, undefined, Symbol, BigInt

//2. Non-Primitive or Reference-type
// Array, Objects, Functions

//Javascript is a dynamically typed language i.e. variable types are determined at runtime.

const heroes = ["Army" , "Navy" , "Air Force"];
let obj = {
    name : "Adarsh",
    age: 21,
}

const myFunction = function() {
    console.log("Hello World")
}

// myFunction();

// Memory

// There are two types of Memory

// Stack(Primitive) Heap(Non-Primitive)

let username = "adarshanand2307"

let mynewUserName = username
mynewUserName = "adarshanand1412"

// console.log(username)
// console.log(mynewUserName)

//since it is a primitive data type so here we get the values as copy not as reference

const userOne = {
    email:"adarshanand141203@gamil.com",
    upiId : "adarsh@ybl",
}

const userTwo = userOne;

userTwo.email = "21cs3002@rgipt.ac.in"

console.log(userOne)
console.log(userTwo)

// This happens because they object is a non-primitivfe data type