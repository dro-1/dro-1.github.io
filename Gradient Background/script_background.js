document.querySelector("#hexVal1").value = "#ff0000";
document.querySelector("#hexVal2").value = "#ffffff";
var color1 = document.querySelector("#hexVal1");
var color2 = document.querySelector("#hexVal2");

const init = () => {
    previewDiv1.style.backgroundColor = color1.value;
    previewDiv2.style.backgroundColor = color2.value;
}

init();

const setBackground = () => {
    let body = document.querySelector("body");
    let css = document.querySelector("#css");
    body.style.background = "linear-gradient( to right, "+color1.value + ", " +color2.value;
    css.textContent = "linear-gradient( to right, "+color1.value + ", " +color2.value +") ;";
}

const genRandomHex = () => {
var rand;
    do{
        rand = Math.random()*100000000;
    }
    while(rand>16777215);
    
    rand = Math.round(rand);
    rand = rand.toString(16);
    rand = rand + "";
    
if(rand.length <6){
        var zeroes = 6 - (rand.length);
        while(zeroes>0){
        rand = "0" + rand;
        --zeroes;
        }
    }
    return rand;
}

const randomizeColors = () => {
    color1.value = "#" + genRandomHex();
    color2.value = "#" + genRandomHex();
    previewDiv1.style.backgroundColor = color1.value;
    previewDiv2.style.backgroundColor = color2.value;
}


setBackground();

var button = document.querySelector("button");
button.addEventListener("click",randomizeColors);
button.addEventListener("click",setBackground);

canvas[0].addEventListener("mousemove",()=>{
   setPreviewColor(pixel1,previewDiv1);
setBackground();
});

canvas[1].addEventListener("mousemove",()=>{
     setPreviewColor(pixel2,previewDiv2);
setBackground();
});
