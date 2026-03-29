import { imageList } from "../data/images.js";

const leftArrow = document.querySelector('.js-left-arrow');
const rightArrow = document.querySelector('.js-right-arrow');
const leftImage = document.querySelector('.js-display-image-right');
const mainImage = document.querySelector('.js-display-image-main');
const rightImage = document.querySelector('.js-display-image-right');

let currentIndex= 0;

loadImages();
function loadImages(){
    let leftImageSrc = imageList[convert(currentIndex - 1)].source;
    let mainImageSrc = imageList[currentIndex].source;
    let rightImageSrc = imageList[convert(currentIndex + 1)].source;
    leftImage.src = `${leftImageSrc}`
    mainImage.src = `${mainImageSrc}`
    rightImage.src = `${rightImageSrc}`
}




leftArrow.addEventListener('click', ()=>{
    currentIndex-=1;
    currentIndex = convert(currentIndex)
    loadImages();
})

rightArrow.addEventListener('click', ()=>{
    currentIndex +=1;
    currentIndex = convert(currentIndex)
    loadImages();
})

function convert(index){
    if(index < 0) index = imageList.length - 1;
    else if(index >= imageList.length) index = 0;
    return index;
}