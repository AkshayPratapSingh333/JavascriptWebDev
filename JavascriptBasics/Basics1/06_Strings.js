const nam = "Akshay"
const num = 19

// console.log( nam +  num +  "Email" );
console.log(`My name is ${nam} and I am ${num} year old`);

const vara = new String('Akshay')
console.log(vara);
console.log(vara[0]);
console.log(vara[1]);
console.log(vara.length); // accesing  key value pair , accessing 1th key 
console.log(vara.__proto__);
console.log(vara.bold()); 
console.log(vara.toUpperCase());  // our original string doesnt change stack
console.log(vara.charAt(5));
console.log(vara.indexOf('y'));

const newvara = vara.substring(0,4); // 4th value does not included
console.log(newvara);
const anovara  = vara.slice(-6,3)
console.log(anovara);// slicing

const newevara = "      Akshay     " // spacing
console.log(newevara);
console.log(newevara.trim()); // it trims the unusual space of string 

const url = "https://kashiasfdoi#$hello"
console.log(url.replace('#$','--')); // replaced #$ with --
console.log(url.includes('hello'));
console.log(vara.split(''));

