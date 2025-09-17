// this in EventListner 
// when this is use in call back of event handler of something it refers to that something

let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");
let p=document.querySelector("p");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor="red";
}

btn.addEventListener("click",changeColor);

p.addEventListener("click",changeColor);

h1.addEventListener("click",changeColor);

h3.addEventListener("click",changeColor);

// redundancy or repetion of similar type of code is not Appreciated

// btn.addEventListener("click",function(){
//     console.log(this.innerText);
//     this.style.backgroundColor="red";

// });
// h1.addEventListener("click",function(){
//     console.log(this.innerText);
//     this.style.backgroundColor="red";
    
// });
// h3.addEventListener("click",function(){
//     console.log(this.innerText);
//     this.style.backgroundColor="red";
    
// });
// p.addEventListener("click",function(){
//     console.log(this.innerText);
//     this.style.backgroundColor="red";
    
// });