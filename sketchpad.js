for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    const div = document.createElement("div");
    div.className = "square";

    div.onmouseover = function (event) {
      let target = event.target;
      target.style.background = "pink";
    };

    const container = document.getElementsByClassName("container")[0];
    container.appendChild(div);
  }
}

function resetMe() {
  let popUp = prompt("Please enter number of squares per side for new grid");
  if (popUp === null || isNaN(popUp)) {
    console.log("not valid input");
  }
  // clear current grid
  const container = document.getElementsByClassName("container")[0];
  container.innerHTML = "";
}
