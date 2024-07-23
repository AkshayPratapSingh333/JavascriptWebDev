// The reduce() method in JavaScript is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. This method is especially useful for summing up values, counting occurrences, flattening arrays, or more complex data transformations

// array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

// callback: A function to execute on each element in the array, taking four arguments:
// accumulator: The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
// currentValue: The current element being processed in the array.
// currentIndex (optional): The index of the current element being processed in the array.
// array (optional): The array reduce() was called upon.
// initialValue (optional): A value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used and skipped. Calling reduce() on an empty array without an initial value will throw a TypeError.


// Sum of Array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

// Flattening an array of arrays 

const arrays = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = arrays.reduce((accumulator, currentArray) => {
    return accumulator.concat(currentArray);
}, []);

console.log(flattenedArray); 
// Output: [1, 2, 3, 4, 5, 6]

//  Creating an Object Inside an Array with Multiple Objects
const books = [
    { title: "The Science of Everything", bookNumber: 1, genre: "Science", author: "John Doe" },
    { title: "History of the World", bookNumber: 2, genre: "History", author: "Jane Smith" },
    { title: "Geography for Beginners", bookNumber: 3, genre: "Geography", author: "Jim Brown" },
    { title: "Advanced Physics", bookNumber: 4, genre: "Science", author: "Anna Johnson" }
];

const bookTitles = books.reduce((accumulator, book) => {
    accumulator.push(book.title);
    return accumulator;
}, []);

console.log(bookTitles); 
// Output: ["The Science of Everything", "History of the World", "Geography for Beginners", "Advanced Physics"]


// The reduce() method is highly versatile and can be used for a variety of tasks involving accumulation and transformation of array data.
