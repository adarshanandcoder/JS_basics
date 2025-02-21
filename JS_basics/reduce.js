const nums = [1, 2, 3]

const myTotal = nums.reduce(function(acc,currval){
    // console.log(`acc is ${acc} and currval is ${currval}`)
    return acc + currval;
}, 0)

const myTotal1 = nums.reduce((acc, currval) => acc + currval ,0)

// console.log(myTotal1)

const shoppingCart = [
    {
        itemName : "Javascript Course",
        itemPrice : 3999
    },
    {
        itemName : "Python Course",
        itemPrice : 2999
    },
    {
        itemName : "Mobile dev Course",
        itemPrice : 5999
    },
    {
        itemName : "Data Science Course",
        itemPrice: 2999
    }
]

// now we have add the prices of the items added in cart

const cartTotal = shoppingCart.reduce((acc, item)=> acc + item.itemPrice ,0)
console.log(cartTotal)