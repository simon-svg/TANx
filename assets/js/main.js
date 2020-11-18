// search animation
const searchIcon = document.querySelector(".header__search_icon");
const search = document.querySelector(".header__search");
let searchBool = true;
const burgerMenu = document.querySelector(".header__burgerMenu");
const headerNav = document.querySelector(".header__phone_list");
let burgerBool = true;

searchIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    if (searchBool) {
        search.style.opacity = "1";
        search.style.visibility = "visible";
        headerNav.style.transform = "translate(-50%, -100px)";
        burgerBool = true;
    }
    else {
        search.style.opacity = "0";
        search.style.visibility = "hidden";
    }
    searchBool = !searchBool;
})
search.addEventListener("click", (e) => {
    e.stopPropagation();
})






// burger menu animation
burgerMenu.addEventListener("click", (e) => {
    e.stopPropagation()
    if (burgerBool) {
        headerNav.style.transform = "translate(-50%, 0px)";
        search.style.opacity = "0";
        search.style.visibility = "hidden";
        searchBool = true;
    }
    else {
        headerNav.style.transform = "translate(-50%, -100px)";
    }
    burgerBool = !burgerBool;
});
headerNav.addEventListener("click", (e) => {
    e.stopPropagation();
})
document.addEventListener("click", () => {
    search.style.opacity = "0";
    search.style.visibility = "hidden";
    headerNav.style.transform = "translate(-50%, -100px)";
    searchBool = true;
    burgerBool = true;
})






// form validation
const inputsArr = document.querySelectorAll(".form__inside_input");
const labelsArr = document.querySelectorAll(".form__label");
let valueLength;
inputsArr.forEach((item, i) => {
    item.addEventListener("input", (e) => {
        valueLength = e.target.value
        if (valueLength.length > 0) {
            labelsArr[i].style.top = "-5px";
            labelsArr[i].style.left = "-10px";
            labelsArr[i].style.transform = "scale(0.75)";
        }
        else {
            labelsArr[i].style.top = "22px";
            labelsArr[i].style.left = "0px";
            labelsArr[i].style.transform = "scale(1)";
        }
    })
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}