const name = "Adarsh"
const age = 22

// console.log(name + age + " years old"); This is an outdated format 

// Here is the recommended format

console.log(`Hello everyone, My name is ${name} and I am ${age} years old.`)

// another way of declaring string

const gameName = new String('Mini Militia');
// console.log(gameName)

// console.log(gameName[1])
// console.log(gameName.length)

// // lets see if length function works with name or not

// console.log(name.length) // yes it works

// console.log(gameName.toUpperCase())

// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('n'))

// const newString = gameName.substring(4)
// console.log(newString)

// const anotherString = gameName.slice(-11,4)
// console.log(anotherString)

const newStringOne = "   Adarsh Anand      "
console.log(newStringOne)
console.log(newStringOne.trim()) // removes the extra white spaces

//trimStart() => removes the whitespaces from the starting only
//trimEnd() => removes the whiteSpaces from the end only

const url = "https://adarsh.com/adarsh%20anand"

console.log(url.replace('%20','-'))
console.log(url.includes('adarsh'))


const randomString = "Hello-World-Adarsh"
const rows = randomString.split('-')
console.log(rows)