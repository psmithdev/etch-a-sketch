function createGrid(size) {
  const container = document.getElementsByClassName("container")[0];
  container.innerHTML = "";

  let containerStyle = window.getComputedStyle(container);
  let containerWidth = parseFloat(containerStyle.getPropertyValue("width"));
  let squareSize = containerWidth / size;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.className = "square";
      div.style.width = `${squareSize}px`;
      div.style.height = `${squareSize}px`;

      div.onmouseover = function (event) {
        let target = event.target;
        target.style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )})`;
      };

      container.appendChild(div);
    }
  }
}

function resetMe() {
  let popUp = prompt("Please enter number of squares per side for new grid");
  if (popUp === null || isNaN(popUp)) {
    console.log("not valid input");
  }
  if (popUp >= 100) {
    console.log("That value is too large, will crash computer");
    return;
  }
  createGrid(popUp);
}

createGrid(4);
