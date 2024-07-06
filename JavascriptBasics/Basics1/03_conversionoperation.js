// let score = 33 // score is a number
let score = "33"//score is a string
console.log(typeof score) // string
console.log(typeof (score))// string
let valuescore = Number(score) // data type conversion from string to number
console.log(typeof valuescore)
console.log(valuescore)
//////////////////////////////////////////////////////////////////////////////
let scor = "33fhb"
let valuescor = Number(scor) // data type conversion from string to number
console.log(typeof scor)
console.log(scor)
console.log(valuescor)//Nan (not a number)
// "33" =>33 (change in number)
// true => 1
//null => 0
// undefined => NaN
let num = "Akshay"// true for string
let bool = Boolean(num)
console.log(bool)
/////////////////////////////////////////////////
let num1 = "" //false on empty string
let bool1 = Boolean(num1)
console.log(bool1)
////////////////////////////////////////
let num2 = 1 // true/false if 0
let bool2 = Boolean(num2)
console.log(bool2)
///////////////////////////////////////////////////////////////////
let num3 = 10
let str1 = String(num3)
console.log(str1) // number changes to string
console.log(typeof str1)
// ******************************* Operation *****************************************
// let val = 3
// val1 = 2 + val
// console.log(2+3)
// console.log(3*3)
// console.log(2**3)
// console.log(2/3)
// console.log(4%2)
let str2 = "Hi"
let str3 = " Akshay"
let str4 = str2 + str3
console.log(str4);
////////////////////////////////////////////////////////////////
console.log( "1 " + 2);
console.log( "1" + 2);
console.log( "1" + 2 + 2);
console.log( "1" + "2");
console.log( 1 + 2 + "2");