//  They execute a block of code repeatedly as long as a specified condition remains true. These loops are powerful tools for automating tasks and streamlining your code.

// for (let i  = 0; i < 7; i ++) {
//     console.log("Hello WebDev");  
// }


// for (let i  = 0; i < 3; i ++) {
//     console.log("Hello WebDev");
//     for (let k = 0; k<= 5 ; k++){
//         console.log("I am Here");
//         for(let j = 0; j<= 4; j++){
//             console.log("I am Here for you");
//         }
            
//     }  
// }

// break and continue 

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Detected 5 , I will not print numbers further ...");
        break; // Exit the loop when i is 5
    }
    console.log(`The value of i : ${i}`);
}

// while loop ==> the while loop executes the code block as long as the specified condition is true. The condition is evaluated before executing the code block, which means the loop might not execute at all if the condition is initially false.

// while (condition) {
//      code block to be executed
// }

// let count = 0;
// while (count < 5) {
//     console.log("Count is: " + count);
//     count++;
// }

//  do while loop ==> The do...while loop executes the code block once before checking the condition. After executing the code block, the condition is evaluated. If the condition is true, the loop will execute the code block again. This process repeats until the condition becomes false. This ensures that the code block is executed at least once.

// do {
//      code block to be executed
// } while (condition);

// let count = 0;
// do {
//     console.log("Count is: " + count);
//     count++;
// } while (count < 5);

// **************************************************************************************************************


// for-of loop 
// The for...of loop in JavaScript is used to iterate over iterable objects such as arrays, strings, maps, sets, and more. It allows you to loop through the values of an iterable object easily.

// for (variable of iterable) {
//     ////code block to be executed
// }

// example with array

let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}

// example with string

let text = "hello";

for (let char of text) {
    console.log(char);
}

// Example with Set

let numbers = new Set([1, 2, 3, 4, 5]);

for (let number of numbers) {
    console.log(number);
}

// Example with Map

let map = new Map([
    ['name', 'John'],
    ['age', 30],
    ['city', 'New York']
]);

for (let [key, value] of map) {
    console.log(key + ': ' + value);
}


// The for...of loop cannot be used directly on plain JavaScript objects because objects are not iterable in the same way arrays, strings, maps, or sets are. However, there are ways to iterate over the properties of an object using different methods.

const person = {
    name: "Akshay",
    age: 20,
    city: "Lucknow"
};

for (const [key,value] of Object.entries(person)) {
    console.log(key + ": " + value);
}














