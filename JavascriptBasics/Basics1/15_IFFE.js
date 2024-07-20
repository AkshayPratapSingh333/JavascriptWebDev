// Immediately Invoked Function Expression 
// One of the common issues in JavaScript development is global scope pollution, where variables declared in one part of the code can unintentionally affect other parts. IIFE helps mitigate this problem by keeping variables and functions within their own scope, preventing global pollution.

( function user(){
    console.log(`DB connected`);
})();

( () => {
    console.log(`DB connected Now`);
})();

( (username) => {
    console.log(`DB connected Now with ${username}`);
})(`Cloud`);