// Arrow Function

const sum=(a,b)=>{
    console.log(a+b);
};
sum(1,2);

const cube=(a)=>{
    console.log(a*a*a);
};

const pow=(a,b)=>{
    return a**b;
};

// implicit return in Arrow function 

const mul =(a,b)=>(
    a*b  //if we have to just return we can avoid writting the return keyword and use normal brackets instead of the curly ones.
);
mul(2,8);