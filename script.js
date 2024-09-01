const container = document.querySelector("#container");

let gridSize = 50;

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
}

createGrid(gridSize);

/* Create hover effect that changes each box elements */
let boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "black";
  })
})

