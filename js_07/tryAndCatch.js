//************(TRY & CATCH)***********//

// TRY : The try statement allow you to define a block of code to be tested for errors while it is being executed.
// CATCH : the catch statement allow you to define a block of code to be executed, if an error occurs in the try block.

// example

console.log("hello");
console.log("hello");
try{
    console.log(a);
} catch(err){
    console.log("caught an error... a is not defined ");
    console.log(err);
}

console.log("hello");
console.log("hello");
