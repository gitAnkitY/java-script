// Methods 
// action that can be performed on an object OR the function defined in key value pair is Method.

// example
const calculator ={
    num :55,
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
};

console.log(calculator.add(1,2));
console.log(calculator.sub(6,5));
console.log(calculator.mul(1,2));
console.log(calculator.num);

