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
    culresult.innerText = number1 + number2;
  } else if (operator == "-") {
    culresult.innerText = number1 - number2;
  } else if (operator == "*") {
    culresult.innerText = number1 * number2;
  }
}
//<!--문제 6: 이미지 크기 조절하기-->
function 이미지크기조절(크기) {
  /* javaScript 내에서 작성하는 스타일은 2순위 스타일 사용 지양 */
  const image = document.getElementById("조절이미지");
  image.style.width = 크기;
  image.style.height = 크기;
}
//<!--문제 6: 이미지 크기 조절하기(응용)-->
function 이미지크기조절2(가로, 세로) {
  /* javaScript 내에서 작성하는 스타일은 2순위 스타일 사용 지양 */
  const image = document.getElementById("조절이미지2");
  image.style.width = 가로;
  image.style.height = 세로;
}
// <!-- 문제 7: 글자 스타일 변경하기 -->
function 글자스타일변경(색깔, 크기, 굵기) {
  const 글자 = document.getElementById("스타일텍스트");
  글자.style.color = 색깔;
  글자.style.fontSize = 크기;
  글자.style.fontStyle = 굵기;
  /*
  fontStyle = 기울이기 등 꾸미기
  fontWeight = 폰트 굵기 100(얇음)~900(굵음)
  400 - 일반적 두께
  700 - bold
  */
}
// <!-- 문제 8: 현재 시간 보여주기 -->
function 시간보여주기() {
  /*
  Number = 추후에 만들어진 데이터 타입
          -> 숫자로 만들고 싶은 문자열 외부를 Number()라는 글자를 작성하고()로 감싸면 기능
          
  Date   = 다양한 정보와 기능을 담고 있는 설계도
           new 사용해서 JS 개발자가 제공하는 기능중에
           현재 JS를 사용하는 개발자가 필요한 기능만 작성해서 사용

  변환/계산할 때는 new 라는 명칭을 사용하지 않음
  새로운 복잡한 것을 만들 때는 new 사용

  getMonth() 는 0부터 시작하기에 +1 필요
  */
  let 지금 = new Date();
  //현재 시간 정보를 가져오는 명령

  document.getElementById("시간표시").innerHTML =
    지금.getFullYear() +
    "년 " +
    (지금.getMonth() + 1) +
    "월 " +
    지금.getDate() +
    "일 " +
    지금.getHours() +
    "시 " +
    지금.getMinutes() +
    "분 ";
}
//    <!-- 문제 9: 숨기기/보이기 기능 -->
let 토글보임상태 = true;
function 토글기능() {
  const 토글박스 = document.getElementById("토글박스");
  if (토글보임상태 == true) {
    토글박스.style.display = "none";
    토글보임상태 = false;
  } else {
    토글박스.style.display = "block";
    토글보임상태 = true;
  }
}
//  <!-- 문제 10: 색상 맞추기 미니게임 -->
function 게임체크(선택색상) {
  if (선택색상 == "red") {
    document.getElementById("게임결과").innerHTML = "정답!";
  } else {
    document.getElementById("게임결과").innerHTML = "틀렸습니다!";
  }
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
