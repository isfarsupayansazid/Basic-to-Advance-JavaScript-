// # Primitive Datatype
// 7 types = String, Number, Boolean, Null, undefined, BigInt, Symbol;

// # Reference (Non-Primitive)
// 3 types = Array, Object, Function


// Stack Memory (Primitive)   and Heap Memory (Non-Primitive)

// # Stack Memory give you a copy. You can not change original value ***********************
// # Heap Memory give you original reference. when you change non Primitive data types value it will changes also original value 

// # Example of Stack Memory
let CompanyOneEmail = "company@google.com";
let CompanyTwoEmail = CompanyOneEmail;
CompanyTwoEmail = "companytwo@google.com";

console.log(CompanyOneEmail);
console.log(CompanyTwoEmail);


// # Example of Heap Memory

let userOne = {
    email : "Sazid@gmail.com",
    id : "1234"
}
let userTwo = userOne;
userTwo.email = "isfar@gmail.com";

console.log(userOne);
console.log(userTwo)