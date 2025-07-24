let total = 0;
let orderText = "";
let running = true;

function order() {
  let choice = document.getElementById("choice").value;
  console.log("order");
  while (running) {
    choice = prompt("추가 주문을 입력하세요.");
    switch (choice) {
      case "1":
        orderText += "아메리카노";
        total += 3000;
        break;
      case "2":
        orderText += "라떼";
        total += 4000;
        break;
      case "3":
        orderText += "카푸치노";
        total += 4500;
        break;
      case "0":
        orderText += "주문완료";
      
        return;
      default:
        alert("잘못된 번호입니다.");
        break;
    }
    document.getElementById(
      "result"
    ).innerHTML = `현재 주문 : ${orderText}<br>총액: ${total}원`;
  }
}
function exit() {}
