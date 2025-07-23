//<!-- 문제 1: 기본 알림창 띄우기 -->
function 첫번째함수() {
  alert("안녕하세요!");
}
//<!-- 문제 2: 텍스트 변경하기 -->
function 텍스트변경() {
  document.getElementById("메시지영역").innerHTML = "새로운 메시지!";
}
//<!-- 문제 3: 배경색 변경하기 -->
function 배경색변경(color) {
  /*  
  document.querySelector("body").style.backgroundColor = 색상
  
  document
  .querySelector("body")
  .style
  .backgroundColor = 색상;
  */
  const body = document.querySelector("body");
  body.style.backgroundColor = color;
}
//<!-- 문제 4: 이름 입력받고 인사하기-->
function 인사하기() {
  // result 앞에다가 자료형을 붙여주지 않았을 때
  // 전역변수로 해서 function 이외에도 사용할 수 있도록 설정
  // 즉 함수 인사하기 바깥에도 result 사용 가능, 되도록 const, let 붙이기
  const nameInput = document.getElementById("이름입력").value;

  const sayresult = document.getElementById("인사결과");
  sayresult.innerHTML = "안녕하세요, " + nameInput + "님!";
}
//<!-- 문제 5: 간단한 계산기 -->
function 계산하기(operator) {
  const number1 = Number(document.getElementById("숫자1").value);
  const number2 = Number(document.getElementById("숫자2").value);
  const culresult = document.getElementById("계산결과");
  /* 만약에 조건이 진실이라면 */

  if (operator == "+") {
    result = number1 + number2;
  } else if (operator == "-") {
    result = number1 - number2;
  } else if (operator == "*") {
    result = number1 * number2;
  }
  culresult.innerHTML = number1 + operator + number2 + "=" + result;
}
//<!--문제 6: 이미지 크기 조절하기-->
function 이미지크기조절(size) {
  image = document.getElementById("조절이미지");
  image.style.width = size;
  image.style.height = size;
}

/*  */
function Inner확인하기() {
  /*
  innerHTML: 내부에서 HTML 태그를 인식하고 처리

  innerText: 내부에서 HTML 태그를 인식하지 않고 순순한 텍스트 값만 다룸
  */
  const a = document.getElementById("xInnerHTML");
  const b = document.getElementById("xInnerText");

  a.innerHTML = "<h1>안녕하세요.</h1>";
  b.innerText = "<h1>안녕하세요.</h1>";
}
