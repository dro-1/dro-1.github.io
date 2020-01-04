var canvas=document.querySelectorAll("canvas");
var ctx1 = canvas[0].getContext('2d');
var ctx2 = canvas[1].getContext('2d');
var previewDiv1 = document.querySelector(".preview1");
var previewDiv2 = document.querySelector(".preview2")
var aCanPreview = true;
var bCanPreview = true;
var canvasX;
var canvasY;
var pixel1;
var pixel2;
var aIsOpen = false;
var bIsOpen = false;

const imageSetUp = (ctx) => {
var image = new Image();
image.onload = ()=>{
ctx.drawImage(image,0,0,image.width,image.height);
}
image.src = "./colorwheel1.png";  
}
imageSetUp(ctx1);
imageSetUp(ctx2);

const getRGBColorArray=(e,canv,ctx)=>{
 canvasX = Math.floor(e.pageX - canv.offsetLeft);
 canvasY = Math.floor(e.pageY - canv.offsetTop-canv.getBoundingClientRect().top);
var pixel = ctx.getImageData(canvasX,canvasY,1,1).data;
    
return pixel;
}

const setPreviewColor=(pixel,previewDiv)=>{
var previewColor = "rgb(" + pixel[0] + ", " + pixel[1] + ", " + pixel[2] + ")";
previewDiv.style.backgroundColor = previewColor;
}

const setDivValues=(pixel,number)=>{
document.querySelector("#rVal" + number).value = pixel[0];
document.querySelector("#gVal" + number).value = pixel[1];
document.querySelector("#bVal" + number).value = pixel[2];
document.querySelector("#rgbVal" + number).value = pixel[0] + ', ' + pixel[1] + ', ' + pixel[2];
    
var dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0]

var hex = '0000' + dColor.toString(16);
    
document.querySelector("#hexVal" + number).value = '#' + hex.substr(-6);
    
}

canvas[0].addEventListener("mousemove",(e)=>{
    if(aCanPreview){
 pixel1 = getRGBColorArray(e,canvas[0],ctx1);
setPreviewColor(pixel1,previewDiv1);
setDivValues(pixel1,"1");
}
});

canvas[1].addEventListener("mousemove",(e)=>{
    if(bCanPreview){
 pixel2 = getRGBColorArray(e,canvas[1],ctx2);
setPreviewColor(pixel2,previewDiv2);
setDivValues(pixel2,"2");
}
});
    
canvas[0].addEventListener("click",()=>{
    aCanPreview =  !aCanPreview
});
canvas[1].addEventListener("click",()=>{
    bCanPreview =  !bCanPreview
});

previewDiv1.addEventListener("click", ()=>{ 
if(!bIsOpen)
    {
$('.colorpicker1').fadeToggle(1, "linear");
aCanPreview = true;
aIsOpen = !aIsOpen;
    }
});

previewDiv2.addEventListener("click", ()=>{ 
    if(!aIsOpen)
        {
$('.colorpicker2').fadeToggle(1, "linear");
bCanPreview = true;
bIsOpen = !bIsOpen;
        }
});




