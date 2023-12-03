let mydate= new Date()

//console.log(mydate.toString());
//console.log(mydate.toDateString());
//console.log(mydate.toISOString());
//console.log(mydate.toJSON());
//console.log(mydate.toLocaleDateString());
//console.log(mydate.toLocaleString());

//let createMydate= new Date(2023, 11, 3)
//let createMydate= new Date(2023, 11, 3, 6, 7, 7 )
//let createMydate= new Date("12-03-2023" )
let createMydate= new Date("2023-12-03" )

//console.log(createMydate.toLocaleString());

let myTimestamp = Date.now()
//console.log(myTimestamp);

//console.log(createMydate.getTime())
//console.log(Math.floor(Date.now()/1000))

let newDate= new Date()

let newDateone=newDate.toLocaleString('default', {
    weekday: "long"
}

)

console.log(newDateone)
