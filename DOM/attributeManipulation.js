// Common Methods for Attribute Manipulation

//           GET ATTRIBUTE

// syntax => obj.getAttribute(attributeName)

let link = document.querySelector("a");
console.log(link.getAttribute("href")); // e.g. "https://google.com"

//           SET ATTRIBUTE

// synatx => obj.setAttribute(attributeName, value)

let img = document.querySelector("img");
img.setAttribute("src", "newImage.png");
img.setAttribute("alt", "Updated Image");
