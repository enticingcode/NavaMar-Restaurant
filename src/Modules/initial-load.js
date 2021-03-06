import { loadHome } from "./home"
import { loadAbout } from "./about"
import { loadFood } from "./food"
import { loadContact } from "./contact";

const contentDiv = document.querySelector("#content");


function createHeader(id, content) {
    const header = document.createElement("header");
    header.setAttribute("id", id);
    let logoText = document.createElement("h1");
    logoText.textContent = content;
    header.append(logoText);
    return header
}

function loadBanner() {
    // banner container //
    let banner = document.createElement("div");
    banner.setAttribute('id', "videoContainer");

    // banner video // 
    let video = document.createElement("video");
    video.src = "/video/POKEVID.mp4";
    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.setAttribute('id', 'videoBanner');

    // append video to container //
    banner.append(video);
    return banner;
}

function createBtns(className, content, id) {
    let button = document.createElement("button");
    button.className = className;
    button.textContent = content;
    button.setAttribute("id", id);
    return button;
}

function loadNav(id) {
    let navBar = document.createElement("nav");
    navBar.setAttribute('id', id);
    let homeBtn = createBtns("navBtn", "Home", "home");
    let aboutUs = createBtns("navBtn", "About", "about");
    let foodBtn = createBtns("navBtn", "Food", "food");
    let contact = createBtns("navBtn", "Contact", "contact");
    navBar.classList.add("dissapearMenu")
    navBar.append(homeBtn);
    navBar.append(aboutUs);
    navBar.append(foodBtn);
    navBar.append(contact);
    return navBar;
}


function createSummary(id, content) {
    let div = document.createElement("div");
    div.setAttribute("id", id);
    div.textContent = content;
    return div;
}

function populateHome() {
    let briefInfo = "Welcome to Northwest Arkansas's best Poke Experience!"
    let homeBrief = createSummary("info", briefInfo);
    contentDiv.append(homeBrief);
}


function loadPage() {

    // Header & Vid // 
    let header = createHeader("header", "Bienvenidos a NavaMar");
    let videoContainer = loadBanner();
    let burgerMenu = document.querySelector("#menu");

    // Nav Bar //
    let navBar = loadNav("navBar")
    contentDiv.append(videoContainer);
    contentDiv.append(header);
    burgerMenu.append(navBar);

    // Home Page brief //
    populateHome();

    // BUTTON LISTENERS // 
    const home = document.querySelector("#home");
    const about = document.querySelector("#about");
    const food = document.querySelector("#food");
    const contact = document.querySelector("#contact");


    home.addEventListener("click", loadHome);
    about.addEventListener("click", loadAbout);
    food.addEventListener("click", loadFood);
    contact.addEventListener("click", loadContact);

    // DROP DOWN MENU LISTENER //
    const dropDown = document.querySelector("#arrowBtn");

    dropDown.addEventListener("click", engageMenu);



    function engageMenu() {
        if (navBar.classList == "dissapearMenu") {
            navBar.classList.remove("dissapearMenu");
        }
        else {
            navBar.classList.add("dissapearMenu");
        }
    }


}


export { loadPage }; 