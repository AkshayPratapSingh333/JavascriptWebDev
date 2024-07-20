// const touser = {
//     name:"Akshay",
//     Id:"23123sdfwfw",
//     email:"sdadfsdf@gmail.com",
     
//     welocme : function(){
//         console.log(`${this.name} ,welocme to my website`);
        

//     }
    
    
// }

// console.log(touser);
// touser.welocme()
// console.log(this); // empty object

function kaloo(){
    console.log(this);
}

kaloo()


const kaloo1 = function(){
     let name ="Akshay"
     console.log(this.name);

}
// kaloo1() // undefind


const kaloo2 = () => {
    let name ="Akshaya"
    console.log(this);

}
kaloo2() // {}

const kaloo3 = (a,b) => {
    return a * b
    

}
console.log(kaloo3(6,3)) // 18

// implict return =>  a way of returning a value from a function without explicitly using the return keyword.

const kaloo4 = (a,b) => a * b
console.log(kaloo4(6,3))    // 18 

const kaloo5 = () => ({username:"Akshayaa"})
console.log(kaloo5());
