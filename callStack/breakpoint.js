
//      (Break Point)

function one(){
    return 1;
}

function two(){
    return one()+one();
}

function three(){
    let ans=two()+one();
    console.log(ans);
}
three();


//  * Steps in Browser (Chrome DevTools)

// Open your project in Chrome.

// Press F12 → go to Sources tab.

// In the left panel, click your JS file.

// Find the line with three();.

// Click on the line number → a blue/red marker appears (that’s your breakpoint).

// Reload the page → execution will pause at three();.

// Use the controls at the top right:

// ▶️ Continue → resume

// ⏭ Step Over (F10)

// ⏬ Step Into (F11) → goes inside three()

// ⏹ Step Out (Shift+F11) → exits current function

// Look at the Call Stack panel on the right to see what’s currently on the stack.