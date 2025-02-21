// if statement

// if(true){
//     //execute
// }

// comparisions :- < , > , <= , >= , == , != , === , !== 

// if(2 === "2"){
//     console.log("Equal")
// }else{
//     console.log("Not Equal")
// }

// const temperature = 41;

// if(temperature >= 40){
//     console.log("Temperature is greater than 40")
// }
// else{
//     console.log("Temperature is less than 40")
// }

// console.log("Executed")

//  const balance = 1000;

//  if(balance > 500) console.log("checked");

// const balance = 1000;

// if(balance < 500){
//     console.log("Less than 500")
// }else if(balance < 750){
//     console.log("Less than 750")
// }else if(balance < 900){
//     console.log("Less than 900")
// }else{
//     console.log(`Less than 1200 i.e. ${balance}`)
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Logged In")
}