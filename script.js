// let size = document.querySelector(".jeeten");
// size.innerHTML= document.querySelector("body").clientWidth;

let leftSlider = document.getElementById("leftSlider");
let rightSlider = document.getElementById("rightSlider");
let timelineBox = document.querySelector(".timelineBox");

let slide = 0;
let unit;

leftSlider.addEventListener("click",()=>{
    unit = (slide-1)*90;
    if(unit>=0){
        timelineBox.style.transform = `translateX(-${unit}%)`;
        slide--;
    }
    console.log(slide)
})
rightSlider.addEventListener("click",()=>{
    unit = (slide+1)*90;
    // if slide < 6 then 7 slides are shown 
    if(slide<5){ 
        timelineBox.style.transform = `translateX(-${unit}%)`;
        slide++;
    }
    console.log(slide);
})