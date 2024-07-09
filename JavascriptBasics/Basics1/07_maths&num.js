const score = 200
console.log(score);

const scor = new Number(200)
console.log(scor);

console.log(scor.toString()); // number coverted to string so we can apply string apply
console.log(scor.toFixed(3));
console.log(scor.toString().length);

const nam = 45.9156
const nam1 = 245.9156
const nam2 = 245.9156
const nam3 = 245.9156

console.log(nam.toPrecision(3)); console.log(nam1.toPrecision(3));console.log(nam2.toPrecision(4));
console.log(nam3.toPrecision(2));

const nam4 = 1000000000
console.log(nam4.toLocaleString('en-IN'));  // we get representation of number in Indian 

 //------------------------------- Maths ------------------------------------------------------//
console.log(Math.abs(-10));// will return positive value
console.log(Math.round(10.8));
// console.log(Math.ceil(10.2));    // if just more than 10 in decimal values it will return upper value
// console.log(Math.floor(10.8));    //even if just less than upper value in decimal values it will return  integer
console.log(Math.pow(2,7));
console.log(Math.min(1,2,3,4,5)); // 1
console.log(Math.max(1,2,3,4,5)); // 5

console.log(Math.random()); // gives random values between 0 to 1
console.log(Math.random() + 1);  // to avoid less than 1 values 
console.log(Math.random()*10 + 1); // now it will give us random value between 1 to 10
console.log(Math.floor(Math.random()*10) + 1); // it will return round off value and + 1 so that it does not give 0 


const min = 20
const max = 100

console.log(Math.floor(Math.random()*(max - min + 1)) + min);