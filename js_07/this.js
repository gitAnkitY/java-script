// this Keyword
// "this" keyword refers to an object that is executing the current piece of code

// example

const student={
    name:"ankit",
    age: 20,
    eng:95,
    math:93,
    phy:97,
    getAvg(){
        let avg =(this.eng+this.math+this.phy)/3;
        console.log(avg);
    }
}

student.getAvg();