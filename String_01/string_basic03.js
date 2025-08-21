// *******(index of)**********

let str = "JavaScript is awesome";

console.log(str.indexOf("Java"));   // 0   (starts at index 0)
console.log(str.indexOf("is"));     // 11  (first occurrence of "is")
console.log(str.indexOf("Python")); // -1  (not found)
console.log(str.indexOf("a"));      // 1   (first 'a' at index 1)
console.log(str.indexOf("a", 2));   // 3   (starts searching from index 2)

// we can also use it in array

let nums = [10, 20, 30, 40, 20];

console.log(nums.indexOf(20));    // 1   (first 20 at index 1)
console.log(nums.indexOf(50));    // -1  (not found)
console.log(nums.indexOf(20, 2)); // 4   (start searching from index 2 → found at 4)

// *********(Method chaining)***********//

let name ="    Ankit   ";

console.log(name.trim().toUpperCase());