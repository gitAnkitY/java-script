// **********upper and lowercase********

let str = "JavaScript";
console.log(str.toUpperCase()); // "JAVASCRIPT"

let str2 = "HELLO WORLD";
console.log(str2.toLowerCase()); // "hello world"

//  Both methods do not change the original string (because strings are immutable).

let word = "HeLLo";
console.log(word.toUpperCase()); // "HELLO"
console.log(word.toLowerCase()); // "hello"
console.log(word); // Original stays "HeLLo"

// case insensitive comparison 

let a = "hello";
let b = "HELLO";

if (a.toLowerCase() === b.toLowerCase()) {
  console.log("They are equal!");
}

// output as =>"They are equal!"


