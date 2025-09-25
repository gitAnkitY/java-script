// change color by await keyword in an async function 

let h1=document.querySelector('h1');

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
        },delay);
    });
};

async function main(){
    await changeColor("blue",1000);
    await changeColor("green",1000);
    await changeColor("red",1000);
}

main();