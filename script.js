const container = document.querySelector("#grid-container");
const slider = document.querySelector("#grid-size-slider");

function createGrid(rows, columns) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let i = 0; i < rows * columns; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        });
        container.appendChild(cell);
    }
}


createGrid(16, 16);


slider.addEventListener("input", () => {
    const gridSize = slider.value;
    createGrid(gridSize, gridSize);
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    const cells = document.querySelectorAll(".grid-cell");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    })
});;

function updateGridSizeLabel() {
    const gridSizeSlider = document.getElementById("grid-size-slider");
    const gridSizeLabel = document.getElementById("grid-size-label");
    const gridSize = gridSizeSlider.value;
    gridSizeLabel.textContent = gridSize + "x" + gridSize;
}
updateGridSizeLabel();

const gridSizeSlider = document.getElementById("grid-size-slider");
gridSizeSlider.addEventListener("input", updateGridSizeLabel);

const colorPicker = document.getElementById("color-wheel");

function setColor(e) {
  const color = e.target.value;
  const cells = document.querySelectorAll(".grid-cell");

  cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = color;
    });
  });
}

colorPicker.addEventListener("input", setColor);