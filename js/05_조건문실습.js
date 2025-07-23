const input1 = document.getElementById("input1");
function 잔액확인하기() {
  const val1 = Number(input1.value);

  if (val1 >= 5000) {
    alert("잔액없음");
  } else {
    alert("언제까지 돌려줄 수 있는지 알려줘 ^^");
  }
}

function 홀짝기능() {
  const input2 = document.getElementById("input2");
  const val2 = Number(input2.value);
  if (val2 % 2 == 1) {
    alert("홀수입니다.");
  } else {
    alert("짝수입니다.");
  }
}

function 주행거리계산기능() {
  const 인풋3 = document.getElementById("input3");
  const amount = Number(인풋3.value);

  if (amount <= 3) {
    alert("주행거리 비용은 3000원 입니다.");
  } else if (amount > 3 && amount <= 10) {
    alert("주행거리 비용은 8000원 입니다.");
  } else if (amount > 10) {
    alert("주행거리 비용은 20000원 입니다.");
  }
}
