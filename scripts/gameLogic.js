const gridContainer = document.querySelector(".grid-container");
const btnChangeSize = document.querySelector("#btnChangeSize");

window.addEventListener("load", initDefault);
btnChangeSize.addEventListener("click", changeSize);

function initDefault() {
    setGridSize(8);
    fillGrid(8);
}

function setGridSize(gridSize) {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
}

function changeSize() {
    let newSize;

    do {
        newSize = parseInt(prompt("Enter new size: "));
    } while (newSize < 1 || newSize > 100);

    emptyGrid();
    setGridSize(newSize);
    fillGrid(newSize);
}

function fillGrid(gridSize) {
    for (i = 0; i < gridSize ** 2; i++) {
        const gridItem = document.createElement('div');
        gridItem.setAttribute('class', 'grid-item');
        gridItem.addEventListener("mouseover", changeCellColor);

        gridContainer.appendChild(gridItem);
    }
}

function emptyGrid() {
    gridContainer.innerHTML = null;
}

function changeCellColor(e) {
    e.target.setAttribute('style', `background-color: rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
}

function randomColor() {
    return Math.floor(Math.random() * 256);
}

