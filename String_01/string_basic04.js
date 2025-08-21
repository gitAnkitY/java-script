//**********(Slice in js)**********//

let str = "JavaScript";

console.log(str.slice(0, 4));   // "Java"   (from index 0 → 3)
console.log(str.slice(4));      // "Script" (from index 4 → end)
console.log(str.slice(-6));     // "Script" (last 6 characters)
console.log(str.slice(2, -2));  // "vaScri" (from index 2 → second last)

//*************( replace and repeat Method )*****************//

// string.replace(searchValue, newValue)

let text = "I love JavaScript. JavaScript is fun!";

// Replace first occurrence

console.log(text.replace("JavaScript", "Python"));

// "I love Python. JavaScript is fun!"


// (REPEAT)***

//string.repeat(count)

let word = "Hi! ";

console.log(word.repeat(3));  

// "Hi! Hi! Hi! "

