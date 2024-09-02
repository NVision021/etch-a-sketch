const container = document.querySelector("#container");

let gridSize = 16;
let colour = "black";

/* A function that creates a grid of gridsize x gridsize */
// This could also have been done with flex-wrap //
function createGrid (size) {
  for (let i = 1; i < size + 1; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    column.style.cssText = "flex-grow: 1; display: flex; flex-direction: column;"
    container.appendChild(column); 
  }
  let columns = document.querySelectorAll(".column");
  columns.forEach(column => {
    for (let i = 1; i < size + 1; i++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.style.cssText = "display: flex; border: solid; border-width: 1px; flex-grow: 1;";
      column.appendChild(box);
    } 
  })
  /* Create hover effect that changes each box elements */
  const boxes = document.querySelectorAll(".box");
  boxes.forEach(box => {
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = colour;
  })
})
}

createGrid(gridSize);

/* Add event listener to reset button */
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  let size = prompt("Enter dimensions for new grid between 1 and 100 (will default to 16 if another value is provided): ", 16); 
  if (size !== null) {
    size = Number(size);
    if (isNaN(size) || size < 1 || size > 100) {
      size = 16;
    }
    /*Delete current grid and make new one*/
    columnList = container.querySelectorAll(".column");
    columnList.forEach(column => 
      container.removeChild(column))
    createGrid(size);
  }
})

/* Add event listener to colour buttons */
const colourButtons = document.querySelectorAll("#colour-button");
colourButtons.forEach(button => {
  button.addEventListener("click", () => {
    colour = getComputedStyle(button).backgroundColor;
  })
})





