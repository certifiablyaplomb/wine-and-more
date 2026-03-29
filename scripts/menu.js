const arrowButtons = document.querySelectorAll(".js-right-arrow");
const description = document.querySelector(".js-description");

arrowButtons.forEach((button)=>{
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