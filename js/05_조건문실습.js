input1 = document.getElementById("input1");
function 잔액확인하기() {
  금액 = Number(input1.value);

  if (금액 >= 5000) {
    alert("잔액없음");
  } else {
    alert("언제까지 돌려줄 수 있는지 알려줘 ^^");
  }
}
