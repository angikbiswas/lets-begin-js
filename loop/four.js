const myNums= [1,2,3,4,5,6,7,8,9,10]

//const newNums= myNums.filter((nums)=> nums>4 )
//
//console.log(newNums);

const newNums= []

myNums.forEach((nums)=>{
    if(nums>4){
        newNums.push(nums)
    }

})

//console.log(newNums);


const book=[
    {
        name: "book1",
        genare:"Science",
        published: 2001

    },
    {
        name: "book2",
        genare:"Literature",
        published: 2000

    },
    {
        name: "book3",
        genare:"History",
        published: 1998

    },
    {
        name: "book4",
        genare:"Science",
        published: 1995

    },
    {
        name: "book5",
        genare:"Fiction",
        published: 1999

    },
    {
        name: "book6",
        genare:"Fiction",
        published: 2007

    },
    {
        name: "book7",
        genare:"Literature",
        published: 2000

    },
    {
        name: "book8",
        genare:"History",
        published: 2009

    },
    

]

let Booklist= book.filter((Book)=> Book.genare==='History')
Booklist= book.filter((Book)=> Book.published>=2000 && Book.genare==='History')

console.log(Booklist);