const a= 10
let b= 20

if(true){

const a= 10
let b= 20
//console.log("INNER:", a);


}

//console.log(a);


function parent(){
    const username= "Angik"

    function child(){
        const surname= "Biswas"
        //console.log(username);
        
    }
    //console.log(surname)
    child()
}

parent()


if(true){

    const username= "Angik"

    if (username=="Angik"){
        const surname= "Biswas"
        //console.log(username);
    }
    //console.log(surname);
}
console.log(addone(5));
function addone(num){
    return num+1
}

//applicable
const addtwo1= function(num1) {
    return num1+2
}

//console.log(addtwo1(3));
//not applicable
//console.log(addtwo(3));
const addtwo= function(num1) {
    return num1+2
}

