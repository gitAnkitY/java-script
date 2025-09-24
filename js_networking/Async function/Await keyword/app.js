 // *******(Await keyword)*******
// The await keyword is used to pause the execution of an async function until a Promise is resolved or rejected.
// It can only be used inside an async function.


function randomNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo(){
    await randomNum();
    await randomNum();
    await randomNum();
}
demo();