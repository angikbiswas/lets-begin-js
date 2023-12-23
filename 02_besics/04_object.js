//const tinderUser= new Object()
const tinderUser ={}

tinderUser.name= "Angik"
tinderUser.age="24"
tinderUser.hight= "5'3inch"
//console.log(tinderUser);

const regularUser= {
    email: "some233@gmail.com",
    fullname: {
        username:{
            firstname:"Angik",
            lastname:"Biswas"

        }
    }
}

//console.log(regularUser.fullname.username.firstname);

const obj={1: "a", 2:"b", 3: "c", 4:"d"}
const obj1={5:"e", 6:"f", 7:"g", 8: "h"}

//const obj3 = Object.assign({}, obj, obj1)

const obj3= {...obj, ...obj1}

//console.log(obj3);

const myarr= [{
    id:1,
    name: "Angik"
},
{
    id:2,
    name: "Tulan"

},
{
    id:3,
    name: "sourabh"
}


]

//console.log(myarr[0].id);

//console.log(tinderUser);
//
//console.log(Object.keys(tinderUser))
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//
//console.log(tinderUser.hasOwnProperty('hight'));

const course={
    "course name": "javascript",
    "cost": "1000",
    'courseinstructor': "Angik",
}

const{courseinstructor: instructor} = course

//console.log(courseinstructor);
console.log(instructor);