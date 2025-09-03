// SCOPE
// scope determine the accessibility of variable , object and function from different parts of the code.

// function scope 
// varaible defined inside a function are not accessible (visible) from outside the function.

let sum= 54; // global scope 

function calsum(a,b){
    let sum=a+b; // function scope
    console.log(sum);
}

calsum(1,2);
console.log(sum);

// block scope
// variable declared inside the block{} cannot be accessed from outside the block

for (let i=1; i<=5;i++){
    console.log(i); //block scope
}

// error here : console.log(i); 

// Lexical scope 
// variable defined outside a function can be accessible inside another function defined after the variable declaration
// the opposite is NOT true

function outerFunc(){
    let x=5;
    let y=6;
    function innerFunc(){
        console.log(x)
    }
    innerFunc();
}


