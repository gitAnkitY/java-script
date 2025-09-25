// try/catch is used for rejection handling. It prevents your program from 
// crashing when a promise rejects
//**************************
// if in a function something depend upon another thing but their is a part which is independent 
// then to run that code withouth an error we use try And catch .

let h1=document.querySelector('h1');

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            let newNum=Math.floor(Math.random()*5)+1;
            if(newNum>3){
                reject("promise rejected");
            }
            h1.style.color=color;
        },delay);
    });
};

async function main(){
    try{
    await changeColor("blue",1000);
    await changeColor("green",1000);
    await changeColor("red",1000);
    } catch (err){
        console.log("error caught!")
        console.log(err);
    }

    let a= 5;
    console.log(a);
    let sum=a+3;
    console.log(sum);

}

main();