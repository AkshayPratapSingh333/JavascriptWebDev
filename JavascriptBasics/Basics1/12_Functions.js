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
console.log(user("Akshay"));










