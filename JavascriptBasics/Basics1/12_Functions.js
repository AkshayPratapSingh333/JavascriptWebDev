function newfunc(){
   console.log("Hello world"); 
}
// newfunc()

// function num(num1,num2){
//     console.log(num1 + num2);
// }
// num(23,98)

function num3(num1,num2){
    let result = num1 + num2
    return result
}
 let result = num3(34,76)
// console.log("Answer:",result);

function user(name){
    if(!name){
        console.log("Enter your name");
        return
    }
    return `${name} logged in `
}
// console.log(user("Akshay"));
// rest operator => The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent  functions in JavaScript.

// bag1 ... are storing value 99,399,599  respectively and rest are stored in num6

function cart(bag1,bag2,bag3,...num6){
    return num6

}
// console.log(cart(99,399,599,999,1999,9999));   

const owner = {
    name1 : "Akshay Pratap Singh",
    price : 100
}

function obj7(anyobject){
    console.log(`Name in Object is ${anyobject.name1} and price number is ${anyobject.price}`);

}
// obj7(owner) here we have to define an object
// here we can declare the key-values that we want to display
// short cut method 
obj7({
    name1: "sdsfsdbfs",
    price: 300

})

const arrays = [12,34,554,45436,"sfffsswe"]

function myarray(knowarr){
    return knowarr[3]
}
console.log(myarray(arrays));
// direct method

console.log(myarray([12,34,554,45436,"sfffsswe"]));




















