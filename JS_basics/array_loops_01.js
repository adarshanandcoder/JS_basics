// for-of loop :- we get the values directly
// for-in loop :- we get the indexes 


const myObject = {
    js : "Javascript",
    cpp : "C++",
    py : "Python",
    rb : "Ruby"
}

for(const key in myObject) {
    // console.log(myObject[key])
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "rb", "cpp", "java", "rp"]

for(const key in programming){
    // console.log(programming[key])
}

const map = new Map()

map.set('IN', "India")
map.set("USA", "United States of America")
map.set("Fr", "France")

// for(const key in map){
//     console.log(map[key])
// }

// we can't iterate the map through for in loop