let currentDate = new Date();
// console.log(currentDate)
// console.log(currentDate.toString())
// console.log(currentDate.toISOString())
// console.log(currentDate.toJSON())
// console.log(currentDate.toDateString())
// console.log(currentDate.toLocaleString())

// let createdDate = new Date(2025, 1, 11)
let createdDate = new Date(2025, 1, 11, 15, 33)
// console.log(createdDate.toLocaleString())

// TIMESTAMPS   
let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(createdDate.getTime())

//if we want the timestamps to be in seconds

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

// console.log(newDate.getDate())
// console.log(newDate.getDay())
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getFullYear())

//something important to play with

newDate.toLocaleString('default',{
    weekday:'long',
})



