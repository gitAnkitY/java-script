//***********(basic String)******/

let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello ${str2}`; // Template literal with interpolation

//**********(trim in String)********//

let str = "   Hello World   ";
console.log(str);           // "   Hello World   "
console.log(str.trim());    // "Hello World"

// Trim from start ******

let s = "   JavaScript";
console.log(s.trimStart()); // "JavaScript"

// Trim from end **********

let s2 = "JavaScript   ";
console.log(s2.trimEnd()); // "JavaScript"

// Srting is immutable and it form a new string instead of making changes on the older string

let txt = "   Hi   ";
let trimmed = txt.trim();
console.log(txt);     // "   Hi   "
console.log(trimmed); // "Hi"

