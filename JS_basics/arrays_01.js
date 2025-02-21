const marvel_heros = ["Thor" , "Ironman", "Spiderman9"]
const dc_heros = ["superman", "flash" , "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1])

//here push functionality adds the array  as the fourth element 

const all_heros = marvel_heros.concat(dc_heros);
//console.log(all_heros)

//concat functoionality will give us a new array after adding elements of the two arrays

const new_heros = [...marvel_heros, ...dc_heros];
// console.log(new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const new_another_array = another_array.flat(Infinity);
// console.log(new_another_array);


// console.log(Array.isArray("Adarsh")) // we are asking whether the input given is array or not
// console.log(Array.from("Adarsh"))
// console.log(Array.from({name:"Adarsh"})) // interesting case

const obj = {
    name:"Adarsh"
};

const keys = Object.keys(obj);
const values = Object.values(obj);

// console.log(keys);
// console.log(values);

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));
