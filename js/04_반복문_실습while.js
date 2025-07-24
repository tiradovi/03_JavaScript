let orders = "";
let 주문번호 = 0; //카운터 기능 추가

function 주문추가기능() {
  // let orders는 이미 빈공간  let orders ="" 명시도 가능
  const menu = document.getElementById("menuSelect").value;
  const result = document.getElementById("result");
  /* id 위치를 바라보거나, value 확인시 const */

  let foodName, price;
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

  //       ++주문번호는 주문을 1개 추가한 상태에서 현재 주문이 어디까지 진행됬는지 바로 확인
  //       주문번호++는 주문이 추가되기 전 현재 주문이 어디까지 진행됬는지 바로 확인
  orders = `${orders} ${foodName} - ${price} 원 * ${++주문번호} 개 </br>`;
  result.innerHTML = orders;
  /*
  result.innerHTML = `
  <h3>주문목록</h3>
  ${foodName}
  <p>${price}원</p>
  <hr/>`;
  */
}

function 주문완료기능() {
  if (orders == "") {
    alert("주문한 메뉴가 없습니다.");
  } else {
    alert("주문 완료되었습니다.");
    주문초기화기능();
  }
}

function 주문초기화기능() {
  orders = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("menuSelect").value = "";
}
