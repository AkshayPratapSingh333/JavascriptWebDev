const firdate = new Date()
console.log(firdate);
console.log(firdate.toString());
console.log(firdate.toDateString());
console.log(firdate.toISOString());
console.log(firdate.toJSON());
console.log(firdate.toLocaleDateString());
console.log(firdate.toLocaleString());
console.log(typeof firdate);

let mydate = new Date(2024,8,2)  // year/months (starts from 0) //day
console.log(mydate.toDateString()); 
let mydates = new Date(2024,8,2,8,30)
console.log(mydates.toLocaleString()); 
let mydates1 = new Date("02-07-2024")
console.log(mydates.toLocaleString()); 

let timestamp = Date.now()
console.log(timestamp); // millisecond from 1 january 1970
console.log(mydates1.getTime()); // we get time in millisecods from mydateslog

console.log(Math.floor(Date.now()/1000));

let date1 = new Date()
console.log(date1.getDay());
console.log(date1.getMonth());
console.log(date1.getFullYear());

