import { loadPage } from "./initial-load";

function loadHome() {
    const videoContainer = document.querySelector("#videoContainer");
    const header = document.querySelector("#header");
    const info = document.querySelector("#info");
    const navBar = document.querySelector("#navBar");
    const content = document.querySelector("#content");
    const imgContainer = document.querySelector("#imgContain");
    const contactContainer = document.querySelector("#contactContainer");


    function deleteElement(selector) {
        if (selector != null) {
            selector.remove();
        }
    }

    deleteElement(videoContainer);
    deleteElement(header);
    deleteElement(info);
    deleteElement(navBar);
    deleteElement(imgContainer);
    deleteElement(contactContainer);




    console.log("never makes it here")
    loadPage();



}


export { loadHome }; 