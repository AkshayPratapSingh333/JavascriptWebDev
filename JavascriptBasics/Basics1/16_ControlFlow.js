// JavaScript control statement is used to control the execution of a program based on a specific condition. If the condition meets then a particular block of action will be executed otherwise it will execute another block of action that satisfies that particular condition.
// >  , < , >= , =< ,== , === , != , !== 

if (2 == "2") {
    console.log("Sahi  hai");
}

if (2 === "2") {
    console.log("Sahi nahi hai");
} // will not be executed  

const temp = 30

if (temp < 40){
    console.log("Temperataure is less than 40 degree celcius");
}else (temp > 20); {
    console.log("Temperature is greater than 20 ");
}
// both will be executed 

// Switch case statement -----------------------------------------------------------------------------------------------------------

// let num = 5;
// num is key or variable which holds a value and we want to check through switch case
// where as with case we put values for comparison with value stored in key 

// switch (num) {
// 	case 0:
// 		console.log("Number is zero.");
// 		break;
// 	case 1:
// 		console.log("Nuber is one.");
// 		break;
// 	case 2:
// 		console.log("Number is two.");
// 		break;
// 	default:
// 		console.log("Number is greater than 2.");

// };

// Number is greater than 2.

let balance = 15000;

if (balance >= 5000) {
    console.log("Your balance is excellent. You're eligible for premium benefits.");
} else {
    if (balance >= 3000) {
        console.log("Your balance is good. You're eligible for standard benefits.");
    } else {
        if (balance >= 1000) {
            console.log("Your balance is average. You're eligible for basic benefits.");
        } else(balance < 1000); {
            console.log("Your balance is low. You're not eligible for any benefits.");
        }
    }
}

let marks = 95;
let grade;

if (marks >= 90) {
    grade = 'A+';
} else {
    if (marks >= 80) {
        grade = 'A';
    } else {
        if (marks >= 70) {
            grade = 'B';
        } else {
            if (marks >= 60) {
                grade = 'C';
            } else ;{
                grade = 'F';
            }
        }
    }
}

console.log("Marks: " + marks + ", Grade: " + grade);


// falsy values == > false , null , undefined , 0 , BigInt 0n , "" , NaN

// truthy values == > "0" , "false" , " " , {} , [] , function(){}

const user = []

if (user) {
    console.log("Name is  available");    
}



const user1 = []

if (user1.length===0) {
    console.log("Name is  not available");    
} 


const emptyobj = {}
if (Object.keys(emptyobj).length===0) {
    console.log("Object is  not available");    
} 

//  nullish coalescing operator (??) ==> he nullish coalescing operator provides a more precise way to handle null and undefined 

let userProvidedValue = null;
let defaultValue = "Default Value";

let finalValue = userProvidedValue ?? defaultValue;

console.log(finalValue); // Output: "Default Value"

let userName = "";
let defaultName = "Guest";

let nameToDisplay = userName ?? defaultName;

console.log(nameToDisplay); // Output: ""

let userName1 = "";
let defaultName1 = "Guest";

let nameToDisplay1 = userName1 || defaultName1;

console.log(nameToDisplay1); // Output: "Guest"

// The ternary operator in JavaScript, also known as the conditional operator, is a shorthand way to perform conditional checks and assign values based on the result of the condition. It is often used to replace simple if...else statements.

let age = 20;
let canVote = (age >= 18) ? console.log("Eligible to vote") : console.log( "Not eligible to vote")

console.log(canVote); // Output: "Eligible to vote"

let age1 = 16;
let canVote1 = (age1 >= 18) ? console.log("Eligible to vote") : console.log( "Not eligible to vote")

console.log(canVote1)
// Output: Not eligible to vote

















