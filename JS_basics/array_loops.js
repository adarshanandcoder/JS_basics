// for of

// ["" ,"" ,""]
//[{}, {}, {}]

const numArray = [1, 2, 3, 4, 5];

for (const num of numArray) {
    // console.log(num);
}

const greetings = "Hello World!"

for(const greet of greetings){
    if(greet == " ") continue;
    // console.log(`Character is ${greet}`);
}

//maps

const map = new Map()

map.set('IN',"India")
map.set("USA","United States of America")
map.set("Fr","France")
map.set('IN',"India")

// console.log(map)

for(const [key, value] of map){
    // console.log(key, ':-', value)
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

//Object is not iterable by this way

for(const [key,value] of myObject){
    // console.log(key, ':-', value)
}

