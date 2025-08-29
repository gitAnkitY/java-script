// question
// user enters a max number & then tries to guess a random generated number between 1 to max 

const max= prompt("enter the max number")
console.log(max);

const random=Math.floor(Math.random()*max)+1;

let guess= prompt("enter the number");

while(true){
    if(guess=="quit"){
        console.log("user quits");
        break;
    }
    if(guess == random){
        console.log("you guessed the right ");
        break;
    }else{
        guess=prompt("your guess was wrong. try again")
    }
}