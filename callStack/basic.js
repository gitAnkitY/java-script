// // What is a Call Stack?

// // The call stack is a special data structure
// // (stack → LIFO: Last In, First Out) used by programming languages

// How it Works (Step by Step)

//1. When a function is called, it is pushed onto the call stack.

//2. If that function calls another function, the new one is also pushed onto the stack.

//3. When a function finishes, it is popped off the stack, and the program continues from where it left.

function hello(){
    console.log("inside hello fnx");
    console.log("hello");
}

function demo(){
    console.log("calling hello fnx");
    hello();
}

console.log("calling demo fnx");
demo();
console.log(" done, bye ! ")