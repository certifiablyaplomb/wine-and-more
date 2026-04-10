document.addEventListener('DOMContentLoaded', () => {
  const reopenImage = document.querySelector('.js-reopen-img');
  const modal = document.querySelector('.js-image-modal');
  const modalImage = document.querySelector('.js-modal-image');
  const closeBtn = document.querySelector('.js-close-btn');

  reopenImage.addEventListener('click', () => {
    modal.classList.add('active');
    modalImage.setAttribute('src', reopenImage.getAttribute('src'));
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});




import { newsLetterImages } from "../data/images.js";

const leftArrow = document.querySelector('.js-left-arrow');
const rightArrow = document.querySelector('.js-right-arrow');
const leftImage = document.querySelector('.js-display-image-left');
const mainImage = document.querySelector('.js-display-image-main');
const rightImage = document.querySelector('.js-display-image-right');

let currentIndex= 0;

loadImages();
function loadImages(){
    let leftImageSrc = newsLetterImages[convert(currentIndex - 1)].source;
    let mainImageSrc = newsLetterImages[currentIndex].source;
    let rightImageSrc = newsLetterImages[convert(currentIndex + 1)].source;
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
    if(index < 0) index = newsLetterImages.length - 1;
    else if(index >= newsLetterImages.length) index = 0;
    return index;
}