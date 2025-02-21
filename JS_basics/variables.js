const accountId = 12345
let accountEmail = "adarsh@gmail.com"
let accountPassword = "Adarsh@1"
accountCity = "Jaipur"

// accountId = 2 ;  Not allowed to dos o as we can't change the value stored in const 

accountEmail = "addy@gmail.com"
accountPassword = "Hello@1"
accountCity = "Bengaluru"

// in today's scenario we don't use var because of its issues in block scope and functionality scope.

console.log(accountId)

console.table([accountId , accountEmail , accountPassword , accountCity]);