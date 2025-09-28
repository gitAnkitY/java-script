let jsonData= '{"fact":"Both humans and cats have identical regions in the brain responsible for emotion.","length":81}'
console.log(jsonData);

// but if we only need fact not more than that we use =>
//   JSON.parse(data)  method 
// parse is JSON.parse() is used to convert a JSON string into a JavaScript object.

let newJsonData=JSON.parse(jsonData);

console.log(newJsonData);


// If you want to turn a JavaScript object → JSON string, you use JSON.stringify()

let obj = {
  fact: "Cats can rotate their ears 180 degrees.",
  length: 45
};

let json_Data = JSON.stringify(obj);

console.log(json_Data);



