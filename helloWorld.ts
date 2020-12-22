// console.log("Hello World");
// // running a typeScript file is same as the js file 
// // here the scope of the var variable is set to the parent block

// for (var index = 0; index < 10; index++) {
//     console.log("inside of for loop - ",index);
// }
// console.log("After the execution of the loop ",index);

// but if we use let instead of var the typeScript will throw error, but still generates the js file in es5 format
for (let index = 0; index < 10; index++) {
    console.log("inside of for loop - ",index);
}
console.log("After the execution of the loop ",index);

