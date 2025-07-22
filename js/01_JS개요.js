/* 
모든 js파일명.js확장자명
           *.js 파일 내부를 <script> 태그 내부라고 보면 됨

*/
function externalFn() {
  alert("HTML 외부 파일에 작성된 externalFn()함수 기능 호출됨");
}

/*Js 맛보기: 버튼 클릭시 body 태그의 글자색, 배경색 변경*/
const body = document.querySelector("body");

/*버튼에 장착된 기능 실행하면 다크모드로 바꾸는 기능(함수) 설정*/
function 어두움모드() {
  body.style.color = "white";
  body.style.backgroundColor = "black";
}
function 밝음모드() {
  body.style.color = "black";
  body.style.backgroundColor = "white";
}

function 파란색모드(색상) {
  body.style.backgroundColor = 색상;
}
