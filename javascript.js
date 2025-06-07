const container = document.querySelector(".grid-container");

for(let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.textContent = i;
    container.appendChild(gridItem);
}