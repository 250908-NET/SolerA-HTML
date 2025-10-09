const square = n => n*n;

const btn = document.getElementById("squareBtn");
const input = document.getElementById("numInput");

btn.addEventListener("click", () => {
  alert(square(Number(input.value)));
});