const menuResult = document.getElementById("menuResult");
const selectBtn = document.getElementById("selectBtn");
const menus = [
  "곱창",
  "김밥",
  "제육",
  "돈까스",
  "파스타",
  "샐러드",
  "라면",
  "삼겹살",
  "카레라이스",
  "불고기",
  "피자",
  "치킨",
  "쌀국수",
  "감자탕",
  "닭가슴살",
];

selectBtn.addEventListener("click", function () {
  /*
    Math: JS에서 수학적 계산을 위해 제공되는 내장 객체
    내장 객체 : JS 개발팀이 추가적으로 만든 객체 기능
                따로 설치할 필요없이 맨 첫글자를 대문자로 작성

    메서드(기능들)
    .random()    : 0이상 1미만의 랜덤한 소수를 생성
    .floor(숫자) : 소수점 버림하여 정수로 만듦(내림처리)
    .ceil(숫자)  : 소수점 올림하여 정수로 만듦(올림처리)
    .round(숫자) : 소수점 반올림하여 정수로 만듦(반올림처리)
    */


    //.random()=0이상 1미만의 랜덤한 소수 출력
  const randomNumber = Math.floor(Math.random() * menus.length);
  menuResult.innerText = menus[randomNumber];
});
