let btns=document.querySelectorAll("button");
// btn.onclick=function(){
//     console.log("Ankit button is clicked");
// };

for (btn of btns){
    // btn.onclick=sayHello;
    // btn.onmouseenter=function(){
    //     console.log("you touched the button ");
    //}
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayname);
    }; 
function sayHello(){
    alert("hello dosto !");
}
function sayname(){
    alert("Ankit")
}

