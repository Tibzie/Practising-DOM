let input = document.getElementById("input");
let btn = document.getElementById("button");
let space = document.getElementById("empty-space");

btn.addEventListener("click", () => {
    space.innerHTML = input.value.split("").reverse().join("");
});
