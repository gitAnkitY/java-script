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







