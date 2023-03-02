const circleEl = document.getElementById("circle");
const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");

let rotateValue = circleEl.style.transform;
let rotateSum;

const upArrow = () => {
  rotateSum = rotateValue + "rotate(-90deg)";
  circleEl.style.transform = rotateSum;
  rotateValue = rotateSum;
};

const downArrow = () => {
  rotateSum = rotateValue + "rotate(90deg)";
  circleEl.style.transform = rotateSum;
  rotateValue = rotateSum;
};

upBtn.addEventListener("click", () => {
  upArrow();
});

downBtn.addEventListener("click", () => {
  downArrow();
});
