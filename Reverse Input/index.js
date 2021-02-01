let input = document.getElementById("input");
let btn = document.getElementById("button");
let space = document.getElementById("empty-space");
let resetBtn = document.getElementById("reset-btn");

btn.addEventListener("click", () => {
    space.innerHTML = input.value.split("").reverse().join("");
});
resetBtn.addEventListener("click", () => {
    input.value = "";
});