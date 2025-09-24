// ********Async Function*******
//An async function is a special type of function in JavaScript
//  that always returns a Promise, even if you return a normal value.
//  It allows you to write asynchronous code in a synchronous-looking style,
//  making it easier to read and maintain.


async function greet(){
   throw "some random error"; // we use throw to give some random error 
    return "hello";
}

greet()
.then((result)=>{
    console.log("ankit");
})
.catch((err)=>{
    console.log("error is made !");
})
