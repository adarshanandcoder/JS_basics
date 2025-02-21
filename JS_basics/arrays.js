const myArr = [0,1,2,3,4,5,"Addy"]
const myHeros = ["Adarsh" , "Anand"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[2])

//Array Methods

// myArr.push(6) // push in the back of the array
// myArr.push(7)
// myArr.pop(); // deletes the last element from the array

// myArr.unshift(6) // insert 6 at index 0
// myArr.shift() //removes the element from index 0

// console.log(myArr.includes(9)) // it will tell us whether the mentioned thing is the part of the array or not
// console.log(myArr.indexOf(9)) // it will give us the index of the element present otherwise -1


// const newArr = myArr.join() // it will join the whole array and converts it into the string

// console.log(myArr);
// console.log(newArr)

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3); // in slice, we don't include the last range
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) 
// it will manipulate the whole array and removes the elements coming within the range including the starting and ending points as well

console.log("C ", myArr);
console.log(myn2)