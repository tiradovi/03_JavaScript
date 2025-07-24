let orders = "";

function 주문추가기능() {
  let foodName, price;
  // let orders는 이미 빈공간  let orders ="" 명시도 가능
  const menu = document.getElementById("menuSelect").value;
  const result = document.getElementById("result");
  /*
    id 위치를 바라보거나, value 확인시 const
  */

  switch (menu) {
    case "1":
      foodName = "피자";
      price = "15000";
      break;
    case "2":
      foodName = "치킨";
      price = "18000";
      break;
    case "3":
      foodName = "햄버거";
      price = "8000";
      break;
    case "4":
      foodName = "음료";
      price = "3000";
      break;
    default:
      alert("선택 후 주문해주세요.");
      break;
  }
  // 주문 추가  orders = orders + foodName + "-" + price + "원<br>";
  orders = `${orders} ${foodName}  ${price} </br>`;
  result.innerHTML = orders;
  /*
  result.innerHTML = `
  <h3>주문목록</h3>
  ${foodName}
  <p>${price}원</p>
  <hr/>`;
  */
}
function 주문완료기능() {}
function 주문초기화기능() {}
