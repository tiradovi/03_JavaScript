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

function 비밀번호체크() {
  let password = document.getElementById("비밀번호입력").value;
  let 시도횟수 = 0;
  let 결과메세지 = "";

  /*
  == 양 옆이 일치할 경우 true
  != 양 옆이 일치하지 않으면 true
  */
  while (password != "1234") {
    //비밀번호가 틀렸으면 다시 시도
    //prompt(): 값을 입력할 수 있는 alert창과 같은 존재 : 값입력창, 확인 버튼, 취소 버튼 존재
    password = prompt("비밀번호가 틀렸습니다. 다시입력하세요");

    // 사용자가 비밀번호를 그만치고 싶어서
    // 취소를 누를 경우
    if (password == null) {
      // 취소를 눌러서 아무값도 아닌경우
      document.getElementById("결과창").innerHTML = "로그인이 취소되었습니다.";
      return; //while 중단 가능
    }
  }
  document.getElementById("결과창").innerText = "정답입니다.";
}
