//const myNums= [1,2,3,4,5,6]

//const newNums= myNums.reduce((acc,curr)=> {
    //console.log(`currrent:${curr}, acc:${acc}`);
    
   // return acc+curr }, 0 )

//console.log(newNums);

const CartItems= [
    {
        itemname:"Headphone",
        price: 2000
    },
    {
        itemName:"Watch",
        price: 300
    },
    {
        itemname:"carger",
        price:900
    }
]

const TotalPrice=CartItems.reduce((acc,item)=> acc+item.price, 0)

console.log(TotalPrice);