const coding= ['java', 'rubi', 'cpp', 'js']

coding.forEach(function(item){
 // console.log(item);
})

coding.forEach((item)=>{
    //console.log(item);
})

 function printme(item) {
    //console.log(item);
} 

coding.forEach(printme)

coding.forEach( function(item, index, arr){
    //console.log(item, index, arr);
})


const mycoding= [
    {
        Programminglanguage: "java",
        filename: "java"
    },
    {
        Programminglanguage: "c++",
        filename: "cpp"
    },
    {
        Programminglanguage: "javascript",
        filename: "js"
    },
    {
        Programminglanguage: "python",
        filename: "py"
    },
]

mycoding.forEach( (item)=>{
    console.log(item.Programminglanguage);
})