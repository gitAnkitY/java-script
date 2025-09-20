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

// three() is called → goes on stack.

// Inside three(), two() is called → goes on stack.

// two() calls one() twice → each goes on stack, returns 1, then popped.

// two() returns 2, popped.

// Back in three(), one() is called again → returns 1, popped.

// three() now has 2 + 1 = 3 → calls console.log(3).

// console.log prints → popped.

// Finally, three() finishes → popped.