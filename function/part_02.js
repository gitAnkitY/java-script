// **********(FUNCTION WITH ARGUMENTS)*********
// Arguments => they are the value which we pass to the function 

// example 

function name(argument){
    console.log(argument)
}

name("Ankit");

// example 

function sum(a,b){
    console.log(a+b)
}

sum(4,5);
sum(3,2);

// example 
// create a function that gives us the average of 3 number

function Average(x,y,z){
    console.log((x+y+z)/3);
}

Average(1,2,3);
Average(4,5,1);
Average(4,5,2);

// example
// create a function that prints the multiplication table of a number

function printTable(n){
    for(let i=n;i<=n*10;i+=n ){
        console.log(i);
    }
}

printTable(7);