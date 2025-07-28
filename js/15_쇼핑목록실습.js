const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const shoppingList = document.getElementById("shopping-list");
const items = [];

addBtn.addEventListener("click", function (e) {
  const itemName = itemInput.value.trim();

  if (itemName === "") {
    alert("상품명을 입력하세요.");
    return;
  }

  items.push(itemName);

  let listText = "🛒 쇼핑 목록:\n\n";
  for (let i = 0; i < items.length; i++) {
    listText += `${i + 1}. ${items[i]}\n`;
  }
  shoppingList.textContent = listText;

  itemInput.value = "";
  itemInput.focus();
});

itemInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});
