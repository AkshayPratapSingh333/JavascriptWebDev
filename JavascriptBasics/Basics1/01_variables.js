const accountId = 333111
let accountEmail = "akshay@google.com"
var accountpassword = "12345"
accountCity = "Lucknow"
let accountState;


console.log(accountId);
// accountId = 2// not allowed cuz it is constant
/* 0. prefer not to use var because it leads to scope related issues like block and functional scope
 1.we can also use without variable keywords but not to prefer
 2.if we don't assign value to let it will show undefined */

accountEmail = "akshaypratap@google.com"
accountpassword = "11111"
accountCity = "Noida"
console.table([accountEmail,accountpassword,accountCity,accountId,accountState])