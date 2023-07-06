const firstSmallImage = document.querySelector(".first-small-img");
const secondSmallImage = document.querySelector(".second-small-img");
const bigImage = document.querySelector(".big-img");
const sliderImage = document.querySelector("img")
const rightArrowBtn = document.querySelector(".fa-angle-right")
const leftArrowBtn = document.querySelector(".fa-angle-left")


firstSmallImage.addEventListener("click", () => {
    let checkBox = "";
    checkBox = bigImage.src
    bigImage.src = firstSmallImage.src;
    firstSmallImage.src = checkBox;
});

secondSmallImage.addEventListener("click", () => {
    let checkBox = "";
    checkBox = bigImage.src
    bigImage.src = secondSmallImage.src;
    secondSmallImage.src = checkBox;
});

rightArrowBtn.addEventListener("click", () => {
    let checkBox = "";
    checkBox = bigImage.src
    bigImage.src = secondSmallImage.src;
    secondSmallImage.src = firstSmallImage.src;
    firstSmallImage.src = checkBox;
});

leftArrowBtn.addEventListener("click", () => {
    let checkBox = "";
    checkBox = bigImage.src
    bigImage.src = firstSmallImage.src;
    firstSmallImage.src = secondSmallImage.src;
    secondSmallImage.src = checkBox;
});
