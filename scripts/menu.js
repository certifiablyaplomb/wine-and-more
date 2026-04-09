import {wWines, rWines, WIS, beers} from "../data/menu_info.js";



const wWinesSec = document.querySelector(".js-white-wines");
const rWinesSec = document.querySelector(".js-red-wines");
const infusedSpiritsSec = document.querySelector(".js-infused-spirits");
const beersSec = document.querySelector(".js-beers");




//turn into function that returns html, takes menu name as parameter, and list variable menu-info
function buildWMenuSec(sectionName, menuList){
    let html = `
      <img src="images/wine-ring-chat.png" class="wine-ring wr1">
      <img src="images/wine-ring-chat.png" class="wine-ring wr2">
      <img src="images/wine-ring-chat.png" class="wine-ring wr3">
      <img src="images/wine-ring-chat.png" class="wine-ring wr4">
        <div class="title">${sectionName}</div>
          <div class="item-line">
            <div class="item"></div> 
            <div class="type">Glass</div> 
            <div class="type">Bottle</div> 
          </div>`
    menuList.forEach((wine)=>{
        html+=`
        <div class="item-line">
            <div class="item">
                ${wine.name}
                <div class="read-more-section">
                <div class="read-more js-read-more" id="${wine.id}">
                    read more 
                    <img class="right-arrow js-right-arrow-${wine.id}" id="${wine.id}" src="images/circle-arrow-right-w.svg">
                </div>
                <div class="description js-description-${wine.id}">
                    ${wine.description}
                </div>           
                </div>
            </div> 
            <div class="price glassprice">$${wine.glassPrice}</div> 
            <div class="price bottleprice">$${wine.bottlePrice}</div> 
        </div>
        `
    })
    return html;
}
function buildMenuSec(sectionName, menuList){
    let html = `
        <img src="images/wine-ring-chat.png" class="wine-ring wr1">
        <img src="images/wine-ring-chat.png" class="wine-ring wr2">
        <img src="images/wine-ring-chat.png" class="wine-ring wr3">
        <img src="images/wine-ring-chat.png" class="wine-ring wr4">
        <div class="title">${sectionName}</div>
          <div class="item-line">
            <div class="item"></div> 
            <div class="type">Price</div> 
          </div>`
    menuList.forEach((item)=>{
        html+=`
        <div class="item-line">
            <div class="item">
                ${item.name}
            </div> 
            <div class="price">$${item.price}</div> 
        </div>
        `
    })
    return html;
}


wWinesSec.innerHTML = buildWMenuSec("White Wines", wWines)
rWinesSec.innerHTML = buildWMenuSec("Red Wines", rWines)
infusedSpiritsSec.innerHTML = buildMenuSec("Wine Infused Spirits", WIS)
beersSec.innerHTML = buildMenuSec("Beers", beers)

const readMoreSection = document.querySelectorAll(".js-read-more");

readMoreSection.forEach((readMore)=>{
    const id = readMore.getAttribute("id");
    const button = document.querySelector(`.js-right-arrow-${id}`)
    const description = document.querySelector(`.js-description-${id}`);
    readMore.addEventListener('click', ()=>{
        let rotated = button.style.transform === "rotate(90deg)";
        if (rotated){
            button.style.transform = "rotate(0deg)";
            description.style.maxHeight = "0px"
            description.style.opacity = "0"
        }
        else{
            button.style.transform = "rotate(90deg)";
            description.style.maxHeight = "300px"
            description.style.opacity = "1"
        }
    })
})






import { menuImages } from "../data/images.js";

const leftArrow = document.querySelector('.js-left-arrow');
const rightArrow = document.querySelector('.js-right-arrow');
const leftImage = document.querySelector('.js-display-image-right');
const mainImage = document.querySelector('.js-display-image-main');
const rightImage = document.querySelector('.js-display-image-right');

let currentIndex= 0;

loadImages();
function loadImages(){
    let leftImageSrc = menuImages[convert(currentIndex - 1)].source;
    let mainImageSrc = menuImages[currentIndex].source;
    let rightImageSrc = menuImages[convert(currentIndex + 1)].source;
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
    if(index < 0) index = menuImages.length - 1;
    else if(index >= menuImages.length) index = 0;
    return index;
}