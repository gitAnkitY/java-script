// Function Expressions
// A way to represent a function

let sum= function(a,b){
    return a+b;
}

console.log(sum(1,2));

// higher order function
// A function that takes one or multiple function as argument & return a function 

// example : that takes one or more multiple function
function multipleGreet(func, count){   // higher order function
    for(let i=0; i<count; i++){
        func();
    }
}

let greet=function(){
    console.log("hello");
}

multipleGreet(greet,10);

// Example: that returns a function 

