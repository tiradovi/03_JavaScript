const btnE = document.getElementById("btn-e");
const btnEvent = document.getElementById("btn-event");
const result1 = document.getElementById("result1");
//0. 매개변수 e, event를 다른 것으로 바꿔도 상관없음, 개발자 컨벤션에 가까움
//1. e로 작성한 방법
btnE.addEventListener("click", function (e) {
  result1.textContent = `e 사용 - 이벤트 타입 : ${e.type}, 클릭된 요소 : ${e.target.textContent}`;
});
//2. event로 작성한 방법
btnEvent.addEventListener("click", function (event) {
  result1.textContent = `event 사용 - 이벤트 타입 : ${event.type}, 클릭된 요소 : ${event.target.textContent}`;
});

const btnA = document.getElementById("btn-A");
const btnB = document.getElementById("btn-B");
const btnC = document.getElementById("btn-C");
const result2 = document.getElementById("result2");

btnA.addEventListener("click", function (e) {
  result2.textContent = `태그 : ${e.target.tagName}  \n
                         내용 : ${e.target.textContent}  \n
                         ID 명칭:${e.target.id} \n
                         Class 명칭: ${e.target.className}`;
});

//textContent의 줄바꿈 처리  /n, <br/>이 아닌 \n 사용 css로 white-space : pre-line추가
btnB.addEventListener("click", function (e) {
  result2.textContent = `태그 : ${e.target.tagName}
                         내용 : ${e.target.textContent} 
                         ID 명칭:${e.target.id} 
                         Class 명칭: ${e.target.className}`;
});

btnC.addEventListener("click", function (e) {
  result2.textContent = `태그 : ${e.target.tagName}
                         내용 : ${e.target.textContent} 
                         ID 명칭:${e.target.id} 
                         Class 명칭: ${e.target.className}`;
});

const textInput = document.getElementById("text-input");
const numberInput = document.getElementById("number-input");
const selectInput = document.getElementById("select-input");
const result3 = document.getElementById("result3");

// 텍스트 입력이 감지되었을 때 진행할 기능 설정
textInput.addEventListener("input", function (e) {
  result3.textContent = `텍스트 입력값 : ${e.target.value}
                         텍스트 글자수 : ${e.target.value.length}`;
});
// 숫자 입력이 감지되었을 때 숫자입력 값과 글자수 result3로 보이기
numberInput.addEventListener("input", function (e) {
  result3.textContent = `텍스트 입력값 : ${e.target.value}
                         텍스트 글자수 : ${e.target.value.length}`;
});
// select에서 선택한 옵션을 클릭해서 변경할 때 변경된 값 보여주기
selectInput.addEventListener("change", function (e) {
  result3.textContent = `선택된 값: ${e.target.value}
                         선택된 값의 글자수: ${e.target.value.length}
                         선택된 값의 순서: ${e.target.selectedIndex}`;
});

const loginForm = document.getElementById("login-form");
const username = document.getElementById("username");
const userPw = document.getElementById("userPw");
const result4 = document.getElementById("result4");

loginForm.addEventListener("submit", function (e) {
  //preventDefault 뒤에 () 붙이기
  /* 
  함수(기능, 행동) 내부에 메서드(기능,행동)
 
  변수이름.메서드행동기능함수명칭()=동사
  변수이름.명칭                  =명사
  */
  e.preventDefault(); // 실제 폼 제출을 우선 멈춤 , 비밀번호 일치 확인, 아이디 중복 확인 등의 기능에 사용
  result4.textContent = `사용자 이  름: ${username.value}
                        사용자 비밀번호: ${userPw.value}`;
});
