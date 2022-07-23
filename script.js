let inputButtons = document.getElementsByTagName("input");


let inputValidity = () => {
    for (let i = 0; i < inputButtons.length; i++) {
        if (inputButtons[i].textContent === "") {
            inputButtons[i].style.border = "black 2px solid";
        }
        else if (inputButtons[i].textContent === "a") {
            inputButtons[i].style.border = "orange 2px solid";
        }
    }
}


inputValidity();