const coding = ["js", "ruby","java","cpp","python"]

// callback functions don't have a name

// coding.forEach(function (item){
//     console.log(item)
// })

coding.forEach((item)=>{
    //console.log(item)
})

function printMe(item){
    console.log(item)
}

// coding.forEach(printMe)

coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr)
})

const codingLanguages = [
    {
        languageName : "Javascript",
        languageExtension : "js"
    },
    {
        languageName : "C++",
        languageExtension : "cpp"
    },
    {
        languageName : "Python",
        languageExtension : "py"
    }
]

codingLanguages.forEach((item)=>{
    const {languageName : name, languageExtension : extension} = item
    console.log(name, extension)
})