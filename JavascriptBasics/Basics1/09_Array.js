const newarr = [1,2,3,4,5,6,7,8]
// console.log(newarr);
// console.log(newarr[3]); // accesing the elements ffrom array

const newarr1 = ["dgdgdfdffg","gbbbrgrtr"]
// console.log(newarr1);
const newarr2 = new Array(1,2,3,4,5,6,7,8) 
// console.log(newarr2);

const newarr3 = [1,2,3,4,5,6,7,8,9]
newarr3.push(10) // adds new elements
// console.log(newarr3);
newarr3.pop() // removes last elements
// console.log(newarr3 );
newarr3.shift() // 1 will be shift  from array
// console.log(newarr3);

// console.log(newarr3.includes(2)); //  to extract information from array like what it have and what it does not contain . Ans be true beacause 2 is present in array
// console.log(newarr3.indexOf(6)); // with indexx number we acces element

const newarr4 = newarr3.join() // it converts in to string
// console.log(newarr3);
// console.log(newarr4);
// console.log( typeof newarr4);

// ********************************** slice and splice *************************************

console.log("A ",newarr );
const newarr5 = newarr.slice(0,4)
console.log(newarr5); 
console.log(newarr); // no change in original array


console.log("B ",newarr );
const newarr6 = newarr.splice(0,4)
console.log(newarr6); // change in original array
console.log(newarr); // only remain are present 


// ******************************************** ********************************************************

const myarray = ["Aman","Akshay","Aditya"]
const myarray1 = ["Akarsh","Chitransh","Abhiraj"]
// myarray.push(myarray1)     // array inside array because an array can contain any type of data type in Javascript, action happen in existing array
// console.log(myarray);

const myallarray = myarray.concat(myarray1) // it will return new array and in this arrays are merge to each other
console.log(myallarray);
// **************************************************************************
const myallarray1 = [...myarray,...myarray1] //  spread method
// console.log(myallarray1);


const myarray3 = [1,2,3,4,5,[6,7,8,[3,4,5]]]

const myarray4 = myarray3.flat(Infinity) // all the elements inside arrays will become elements of new array
// depth is infinity cuz it will find depth automatically to seperate

console.log(myarray4);

console.log(Array.isArray("Akshay")); // tells about it is array or not in true/false
console.log(Array.from("Akshay")); // string to array
console.log(Array.from({name:"Akshay"})); // will return empty array bcoz we have not define object's key value pairs

// to make array of variables 

let sub1 = 96
let sub2 = 91
let sub3 = 87

console.log(Array.of(sub1,sub2,sub3));
