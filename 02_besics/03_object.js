const MySym= Symbol("Key1")
const JsUser={
    name:"Angik",
    "full name": "Angik Biswas",
    [MySym]: "MyKey1",
    "age": 24,
    "email": "angikbiswas4444@gmail.com",
    islogedin: false,
   

    }


//console.log(JsUser["full name"])
//console.log( typeof JsUser[MySym]);
//JsUser.email= "angikbiswas233@gmail.com"
//Object.freeze(JsUser)
//JsUser.email="angik9876@google.com"
//console.log(JsUser)

JsUser.greteeng = function(){
    console.log("Hello  js user")
}

JsUser.greteengTwo = function(){
    console.log(`Hello js user , ${this.name}`);
}

console.log(JsUser.greteeng());
console.log(JsUser.greteengTwo());