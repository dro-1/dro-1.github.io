

let signs = document.querySelectorAll('.sign');
prev = document.querySelector('.prev');
next = document.querySelector('.next')
current = 0;

const clearAllSigns = () =>{
    signs.forEach((sign)=>{
        sign.style.display = 'none';
    })
}

const initCarousel = () =>{
    clearAllSigns();
    signs[current].style.display = 'block';
}

const slideLeft = () =>{
    clearAllSigns();
    signs[current-1].style.display = 'block';
    current--;
}

const slideRight = () =>{
    clearAllSigns();
    signs[current+1].style.display = 'block';
    current++;
}

document.querySelector('.prev').addEventListener('click',()=>{
    if (current===0){
        current = signs.length;
        console.log(current)
    }
    slideLeft();
})

document.querySelector('.next').addEventListener('click',()=>{
    if (current===signs.length-1){
        current = -1;
    }
    slideRight();
})

initCarousel();

