//console.log("02">1);
//console.log("2">1);
//console.log("2"<"1");


//console.log(0<null); => false
//console.log(0>null); =>false
//console.log(0>=null); =>true
//console.log(0<=null); =>true
//console.log(0==null); =>false

/*The reason is that equality check  == and comprision > < >= <= work differently.
 comparisions convert null to number treating it as 0.That's why null>=0 is true and 0>null is false*/