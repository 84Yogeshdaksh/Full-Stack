// function calculate(num1, num2, callback){
//     return callback(num1,num2);
// }

// let addition = (n,m) => n+m;
// let subtraction = (n,m) => n-m;
// let multiplication = (n,m) => n*m;
// let divition = (n,m) => n/m;

// console.log(calculate(1,2,addition))

//asych javascript

// console.log("Step 1");
// setTimeout(() => console.log("step 2"), 2000);
// console.log("Step 3");
// setTimeout(() => console.log("Step 4"),3000);
// console.log("Step 5");

setTimeout(() => console.log("1"),3000);
setTimeout(() => console.log("2"),1000);
console.log("3");