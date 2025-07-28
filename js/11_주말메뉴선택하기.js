const selectBtn = document.getElementById("selectBtn");
const menuSelect = document.getElementById("menuResult");
const menus = ["치킨", "피자", "햄버거", "족발", "보쌈", "찜닭"];

selectBtn.addEventListener("click", function () {
  let index = Math.floor(Math.random() * menus.length);
  menuSelect.textContent = menus[index];
});
