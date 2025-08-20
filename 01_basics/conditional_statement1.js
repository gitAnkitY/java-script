//if_else

let a=10; let b=11;
if(a>b){
    console.log("a is greater")
}
else{
    console.log("b is greater")
}


// **********(Nested if else)****************

let num1=80
let num2=50
if(num1>33){
    if(num1>75){
        console.log("great number")
    }
    else{
        console.log("Average num")
    }
}
else{
    console.log("better luck next time")
}

// *************(else if statement)**************
// (this else if statemnt is used when your if statemnt is false )

let age=17;
if(age>18){
    console.log("you can vote")
}
else if(age<=17){
    console.log("you can't vote")
}