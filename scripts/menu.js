import {wWines, rWines} from "../data/menu_info.js";



const wWinesSec = document.querySelector(".js-white-wines");
const rWinesSec = document.querySelector(".js-red-wines");



//turn into function that returns html, takes menu name as parameter, and list variable menu-info
function buildWMenuSec(sectionName, menuList){
    let html = `<div class="title">${sectionName}</div>
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
                <div class="read-more">
                    read more 
                    <img class="right-arrow js-right-arrow" id="${wine.id}" src="images/circle-arrow-right-w.svg">
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

wWinesSec.innerHTML += buildWMenuSec("White Wines", wWines)
rWinesSec.innerHTML += buildWMenuSec("Red Wines", rWines)



const arrowButtons = document.querySelectorAll(".js-right-arrow");

arrowButtons.forEach((button)=>{
    const id = button.getAttribute("id");
    console.log(id)
    const description = document.querySelector(`.js-description-${id}`);
    button.addEventListener('click', ()=>{
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