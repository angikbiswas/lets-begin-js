//premitive datatype
// 7 types: number,string, boolean, null, undifined, symbol, BigInt.

const BigNumber= 56587797979875667n
 //console.log(typeof BigNumber) => bigint

 const temp = null;
 //console.log(typeof temp) => object

 let email;
 //console.log(typeof email) => undefined
 const id = Symbol('123');
 const anotherID= Symbol('123')
 //console.log(id ==anotherID) => false
 //console.log(typeof id) => symbol



//Referance (non premitive)

//Arrays, object, function

const latter= ['A','B','C','D','E']
const mybio={
    'name':'Angik',
    'age':24
}

const myfunction= function(){
    console.log('Hello world')
}

//console.log(typeof myfunction)=>function
//console.log(typeof mybio); =>object
