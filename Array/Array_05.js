// (SLICE) : Extracts a portion of an array (creates a shallow copy).
//Does NOT change the original array.

// Syntax: arr.slice(start, end)

let fruits = ["apple", "banana", "mango", "orange"];

// slice from index 1 to 3 (3 not included)
let sliced = fruits.slice(1, 3);

console.log(sliced);   // ["banana", "mango"]
console.log(fruits);   // ["apple", "banana", "mango", "orange"] (unchanged)


// (Splice) : Adds/Removes/Replaces elements in place.

let fruit = ["apple", "banana", "mango", "orange"];

// remove 1 element at index 2
let removed = fruit.splice(2, 1);

console.log(removed);  // ["mango"]
console.log(fruit);   // ["apple", "banana", "orange"]

// insert "grapes" at index 1
fruit.splice(1, 0, "grapes");

console.log(fruit);   // ["apple", "grapes", "banana", "orange"]

// replace 1 element at index 2 with "kiwi"
fruit.splice(2, 1, "kiwi");

console.log(fruit);   // ["apple", "grapes", "kiwi", "orange"]

//(SORT) : Sorts elements of an array in place (changes the original).

let fruits1 = ["banana", "apple", "orange"];
fruits1.sort();

console.log(fruits1); // ["apple", "banana", "orange"]


