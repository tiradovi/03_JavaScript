function 계절체크기능() {
  const month = document.getElementById("monthSelect").value;
  const resultDiv = document.getElementById("seasonResult");

  switch (month) {
    case "3":
    case "4":
    case "5":
      resultDiv.innerHTML = "봄";
      break;
    case "6":
    case "7":
    case "8":
      resultDiv.innerHTML = "여름";
      break;
    case "9":
    case "10":
      resultDiv.innerHTML = "가을";
      break;
    case "11":
    case "12":
    case "1":
    case "2":
      resultDiv.innerHTML = "겨울";
      break;
    default:
      resultDiv.innerHTML = "다시 입력";
      break;
  }
}
function 커피주문기능() {
  const coffee = document.getElementById("coffeeSelect").value;
  let resultCoffee = document.getElementById("coffeeResult");

  switch (coffee) {
    case "americano":
      break;
    case "latte":
      break;
    case "cappuccino":
      break;
    case "mocha":
      break;
    case "macchiato":
      break;
    default:
      break;
  }
}
