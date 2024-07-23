const numbers1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

// const addnum = numbers1.map( (add) => add + 5) // same output
const addnum = numbers1.map( (add) => { return add + 5})
console.log(addnum);

// chaining 

const newcase = numbers1.map( (num) => num * 7).map( (num) => num + 7)
console.log(newcase);

const newcase1 = numbers1.map( (num) => num * 7).map( (num) => num + 7).filter( (num) => num>= 35)
console.log(newcase1);
