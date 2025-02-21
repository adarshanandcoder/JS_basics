function sayMyName() {
    console.log("A")
    console.log("d")
    console.log("a")
    console.log("r")
    console.log("s")
    console.log("h")
}

// sayMyName // if we will write until this only then it is called as reference

//sayMyName(); // if we will write like this then we tell to execute the function

// function addTwoNumbers (number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    return number1 + number2;
}

const result = addTwoNumbers(3,4);
// console.log(result);

function loggedInMessage(username) {
    if(!username){
        console.log("Please enter a username")
        return;
    }
    return `${username} just logged in.`
}

// we can also add a default value to the parameter
// function loggedInMessage(username = "sam") {
//     if(!username){
//         console.log("Please enter a username")
//         return;
//     }
//     return `${username} just logged in.`
// }


// console.log(loggedInMessage(""))

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

//console.log(calculateCartPrice(100,300, 500, 2000));

const user ={
    username:"Adarsh Anand",
    age : 21
}

function handleObject(anyObject) {
    console.log (`username is ${anyObject.username} and age is ${anyObject.age}.`)
}

// handleObject(user);
// handleObject({
//     username:"Manas",
//     age:21,
// })

const myNewArray = [10, 20, 30, 40]

function handleArray(anyArray) {
    return anyArray[1];
}

console.log(handleArray(myNewArray))

