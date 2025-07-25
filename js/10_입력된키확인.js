// 화면에 존재하는 key 모두 가져오기
const key = document.querySelectorAll(".key");

// 특정 요소가 아닌 문서 전체에서 키가 눌리는 걸 감지했을 때
document.addEventListener("keydown", function (e) {
  // e: 이벤트 객체 (이벤트 관련 정보가 모두 담겨있음)
  // e.key : 입력된 키

  // 문자열.toLowerCase() : 영어를 모두 소문자로 변경
  // 문자열.toUpperCase() : 영어를 모두 대문자로 변경
  // index = 0번째 부터 시작
  // length = 총 글자수

  let idx; // 인덱스 값을 저장할 변수 이름
  // 입력된 키와 일치하는 case 실행

  switch (e.key.toLowerCase()) {
    case "q":
      idx = 0;
      break;
    case "w":
      idx = 1;
      break;
    case "e":
      idx = 2;
      break;
    case "r":
      idx = 3;
      break;
    default:
      alert("준비중입니다.");
      return;
  }
  key[idx].style.color = "#2a9d8f";
});
document.addEventListener("keyup", function (e) {
  let idx;

  switch (e.key.toLowerCase()) {
    case "q":
      idx = 0;
      break;
    case "w":
      idx = 1;
      break;
    case "e":
      idx = 2;
      break;
    case "r":
      idx = 3;
      break;
    default:
      alert("준비중입니다.");
      return;
  }
  key[idx].style.color = "#333";
});
