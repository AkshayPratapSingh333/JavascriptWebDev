// In JavaScript, you can combine the for...of loop with the forEach method to iterate over arrays of objects or nested structures. The for...of loop can be used to iterate over the outer array, and within that loop, the forEach method can be used to iterate over the properties or elements of each individual object or nested array.
// forEach does not returns value
//  Iterating over an Array of Objects
// Suppose you have an array of objects, and you want to log each key-value pair of each object.

const users = [
    { name: "Alice", age: 25, city: "Wonderland" },
    { name: "Bob", age: 30, city: "Builderland" },
    { name: "Charlie", age: 35, city: "Chocolate Factory" }
];

for (const user of users) {
    Object.entries(user).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
    console.log('---');
}

// : Iterating over an Array of Arrays
//Suppose you have an array of arrays, and you want to log each element of the nested arrays.
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (const row of matrix) {
    row.forEach(element => {
        console.log(element);
    });
    console.log('---');
}

// Iterating over a Map of Arrays
// Suppose you have a Map where each key maps to an array, and you want to log each key and its corresponding array elements.
const map = new Map([
    ["fruits", ["apple", "banana", "cherry"]],
    ["vegetables", ["carrot", "broccoli", "spinach"]],
    ["Crops", ["Beverage", "Industrial", "Food","Cash","Horticultural"]]
]);

for (const [category, items] of map) {
    console.log(`Category: ${category}`);
    items.forEach(item => {
        console.log(`- ${item}`);
    });
    console.log('---');
}

// *************************************************************************************************************
// In JavaScript, filtering is a common operation that allows you to create a new array containing only elements that meet certain criteria from an existing array. This is typically done using the filter method available on arrays.


// array.filter(callback(element[, index[, array]])[, thisArg])

// callback: A function that is called for each element in the array. It should return true to keep the element, false otherwise.
// element: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array filter was called upon.
// thisArg (optional): Value to use as this when executing the callback.

const mynum = [1,2,3,4,5,6,7,8,9]

const newnumarray = mynum.filter((num) => num >3)
console.log(newnumarray); // if condition is true then it returns the value 

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

const evenNumbers = numbers.filter( (number) => {
    return (number % 2 === 0);
} )
console.log(evenNumbers);

// by forEach method

const numbers1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const newnumb = []

numbers1.forEach( (num1) => {
    if (num1 % 2 === 0){
        newnumb.push(num1)
    }
})
console.log(newnumb);

const books = [
    {
        title: "The Science of Everything",
        bookNumber: 1,
        genre: "Science",
        author: "Alice Johnson",
        year:2000
    },
    {
        title: "A Journey Through History",
        bookNumber: 2,
        genre: "History",
        author: "Bob Smith",
        year:2004
    },
    {
        title: "Exploring the World",
        bookNumber: 3,
        genre: "Geography",
        author: "Charlie Brown",
        year:2006
    },
    {
        title: "Physics for Beginners",
        bookNumber: 4,
        genre: "Science",
        author: "David Williams",
        year:2009
    },
    {
        title: "Ancient Civilizations",
        bookNumber: 5,
        genre: "History",
        author: "Emma Wilson",
        year:2012
    },
];    

let userbooks = books.filter( (book) => book.genre === "Science")
let userbooks1 = books.filter( (book) => book.year > 2000 && book.genre === "History")

console.log(userbooks);
console.log(userbooks1);




