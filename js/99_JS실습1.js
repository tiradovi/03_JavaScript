function 첫번째함수() {
  alert("안녕하세요!");
}

function 텍스트변경() {
  document.getElementById("메시지영역").innerHTML = "새로운 메시지!";
}

function 배경색변경(color) {
  const body = document.querySelector("body");
  body.style.backgroundColor = color;
}

function 인사하기() {
  result = document.getElementById("이름입력").value;
  document.getElementById("인사결과").innerHTML = result;
}

function 계산하기(operator) {
  number1 = Number(document.getElementById("숫자1").value);
  number2 = Number(document.getElementById("숫자2").value);
  if (operator == "+") {
    result = number1 + number2;
  }
  if (operator == "-") {
    result = number1 - number2;
  }
  if (operator == "*") {
    result = number1 * number2;
  }
  document.getElementById("계산결과").innerHTML =
    number1 + operator + number2 + "=" + result;
}

function 이미지크기조절(size) {
  image = document.getElementById("조절이미지").value;
  image.style.width = 100;
  image.style.height = size;
}
