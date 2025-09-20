console.log("Start");

setTimeout(() => {
    console.log("Async task done");  // callBack //
}, 1000);

console.log("End");

// JavaScript itself → single-threaded (only one call stack).

// Browser / Node.js → provide multithreaded features through their environment.

// Example: timers (setTimeout), HTTP requests (fetch), file I/O (in Node).

// These tasks run in separate threads managed by the environment, not by JS.

// When finished, results are put in the callback queue.

// The event loop pushes them back to the JS call stack when it’s free.

// IN EASY WORDS WE CAN SAY : 

//** // JavaScript runs one thing at a time on a single thread, 
// but it can handle asynchronous tasks by using the event loop and letting the browser or Node.js run certain operations in the background.