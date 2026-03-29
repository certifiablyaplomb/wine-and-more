const arrowButtons = document.querySelectorAll(".js-right-arrow");


arrowButtons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        let rotated = button.style.transform === "rotate(90deg)"
        button.style.transform = rotated ? "rotate(0deg)" : "rotate(90deg)";
    })
})