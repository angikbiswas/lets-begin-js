const myobj={
    username:"Angik",
    price:999,
    wellcomemessage:
       function message(){
           const city= "hyderabad"
           return `${this.username}, wellcome to ${city} `
          

       }
       
    }

     myobj.username= "Tulan"

     //console.log(myobj.wellcomemessage());


     function chai(){
        const username= "Anik"
        //console.log(this.username);
     }

     chai()

     const biscuit= function(){
        console.log(this);
     }

     //biscuit()

     //console.log(this)

     const test=()=>{
        //console.log(this)
     }

     //test()

     //const addtwo=(num1,num2)=>{
     //   return num1+num2

     //}

     //console.log(addtwo(3,2));

    // const addtwo=(num1,num2)=> (num1+num2)
       

     

     //console.log(addtwo(3,2));

     const addtwo=(num1,num2)=> ({username:"Angik"})

     //console.log(addtwo());

     

    
     

    

    