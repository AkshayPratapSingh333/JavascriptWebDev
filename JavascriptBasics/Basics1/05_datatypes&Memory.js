// *************************************** Types of data types*******************************
// refer to notes(paper)

const id = Symbol('123')
const otherid = Symbol('123')
console.log(id === otherid);// false
console.log(typeof otherid);//symbol

const bigNum = 435698365634758346586n
// ************************************** data types summary **************************************

// Non Primitive 
// Array , Objects, function return type = object;
const arrem = ["gdgd","gregg","gergg"];
console.log(arrem);
console.log(typeof arrem);
let myobj = {
    names: "Mohan",
    age:20,
}
console.log(myobj);
console.log( typeof myobj);

// Creating and Initializing an array with values
let courses = new Array("HTML", "CSS", "Javascript", "React");
console.log(courses);

// Initializing Array while declaring
let arr = new Array(3);
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
console.log(arr);
console.log(typeof arr);
// function
const myfunction = function(){
    console.log("My function is this")
}
// ************************* Memory ***********************************************
// Stack (Primitive)               Heap(Non-Primitive)

let myname = "akshaypratap"
let anoname = myname
anoname = "ishu"
console.log(myname);
console.log(anoname);

let objone = {
    email:"random@google.com",
    age:22,
    upiid:"one@oksbi",
}
let objtwo = objone
console.log(objone);// 
console.log(objtwo);// same as objone

objtwo.email = "aps@google.com" // accesing email from object named objone
console.log(objone.email);
console.log(objtwo.email);// change in value in both objects objone as well as objtwo no formaion of copy like in stack and in heap there is original changes happen in runtime 

