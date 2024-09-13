const container = document.getElementById("canvas");

//grid
function gridRows(rows, cols) {
  //getting the size right
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const itemWidth = containerWidth / cols;
  const itemHeight = containerHeight / rows;

  //looping it so that its a 16x16 grid
  for (let i = 0; i < rows * cols; i++) {
    //creating a div and putting it inside its parent
    let gridItem = document.createElement("div");
    container.appendChild(gridItem).className = "grid-div";

    //making the grid fit
    gridItem.style.width = `${itemWidth}px`;
    gridItem.style.height = `${itemHeight}px`;

    //change background color
    const buttonRed = document.getElementById("redChanger");
    buttonRed.addEventListener("click", function () {
      gridItem.addEventListener("mouseover", function () {
        gridItem.style.backgroundColor = "red";
      });
    });

    const buttonGreen = document.getElementById("greenChanger");
    buttonGreen.addEventListener("click", function () {
      gridItem.addEventListener("mouseover", function () {
        gridItem.style.backgroundColor = "green";
      });
    });

    const buttonBlue = document.getElementById("blueChanger");
    buttonBlue.addEventListener("click", function () {
      gridItem.addEventListener("mouseover", function () {
        gridItem.style.backgroundColor = "blue";
      });
    });

    const buttonBlack = document.getElementById("blackChanger");
    buttonBlack.addEventListener("click", function () {
      gridItem.addEventListener("mouseover", function () {
        gridItem.style.backgroundColor = "black";
      });
    });

    const buttonRandom = document.getElementById("randomChanger");
    buttonRandom.addEventListener("click", function () {
      gridItem.addEventListener("mouseover", function () {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        gridItem.style.backgroundColor = `#${randomColor}`;
      });
    });
    gridItem.addEventListener("mouseover", function () {
      gridItem.style.backgroundColor = "black";
    });
    //reset button
    const resetButton = document.getElementById("resetButon");
    resetButton.addEventListener("click", function () {
      gridItem.style.backgroundColor = "white";
    });
  }
}
gridRows(16, 16);

//button to make grid bigger
function askGridSize() {
  let userInput = prompt("Enter grid size (max 100) (min 4)");

  //making the grid bigger
  if (userInput < 4) {
    alert("Min is 4");
  } else if (userInput > 100) {
    alert("max is 100");
  } else {
    container.innerHTML = "";
    gridRows(userInput, userInput);
  }
}
