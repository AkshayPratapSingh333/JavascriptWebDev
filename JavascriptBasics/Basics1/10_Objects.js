// object literals
const newsymb = Symbol("key") // add key using symbol

const newUser = {
    name:"Akshay",
    "myname":"Ishu",
    [newsymb] : "KeyNo1",
    age: 19,
    location:"Lucknow",
    email:"sasfgdf@gmail.com",
    college:"gvdavedv",
    isloggedIn:true,
    days:['Monday','Tuesday'],
    displayinfo : function(){
    console.log(` My name is ${newUser.name} age is ${newUser.age} , email is ${newUser.email} amd last loggedIN days are ${newUser.lastdays}` );
    }

}
console.log(newUser.days); // same output but differ way
console.log(newUser["days"]);
console.log(newUser["myname"]);
console.log(newUser.myname);
console.log(newUser[newsymb]); //console.log(newUser.newsymb); data type 
newUser.displayinfo();

// if we want to freeze the changes in our object 
  // Object.freeze(newUser) // if this is not comment then it will not allow change in name
// so if i want to change let say my name ..
// newUser.name = "Aman" // 
//console.log(newUser.name); 
// now name will change
// Object.freeze(newUser) 

newUser.welcome = function(){
    console.log("Welcome to objects in js");
}
console.log(newUser.welcome());
// console.log(newUser);

newUser.welcomeBack = function(){
    console.log(`Welcome to javascript ${ this.name}`); 
}
// 'this'  allowing access to the properties and methods of its containing object.
console.log(newUser.welcomeBack());
