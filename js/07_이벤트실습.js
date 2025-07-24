const box3 = document.getElementById("box3");
const input3 = document.getElementById("input3");
const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", function () {
  box3.style.backgroundColor = input3.value;
});

const box4 = document.getElementById("box4");
const input4 = document.getElementById("input4");
const btn4 = document.getElementById("btn4");

btn4.addEventListener("click", function () {
  box4.style.backgroundColor = input4.value;
  btn4.style.backgroundColor = input4.value;
});
