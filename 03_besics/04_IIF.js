//let a=11
(function test1() {
    let a=15
    console.log(a);
 })();

 //test1()

 ((num1,num2)=>{
    console.log(`db connect`)
    return console.log(num1+num2);
 })(3,2)

 