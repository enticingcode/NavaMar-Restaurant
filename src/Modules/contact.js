
function loadContact() {
    let content = document.querySelector("#content");
    let infoDiv = document.querySelector("#info");
    let resetImgDiv = document.querySelector("#imgContain");
    const navBar = document.querySelector("#navBar");

    if (infoDiv != null) {
        infoDiv.remove();

    }
    else if (resetImgDiv != null) {
        resetImgDiv.remove();
    }

    let contactContainer = document.createElement("div");
    contactContainer.setAttribute("id", "contactContainer");
    let containerSelection = document.querySelector("#contactContainer");


    if (containerSelection != null) {
        containerSelection.remove();
    }


    let phoneNum = document.createElement("p");
    let address = document.createElement("p");
    let map = document.createElement("img");


    phoneNum.innerText = "(626) 534-2012";
    address.innerText = "423 N College Ave, Fayetteville, AR 72701";
    map.src = "/images/map.png"

    contactContainer.append(phoneNum);
    contactContainer.append(address);
    contactContainer.append(map);

    content.append(contactContainer);

    navBar.classList.add("dissapearMenu");


}



export { loadContact };