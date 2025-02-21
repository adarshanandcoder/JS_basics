for(let i=0; i<=10 ;i++){
    const element = i;
    // console.log(element);
}

for(let i=0;i<=10;i++){
    const element = i;
    if(element === 5){
        // console.log("5 is the best number.")
    }
    // console.log(element)
}

for(let i=0;i<=10;i++){
    // console.log(`Outer loop ${i}`)
    for(let j=0;j<=10 ;j++){
        // console.log(`Inner loop ${j} and outer loop ${i}`)
    }
}

// print tables from 1 to 10

for (let i=1;i<=10;i++){
    // console.log(`Table of: ${i}`)
    for(let j=1;j<=10;j++){
        // console.log(`${i} * ${j} = ${i*j}`)
    }
}

let myArray = ["Adarsh" , "Anand" , "Manas"]
// console.log(myArray.length)
for(let i=0;i<myArray.length;i++){
    // console.log(myArray[i]);
}

// break and continue

for(let i=1; i<=10;i++){
    if(i == 5){
        // console.log("Detected 5");
        break;
    }
    // console.log(`Value of i is ${i}`);
}
for(let i=1; i<=10;i++){
    if(i == 5){
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${i}`);
}