// Add & Upadate the object value 
// syntax ==> 
    
const student={
    name: "Ankit yadav",
    age:20,
    marks: 95,
    city: "delhi"
}

// to update

student.city="mumbai";

console.log(student.city);

console.log(student);

// to add 

student.gender="male";

console.log(student.gender);

console.log(student);

// to delete 

delete student.marks;

console.log(student);