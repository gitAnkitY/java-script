function savedb(data,success,failure){
    let intSpeed=Math.floor(Math.random()*10)+1;
    if (intSpeed>4){
        success();
    }
    else{
        failure();
    }
}

savedb("Ankit",
    ()=>{
        console.log("Data saves ! ");
        savedb("Ankit2",()=>{
            console.log("Data saved !!");
            savedb("Ankit3",()=>{
                console.log("Data saved!!!")
            },()=>{
                console.log("Data not saved!!!")
            })
        },()=>{
            console.log("Data not Saved!!")
        })
    },
    ()=>{
        console.log("Data not saved !");
    }
)