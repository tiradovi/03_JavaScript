// 변수선언
/*
document(문서) : HTML 문서 파일 안에서 존재하는 메서드 기능중에서
.              : 이 항목을 선택하겠다.
getElementById : 함수 안에서 메서드 기능으로 document를 사용해야만 호출 가능
                Element = 요소, 태그 내에 존재하는 Id 가 요소의 값 가져오기
("아이디명칭")  : 요소 태그 내부에서 <input id="아이디명칭"으로 존재하는
                 태그 내부에 요소를 바라보겠다.
.              : 이 항목을 선택하겠다.
value          : input 내부에 소비자가 작성한 값을 가져오기 위해 사용
                 주로 html 내부의 존재하는 값을 가져올 때 사용
*/

// 대소문자 구분
const ABC = "알파벳 ABC 대문자";
const abc = "알파벳 abc 소문자";

console.log(ABC); //알파벳 ABC 대문자
console.log(abc); //알파벳 abc 소문자

/*
대문자로 변수이름을 작성할 경우 상수라는 의미로 개발자들간의 약속
DB연결, Email 아이디 인증키와 같은 설정을 대문자로 작성

개발자, 소비자가 작성한 값을 주고 받는 역할을 하는 변수 명칭은 소문자로 작성
*/

// 함수 내부에서 공통으로 사용하는 변수 명칭은 맨 위에 작성

// script 가 포함된 HTML 문서 내부에서 input1이라고 작성된 id를 포함한 태그를 바라보겠다 설정
const num1 = document.getElementById("input1");
const num2 = document.getElementById("input2");
const reslt = document.getElementById("계산결과");

function minusFn() {
  /* 
    value의 값은 반드시 function 기능 내부에서 가져오기
    이유: HTML이 화면에 보여지는 순간은 value의 기본값이 0이므로
    0으로 고정됨
    */
  const value1 = num1.value;
  const value2 = num2.value;
  reslt.innerText = Number(value1) - Number(value2);
}
function multiFn() {
  const value1 = Number(num1.value);
  const value2 = Number(num2.value);
  reslt.innerText = value1 * value2;
}
function divFn() {
  reslt.innerText = Number(num1.value) / Number(num2.value);
}
function modFn() {
  const value1 = num1.value;
  const value2 = num2.value;
  reslt.innerText = Number(value1) % Number(value2);
}
