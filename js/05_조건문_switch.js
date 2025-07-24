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
  const resultCoffee = document.getElementById("coffeeResult");

  let price, description;
  switch (coffee) {
    case "americano":
      price = "2,000원";
      description = "깔끔하고 진한 맛의 기본 커피";
      break;
    case "latte":
      price = "3,500원";
      description = "부드러운 우유 거품이 들어간 커피";
      break;
    case "cappuccino":
      price = "3,800원";
      description = "진한 에스프레소와 우유 거품의 조화";
      break;
    case "mocha":
      price = "4,200원";
      description = "달콤한 초콜릿이 들어간 커피";
      break;
    case "macchiato":
      price = "4,000원";
      description = "카라멜 시럽이 들어간 달콤한 커피";
      break;
    default:
      price = "가격 정보 없음";
      break;
  }
  /*
    ${} 템플릿 리터럴 
    변수 삽입 문법
    ES6 부터 제공되는 문법
    ``(백틱, 역 따옴표) 안에서 사용하고자 하는 변수를 작성할 때 ${} 내부에 변수이름 작성하는 방법
  */
  resultCoffee.innerHTML = `☕ ${coffee} <br> 💰 가격: ${price} <br> 📝 설명: ${description}`;
}
