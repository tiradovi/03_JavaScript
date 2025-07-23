//변수 선언

//document(문서): HTML문서 파일 내에서
//get           : 가져오다.
//Element       : HTML 요소
//ById          : 아이디가 일치하는

function plusFn() {
  // "문자열" + 숫자 = "문자열숫자"
  // 코드 실행 중간에 문제 발생시 실행종료
  alert("number1의 값: " + number1);
  alert("number2의 값: " + number2);
  /*
        input 요소에 작성된 값은 무조건 문자열 (String) 형태이므로 이어쓰기
        형변환 필요
        Number(number1)
        */
  alert("두 수의 합 :" + number1 + number2);
  alert("두 수의 합 :" + Number(number1) + Number(number2));
  alert(Number(number1) + Number(number2));

  /*
        두 수의 합을 id가 "계산결과" 인 요소 (결과 변수)의 
        내부글자 (innerText,HTML 요소 내용)으로 대입하기 순서        
        */
  // 1번 HTML 코드 내에서 <> 태그 내부에 id 값으로 계산 결과가 작성된 태그 찾기
  // 2번 찾은 태그를 const result 라는 이름으로 값 담기
  // 3번 result.innerText로 수의 합을 저장해서 사용자 화면에 보여주기
  // result 뒤에는 소비자가 작성한 계산 값이 아니라 우리가 더한 계산 결과가 들어가야하기 때문
  // .value를 붙이지 않음
  const result = document.getElementById("계산결과");
  result.innerText = Number(number1) + Number(number2);
}
function minusFn() {
  const number1 = Number(document.getElementById("input1").value);
  const number2 = Number(document.getElementById("input2").value);
  document.getElementById("계산결과").innerText = number1 - number2;
}
function multiFn() {
  const number1 = document.getElementById("input1").value;
  const number2 = document.getElementById("input2").value;
  document.getElementById("계산결과").innerText = number1 * number2;
}
function divFn() {
  const number1 = document.getElementById("input1").value;
  const number2 = document.getElementById("input2").value;
  document.getElementById("계산결과").innerText = number1 / number2;
}
function modFn() {
  const number1 = document.getElementById("input1").value;
  const number2 = document.getElementById("input2").value;
  document.getElementById("계산결과").innerText = number1 % number2;
}
