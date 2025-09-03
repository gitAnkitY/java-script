// question 
// create a function that returns the concatination of all string in an array

let str=["hi","hello","bye"];

function concat(str){
    let result ="";

    for(let i=0;i<str.length;i++){
        result+= str[i];
    }
    return result;

}

console.log(concat(str));