document.all[8].innerText="Spidy";

// To make manipulation we have to first select the object where we have to make changes after that we 
// can manipulate the object.

// **************(getElementById)***********//

// we can select elements by **getElementById** and manipulate it

document.getElementById("mainImg").src="creation_1.png";

// *************(getElementByClassName)********//

document.getElementsByClassName("oldImg")[2].src = "creation_1.png";

//***********(getElementByTagName)*********//

// syntax =>   document.getElementsByTagName("tagName")[index]

//******* (Query selector)
// => querySelector / querySelectorAll → can do all of the above using CSS selectors.
// => Very flexible (you can use id, class, tag, attributes, etc.).

//syntax =>
//  document.querySelector("#idName");     // by ID
//  document.querySelector(".className");  // by class
//  document.querySelector("p");           // first <p> tag

// Style Manipulation //

// Style property =>  style mainipulation overrides the css style or we can say it just add in line styling 

let heading = document.querySelector("h1")
heading.style.color="blue";

// Manipultion Attribute  => Set Attribute
// The setAttribute() method is used to add a new attribute to an element or change the value of an existing attribute.
// attribute like  => The name of the attribute (e.g., src, href, id, class, etc.)

let img= document.querySelector("img");
img.setAttribute("src","spiderman_img.png");

// classList Manipulation
// The classList property in JavaScript gives you an easy way to add, remove, toggle, and check CSS classes of an element.
// It’s much better than manipulating the "class" attribute directly.
// synatx=>  element.classList.method("className");
// Methods =>
    // add

let box= document.querySelector(".box");
box.classList.add("green");

    // remove 
let abox= document.querySelector(".box")
box.classList.remove("green");

    // toggle
let bbox= document.querySelector(".box")
box.classList.toggle("green");

    // contain

let cbox= document.querySelector(".box")
box.classList.contains("green"); // true 

// Adding element on the page 

let newP=document.createElement("p");
newP.innerText="hi! i am Ankit";
let body=document.querySelector('body');
body.appendChild(newP);


let button=document.createElement('button');
button.innerText="click me !"
let sbox=document.querySelector(".box");
sbox.appendChild(button);
    




