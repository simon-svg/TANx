// search animation
const searchIcon = document.querySelector(".header__search_icon");
const search = document.querySelector(".header__search");
let searchBool = true;

searchIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    if (searchBool) {
        search.style.opacity = "1";
        search.style.visibility = "visible";
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

document.addEventListener("click", () => {
    search.style.opacity = "0";
    search.style.visibility = "hidden";
    searchBool = true;
})