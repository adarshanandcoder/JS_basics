// Immediately Invoked Function Expression (IIFE)

// humlog global scope ke pollution se bachne ke liye iife ka use krte hain. we want that function to run immediately

(function explore(){
    //This is an example of named IIFE
    console.log(`DB Connected`)
})();

((name) => {
    console.log(`DB Connected 2 ${name}`)
})('Adarsh'); 


// what i have noticed during interrogative study is that , we can't implement IIFE using a named arrow function but we can use it with an arroe function that has not a name


