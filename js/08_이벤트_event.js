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
