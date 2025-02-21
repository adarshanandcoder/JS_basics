//const tinderUser = new Object() // This is a singleton object
const tinderUser = {}

tinderUser.id = "123sggt";
tinderUser.name = "Anshika Bhagat";
tinderUser.character = "Neech";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "random@gmail.com",
    fullName : {
        userFullName : {
            firstname : "Adarsh",
            lastname : "Anand"
        }
    }
}

// console.log(regularUser.fullName.userFullName.lastname)

const obj1 = {
    1:"a",
    2:"b",
}

const obj2 = {
    3:"a",
    4:"b",
}

const obj4 = {
    5:"a",
    6:"b",
}

//const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = { ...obj1, ...obj2, ...obj4}
// console.log(obj3)

const users = [
    {
        id:1,
        email:"a@gamil.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    }
]

// console.log(users[2].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename : "JS in Hindi",
    price: 999,
    courseInstructor : "Hitesh Choudhary"
}

const {coursename, price, courseInstructor} = course; // destructuring the object

console.log(price);
console.log(courseInstructor)

// something that we are going to use in react 

// const navbar = ({company}) => {
    
// }

// navbar(company = "Adarsh")

