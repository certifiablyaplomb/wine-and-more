import { imageList } from "../data/images.js";

const leftArrow = document.querySelector('.js-left-arrow');
const rightArrow = document.querySelector('.js-right-arrow');
const leftImage = document.querySelector('.js-display-image-left');
const mainImage = document.querySelector('.js-display-image-main');
const rightImage = document.querySelector('.js-display-image-right');

let currentImageIndex= 0;

loadImages();
function loadImages(){
    let leftImageSrc = imageList[convert(currentImageIndex - 1, imageList)].source;
    let mainImageSrc = imageList[currentImageIndex].source;
    let rightImageSrc = imageList[convert(currentImageIndex + 1, imageList)].source;
    leftImage.src = `${leftImageSrc}`
    mainImage.src = `${mainImageSrc}`
    rightImage.src = `${rightImageSrc}`
}




leftArrow.addEventListener('click', ()=>{
    currentImageIndex-=1;
    currentImageIndex = convert(currentImageIndex, imageList)
    loadImages();
})

rightArrow.addEventListener('click', ()=>{
    currentImageIndex +=1;
    currentImageIndex = convert(currentImageIndex, imageList)
    loadImages();
})

function convert(index, listname){
    if(index < 0) index = listname.length - 1;
    else if(index >= listname.length) index = 0;
    return index;
}


import { reviews } from "../data/reviews.js";
const reviewSection = document.querySelector('.js-review-section');

let currentReviewIndex = 0;

function updateReviewHTML(){
    reviewSection.innerHTML = `
        <h2 class="reviews-title">What Our Customers Say</h2>
        <div class="review-container">
            <span class="arrow left-arrow js-left-review-arrow">&#10094;</span>
            <div class="review-box">
            <p class="review-text">“${reviews[currentReviewIndex].review}”</p>
            <span class="review-author">– ${reviews[currentReviewIndex].author}</span>
            </div>
            <span class="arrow right-arrow js-right-review-arrow">&#10095;</span>
        </div>
       <p class="read-more">
        <a href="https://www.google.com/maps/place/Wine+Tasting+and+More-+Munds+Park/@34.9405053,-111.656227,17z/data=!4m16!1m7!3m6!1s0x872dbd002e239263:0x74393081772c990a!2sWine+Tasting+and+More-+Munds+Park!8m2!3d34.9405009!4d-111.6536521!16s%2Fg%2F11xz6dvk96!3m7!1s0x872dbd002e239263:0x74393081772c990a!8m2!3d34.9405009!4d-111.6536521!9m1!1b1!16s%2Fg%2F11xz6dvk96?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener">
            Read more on Google
        </a>
    </p>`
;
    const leftReviewArrow = document.querySelector('.js-left-review-arrow');
    const rightReviewArrow = document.querySelector('.js-right-review-arrow');

    leftReviewArrow.addEventListener('click', ()=>{
        currentReviewIndex-=1;
        currentReviewIndex = convert(currentReviewIndex, reviews)
        updateReviewHTML();
    })
    rightReviewArrow.addEventListener('click', ()=>{
        currentReviewIndex+=1;
        currentReviewIndex = convert(currentReviewIndex, reviews)
        updateReviewHTML();
    })

}
updateReviewHTML();



