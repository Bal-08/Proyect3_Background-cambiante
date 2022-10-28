const button = document.getElementById("button");
const body = document.querySelector("body");
const colorNumber = document.querySelector(".color");


const generateRandomColor = () => {
  const co = Math.floor(Math.random() * 256);
  const lo = Math.floor(Math.random() * 256);
  const r = Math.floor(Math.random() * 256);

  const color = `rgb(${co},${lo},${r})`;
  return color;
};

const setBackgrount = () => {
  const newColor = generateRandomColor();
  colorNumber.innerHTML = newColor;
  body.style.backgroundColor = newColor;
};

button.addEventListener("click", setBackgrount);