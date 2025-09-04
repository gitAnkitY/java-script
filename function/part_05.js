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

function OddEvenTest(request){
    if (request=="odd"){
        let odd= function(n){
            console.log(!(n%2 == 0));
        }
        return odd;
    }
    
    else if(request=="even"){
        let even=function(n){
            console.log(n%2==0);
        }
        return even;
    }
    else {
        console.log("wrong request");
    }
}

let request = "even";

// Get the function based on request
let check = OddEvenTest(request);

// Now call the returned function with a number
check(5);   // 👉 false (since 5 is not even)

