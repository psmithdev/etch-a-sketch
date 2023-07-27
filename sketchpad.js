function createGrid(size) {
  const container = document.getElementsByClassName("container")[0];
  container.innerHTML = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.className = "square";

      div.onmouseover = function (event) {
        let target = event.target;
        target.style.background = "pink";
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
  createGrid(popUp);
}

createGrid(4);
