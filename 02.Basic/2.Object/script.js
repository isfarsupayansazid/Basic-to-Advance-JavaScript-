// const mySym = Symbol("key1")

/* const JSuser = {
    userName : "sazid",
    "full Name" : "Isfar Supayan",
    [mySym] : "key2",
    userEmail : "isfar@google.com",
    age : 22,
    userId : 123456,
    isLoggedIn : true,
    lastLoginDays : ["Sunday","Monday"]
} */
// JSuser.userEmail = "sazid@google.com";
// console.log(JSuser.userEmail);
// console.log(JSuser["userEmail"]);
// console.log(JSuser["full Name"]);
// console.log(JSuser[mySym]);


// Object.freeze(JSuser) // porer line gulo execute hobe na karon object freeze kora 
// JSuser.userEmail = "sazid@google.com"
// console.log(JSuser);


/* JSuser.greeting = function(){
    console.log(`Hello Js, ${this["full Name"]}`);
};
console.log(JSuser.greeting()); */



// ++++++++++++++++++++++++Part two +++++++++++++++++++++++++++++++++++
const trinder = {};
trinder.id = 123;
trinder.name = "isfar";
trinder.isLoggedIn = true;
console.log(trinder);
// console.log(Object.keys(trinder));
// console.log(Object.values(trinder));
// console.log(Object.entries(trinder));
// console.log(Object.hasOwnProperty('isLoggedIn'));

const regularUser = {
    userInformation : {
        id : "123abc",
        name : {
            firstName : "isfar",
            lastName : "supayan"
        }
    }
}
// console.log(regularUser.userInformation.name.firstName);


const obj1 = {  
    1 : "a",
    2 : "b"    
}
const obj2 = {
    3 : "c",
    4 : "d"
}
// const obj3 = {obj1,obj2};
// const obj3 = Object.assign({},obj1,obj2);
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const User = [
    {
        name : "sazid",
        email : "is@gmail.com"
    },
    {
        name : "isfar",
        email : "sazid@gmail.com"
    }
]


