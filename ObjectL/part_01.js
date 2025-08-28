// Object Literals 
// Used to store keyed collection & complex entities

// Key value =>(Key, Value) pair
// Object are collection of properties 

// Syntax => example

let delhi ={
    latitude: "122.28021",
    longitude: "30.200921"
};

console.log(delhi);

const student={
    name: "Ankit Yadav",
    Age: 20,
    marks: 95,
    city: delhi
};

console.log(student);

const item={
    price:100,
    discount:20,
    color:["red","green","pink"]
};

console.log(item);

console.log(delhi.longitude); // OR console.log(delhi["longitude"])

console.log(student.name); // OR console.log(student["name"])

console.log(item.price); // OR console.log(item["price"])

console.log(item.color[0]);


// NOTE: 
// JS Automatically converts objects key to Strings 
// Even if we Made the number as a key, the number will be converted to string.

// example: 

const obj={
    1:"a",      // donot use .(dot) to console the 1 or 2 like as dot operator doesnot convert the object key to string first 
    2: "b",
    true:"c",
    undefined:"d",
    null:"e"
};