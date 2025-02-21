const user = {
    username : "Adarsh Anand",
    price : 999,
    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website.`)
    }
}

// this keyword refers to the current context

// user.welcomeMessage();
user.username = "Manas";
// user.welcomeMessage();

function one() {
    let username = "Adarsh"
    console.log(this.username); // we can't use this functionality inside a function
}

// one();

const two = function() {
    let username = "Adarsh"
    console.log(this.username); // undefined
}

// two();

// arrow functions

const three = () => {
    console.log("Hello Buddy !")
}

// three();

// there are two type of returns 

// 1. Implicit return => here we don't need to specify the return keyword
// 2. Explicit return => here we have to particularly specify the return

// const addTwoNumbers = (number1, number2) => {
//     return number1 + number2; // this is what we called explicit return 
// }

// const addTwoNumbers = (number1, number2) => number1+ number2 // example of implicit function

const addTwoNumbers = (number1, number2) => (number1 + number2)

// console.log(addTwoNumbers(3,4));

const helloTwoNumbers = (num1, num2) => ({username : "Adarsh Anand"})

console.log(helloTwoNumbers())