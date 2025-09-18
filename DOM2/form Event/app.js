let form =document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();   //event.preventDefault() → (prevents page reload).
//     alert("form submitted");
// })

// Extraction From Data

form.addEventListener("submit",function(event){
    event.preventDefault();   //event.preventDefault() → (prevents page reload).

    let user=this.elements[0];
    let pass=this.elements[1];

    console.log(user.value);
    console.log(pass.value);

    alert(`your username is ${user.value} and you password is ${pass.value}`);
    
    // let user=document.querySelector("#user");
    // let pass=document.querySelector("#pass");
    
    // console.log(user.innerText); // it doesnot give you the text you inputed 
    // console.log(user.value); // this gives the text you inputed 
    // console.log(pass.value);

    // alert(`your username is ${user.value} and you password is ${pass.value}`)
})
