const randomDog = document.getElementById("randomDog");
const result = document.getElementById("result");
const content = document.getElementById("content");

randomDog.addEventListener("click", () => {
  content.innerHTML = '<div class="loading"> 귀여운 강아지를 찾는중 .. </div>';
  fetch(`https://api.thedogapi.com/v1/images/search`)
    .then((response) => response.json())
    .then((data) => {
      console.log("data :", data);
      content.innerHTML = `
      id : ${data[0].id} <br>
      URL : ${data[0].url} <br>
      <img src="${data[0].url}" alt="강아지" class="dog-image" />
      
      
      `;
    });
});

/** TODO 코드 작성해야하거나, 코드 설명, 코드 내용 포함 주소
 *
 * parse()와 json() 메서드 차이
 *
 * JSON.parse()
 * JavaScript의 내장 메서드
 * JSON 문자열을 JavaScript 객체로 변환
 * 동기적 처리
 *
 * response.json()
 * FetchAPI Response 객체 메서드
 * URL 응답 본문을 JSON으로 받아 JavaScript객체로 변환
 * 비동기적 처리
 *
 * 동기: 은행 번호표, 순차적으로 시작하고 종료
 * 직렬 업무 형태
 *
 * 비동기: 카페 주문, 주문을 먼저 했더라도 뒤에 있는 사람의 음료가 먼저 나오기도함
 *         주문을 기다리며 다른 업무가 가능
 * 병렬 업무 형태
 *
 * */
