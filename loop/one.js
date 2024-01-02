const arr= [1,2,3,4,5,6]

for (const num of arr) {
    //console.log(num);
}

const greetings= "hallo World!"

for (const greet of  greetings) {
    //console.log(`Each charector is:${greet} `);
    
}

const map= new Map()
map.set("IN", "India")
map.set("USA", "United State of America")
map.set("Fr", "France")
map.set("IN", "India")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-' , value);
}