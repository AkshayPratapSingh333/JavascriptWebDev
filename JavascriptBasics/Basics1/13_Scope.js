// if (true) {
//     let blockVariable = "I'm in block scope";
//     console.log(blockVariable);
//   }

//  Consider the following code to highlight the difference:

function myFunction() {
  if (true) {
    var localVariable = "I'm in block scope";
    // let blockVariable = "I'm also in block scope";
    
  }
//   console.log(localVariable);    // Accessible
//   console.log(blockVariable);   // Error: blockVariable is not defined because it is not present inside the if block 
}
myFunction()

// conclusion var avail us to call a function outside function 

let a = 10  // global scope 

if(true){
    let a = 20 // 
    const b = 40 
    console.log("Insideblock :", a);
    console.log("Insideblock :", b);
}
console.log(a);
// console.log(b); this will show error because it can execute only inside 

function nest(){
  const name = "shdbcsdsdic"

  function more(){
    const website = "https://google.com"
    console.log(name)  // child function call elements from parent function
    // console.log(website); will execute
  }
  // console.log(website); it will show error because it is outside of function block
  more() 
}

nest()


if(true){
  const username = "Akshaya"
  if(username==="Akshaya"){
    const temp = "figure it out "
    console.log(username);
    console.log(temp);
    console.log(temp + username);
  }
  console.log(username);
  // console.log(temp + username); out of block out of output
}
  

