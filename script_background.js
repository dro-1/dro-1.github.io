var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

const setBackground = () => {
    let body = document.querySelector("body");
    let css = document.querySelector("#css");
    body.style.background = "linear-gradient( to right, "+color1.value + ", " +color2.value;
    css.textContent = "linear-gradient( to right, "+color1.value + ", " +color2.value+";";
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
}

setBackground();

var button = document.querySelector("button");
button.addEventListener("click",randomizeColors);
button.addEventListener("click",setBackground);

color1.addEventListener("input",setBackground);

color2.addEventListener("input",setBackground);

