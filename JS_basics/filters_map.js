const coding = ["js","cpp","ruby","java","python"]

const values = coding.forEach((item)=>{
    // console.log(item);
    return item;
})

// console.log(values)

// filters

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// implicit returns in filters
// const newNums = myNums.filter((item)=>item>4)

const newNums = myNums.filter((num)=> {
    return num > 4;
})
newNums.forEach((item)=>{
    // console.log(item)
})

const nums = [];

myNums.forEach((num)=>{
    if(num >4){
        nums.push(num)
    }
})

console.log(nums)