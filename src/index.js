import "./styles.css";

var statusArr = [];

document.getElementById("matrix").onclick = onClickhandler;

function onClickhandler(event) {
  console.log("hello", event);
  var elementId = event.target.id;
  console.log("elementId is: ", elementId);
  const El = document.getElementById(elementId);
  if (statusArr.indexOf(elementId) === -1) {
    El.classList.remove("box");
    El.classList.add("box-green");
    statusArr.push(elementId);
  }
  if (statusArr.length === 7) {
    vaccateColor();
  }
}

function vaccateColor() {
  var delay = 1;
  for (let i = 6; i >= 0; i--) {
    const elementId = statusArr[i];
    const El = document.getElementById(elementId);
    setTimeout(() => {
      El.classList.remove("box-green");
      El.classList.add("box");
    }, 500 * delay++);
  }
  statusArr.length = 0;
}
