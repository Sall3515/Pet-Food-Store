
hamburger = document.querySelector(".hamburger");

hamburger.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

const inputName = document.querySelector("#input");
const inputEmail = document.querySelector("#email");

const inputNameVal = inputName.value;
const inputEmailVaL = inputEmail.value;

inputName.addEventListener("click", () => {

    if (inputNameVal.length === 0) {
        inputName.style.borderColor = "red";
        inputName.style.outline = "none";
    } else {
        inputName.style.borderColor = "none";
        inputName.style.outline = "black";
    }
})// ეს გასასწორებელია
inputEmail.addEventListener("click", () => {

    if (inputNameVal.length === 0) {
        inputEmail.style.borderColor = "red";
        inputEmail.style.outline = "none";
    } else {
        inputEmail.style.borderColor = "none";
        inputEmail.style.outline = "black";
    }
})// ეს გასასწორებელია


