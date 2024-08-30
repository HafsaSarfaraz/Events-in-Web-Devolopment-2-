 let btn1= document.querySelector("#btns");
 let body= document.querySelector("body");
 let para= document.querySelector("p");
 let mode="light";

btn1.addEventListener("click" ,()=>{
    if(mode==="light"){
        body.style.backgroundColor="black";
        mode="dark";
    para.style.color="white";
    }else{
        body.style.backgroundColor="white";
        mode="light";
        para.style.color="black";
    }
    console.log(mode);
})

let div= document.querySelector(".box");
let n=1;
div.onmouseover= ()=>{
    let div2=document.createElement("div");
    div2.innerText="This is div " + n;
    div2.style.display= "flex";
    div2.style.justifyContent= "center";
    div2.style.alignItems="center";
    div2.style.height=" 100px";
    div2.style.border="1 px solid black";
    div2.style.margin= "5px";
    div2.style.textAlign = "center"; 
    div2.style.backgroundColor= "rgb(41, 88, 90)";
    //div.appendChild(div2);  // Append div2 to the existing div (div1)

    div.after(div2);  // Append div2 after the existing div (div1)

    console.log("Div " + n + " created successfully");
    n++;
}