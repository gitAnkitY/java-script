// Function 
// function is a block of code to perform the particular task certain times 

// Syntax 

function hello(){
    console.log("hello");
}

hello();    // for calling the fuction 


// practice question 
// create a function to roll a dice & always display the value of the dice (1 to 6).

function dice(){
    console.log("dice rolling....")
    console.log(Math.floor(Math.random()*6+1));
}

dice();
