const gridContainer = document.querySelector(".grid-container")

for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    gridContainer.appendChild(cell);
}
const gridItems = document.querySelectorAll('.grid-cell');

gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'black';
    });
});
const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function(){
    const cells = document.getElementsByClassName("grid-cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "white";
    }
});