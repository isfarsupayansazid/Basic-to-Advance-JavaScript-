const accountID = 123456;
let accountEmail = "is@gmail.com";
var accountPassword = "01235468";
address = "cox's bazar";
let mobileNumber;

// accountID = 23155; // const can't redefine. const is a block scope. 
// console.log(accountID);

/* accountEmail = "sazid@gmail.com";  // let is also block scope but let can redefine.
console.log(accountEmail); */

/* accountPassword = "51613115"; // prefer not to use var because of issue in block scope.
console.log(accountPassword); */ 

// console.log(address)

// console.log(mobileNumber);
console.table([accountID,accountEmail,accountPassword,address,mobileNumber]);