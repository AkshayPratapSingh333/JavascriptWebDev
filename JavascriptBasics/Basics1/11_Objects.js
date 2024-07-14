// const newUser = new Object() //singleton object
const newUser1 = {} // non -singleton object
newUser1.id ="333fsfff"
newUser1.name ="Raman"
newUser1.ishere = false

// console.log(newUser1);  

const myuser = {
    Id:"23123sdfwfw",
    email:"sdadfsdf@gmail.com",
    fullname:{
        UserName:{
            firstname:"Akshay",
            middlename:"Pratap",
            lastname:"Singh"
        }
    }
    
}

// console.log(myuser);
// console.log(myuser.fullname);
// console.log(myuser.fullname.UserName);
// console.log(myuser.fullname.UserName.firstname);

const obj1 = {1:"q",2:"w",3:"f"}
const obj2 = {4:"s", 5:"j"}

const obj3 = { obj1,obj2}
// console.log(obj3);                // it merges  objects seperately inside object

const obj4 = Object.assign({},obj1,obj2)
// console.log(obj4);                  // it merges in single object

const obj5 = {...obj1,...obj2} //  spread it
// console.log(obj5);         // easiest method to combine objects

console.log(Object.keys(newUser1));
console.log(Object.values(newUser1));
console.log(Object.entries(newUser1)); // prints key value in array
console.log(newUser1.hasOwnProperty('id')); // prints true/false as it present or not

// deconstruction of object

const {id : i} = newUser1 // short  name i 
// console.log(id);   // 333fsfff
console.log(i);  // 333fsfff
//   formats of api can be objects , array 

