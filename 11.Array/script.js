// # 1. length
// let myArray = [1,2,3,4,5];
// console.log(myArray.length); result : 5

// # 2. Push()
// let myArray = [1,2,3,4,5];
// console.log(myArray.push(6,7));
// console.log(myArray); result : [1,2,3,4,5,6,7]

// # 3. pop()
// let myArray = [1,2,3,4,5];
// console.log(myArray.pop());
// console.log(myArray); result : [1,2,3,4]

// # 4. unshift
// let myArray = [1,2,3,4,5];
// console.log(myArray.unshift(0));
// console.log(myArray); result : [ 0, 1, 2, 3, 4, 5 ]

// # 5. shift 
// let myArray = [1,2,3,4,5];
// console.log(myArray.shift());
// console.log(myArray); result : [ 2, 3, 4, 5 ]

// # 6. Concat
// let myArray = [1,2,3];
// let myArray2 = [4,5,6];
// console.log(myArray.concat(myArray2));


// # 7. spreed operator
// let myArray = [1,2,3];
// let myArray2 = [4,5,6];
// console.log([...myArray, ...myArray2]);

// # 8. slice 
// let myArray = ["A", 1,2,3,4,5,6];
// console.log(myArray.slice(0,3)); result : ['A',1,2]
// console.log(myArray); result :  ["A", 1,2,3,4,5,6]

// # 9. splice ;
// let myArray2 = ["B", 1,2,3,4,5,6]
// console.log(myArray2.splice(0,3)); result : ['B',1,2]
// console.log(myArray2); rsult : [3,4,5,6];

// # 10. filter 
// let myArray = [1,2,3,[4,5,6],[7,8,9,10,[11,12]]];
// console.log(myArray.flat(Infinity));

// console.log(Array.isArray("sazid")); result : boolean


// let myArray = Array.from("sazid")
// console.log(myArray);  result : string will be convert in array


// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1,score2,score3));