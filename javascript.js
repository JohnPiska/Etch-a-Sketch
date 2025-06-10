const container = document.querySelector(".grid-container");
const button = document.querySelector(".btn");


button.addEventListener("click", () => {
    const size = prompt("Введите размер от 1 до 100");
});

for(let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    container.appendChild(gridItem);
}

const gridItem = document.querySelector(".grid-item")
gridItem.addEventListener("mouseover", () => {
    gridItem.setAttribute("style", "background: blue;");
    console.log("fdfsdfs")
})
