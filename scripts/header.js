const hamburgerIcon = document.querySelector('.js-hamburger-icon');
const hamburgerMenu = document.querySelector('.js-hamburger-header');
const hamburgerMenuButtons = document.querySelector('.js-hamburger-menu-buttons-list');

const current_path= window.location.pathname;
let clicked = false;
if (current_path != '/index.html' && current_path != 'wine-and-more/index.html'){
    clicked = true;
    hamburgerIcon.style.transform="rotate(90deg)";
    hamburgerMenu.style.backgroundColor = "rgba(119, 119, 119, 0.9)";

    hamburgerMenuButtons.classList.toggle('active');
    hamburgerMenuButtons.style.opacity= "1";
    hamburgerMenuButtons.style.visibility= "visible";
}

hamburgerIcon.addEventListener("click", () => {
    clicked = !clicked;
    if (clicked){
        hamburgerIcon.style.transform="rotate(90deg)";
        hamburgerMenu.style.backgroundColor = "rgba(119, 119, 119, 0.9)";

        hamburgerMenuButtons.classList.toggle('active');
        hamburgerMenuButtons.style.opacity= "1";
        hamburgerMenuButtons.style.visibility= "visible";
    }
    else{
        hamburgerIcon.style.transform = clicked ? "rotate(90deg)" : "rotate(0deg)";
        hamburgerMenu.style.backgroundColor = "transparent";

        hamburgerMenuButtons.classList.toggle('active');
        hamburgerMenuButtons.style.opacity= "0";
        hamburgerMenuButtons.style.visibility= "hidden";

    }
})

