//************(Array Method)*********

//   ***(PUSh)*** ==  Adds element(s) to the end of an array

let fruits = ["apple", "banana"];
fruits.push("mango");  
console.log(fruits); // ["apple", "banana", "mango"]

// ***(POP)*** == Removes the last element from an array.

let fruit = ["apple", "banana", "mango"];
let last = fruit.pop();  

console.log(last);   // "mango"
console.log(fruit); // ["apple", "banana"] 

// ***(Shift)*** == Removes the first element from an array. & Returns the removed element.

let fruits1 = ["apple", "banana", "mango"];
let first = fruits1.shift();

console.log(first);   // "apple"
console.log(fruits1);  // ["banana", "mango"]

// ***(Unshift)*** == Adds element(s) to the beginning of an array.

let fruits2 = ["banana", "mango"];
fruits2.unshift("apple");

console.log(fruits2); // ["apple", "banana", "mango"]



