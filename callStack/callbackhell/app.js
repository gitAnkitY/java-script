let h1=document.querySelector("h1");

function colorChange(color,delay,nextColor){
    setTimeout(()=>{
        h1.style.color=color;
        if (nextColor) nextColor();
    },delay);
  

}

colorChange("red",1000,()=>{
    colorChange("green",1000,()=>{
        colorChange("orange",1000,()=>{
            colorChange("blue",1000,()=>{
                colorChange("pink",1000);
            });
        });
    });
});