/* JS 객체
    - {K:V, K:V, K:V} 형태

    - (중요) Key는 무조건 문자열(string)
        -> "Key", 'key', key ("", '', 작성없음) 전부 String으로 인식

    - key는 기본적으로 오름차순으로 정렬된다. (short, ASC)
    
*/

/* {} 객체 생성 + 다루기 */
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  //1. 객체 생성
  const product = {}; //빈 객체 생성

  const 제품 = {
    productName: "갤럭시북4프로",
    productBrand: "samsung",
    price: 200000,
  };

  console.log(제품);
  //------------------------------------------------------------------------------------------
  //2. 객체 내 key 값을 이용해 원하는 value 얻기

  // 1) 객체명.key

  //가장 많이 사용
  console.log(제품.productName, 제품.productBrand, 제품.price);
  console.log("--------------------------------------------------------------");
  //상대적으로 적게 사용
  console.log(제품["productName"], 제품["productBrand"], 제품["price"]);

  //----------------------------------------------------------------------------------------
  // 3. 객체에 K:V 추가
  // Value 리터럴 값은 하나가 아닌, [] 리스트 목록 형태도 가능
  // 원하는 key를 생각해두고
  console.log("--------------------------------------------------------------");
  // 객체명.key= value;  or 객체명["key"] =value;
  제품.color = ["black", "silver", "red"];
  console.log(제품);
  console.log(제품.color[1]);

  제품.storage = ["256GB", "512GB", "1TB"];
  console.log(제품);

  제품.price = 180000;
  console.log(제품);

  // 4. 원하는 K:V 삭제하기 (delete 연산자 사용)
  // - delete 객체이름.key

  delete 제품.productName;
  console.log(제품);
});
//=============================================================
/* method(메서드) */

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
  const 스마트폰 = {}; // 비어있는 객체 생성
  스마트폰.모델이름 = "아이폰16프로맥스";
  스마트폰.가격 = 1000000;
  //메서드(객체의 기능(함수))추가
  스마트폰.정보 = function () {
    const 브랜드 = "사과";
    /*
    this 참조변수
    - 작성되는 위치에 따라 의기가 다름

    ex) <button onclick= 테스트기능(this)>
    이때 this == 클릭된 요소(버튼)

    ex) 객체이름.메서드이름 =function(){
    this.변수이름="값"
    이때 this == 메서드가 작성된 객체}
    */
    // 즉 여기서 this == 스마트폰
    console.log("모델이름 :", this.모델이름);
    console.log("가격 : ", this.가격);
    console.log("브랜드 : ", this.브랜드);
    console.log("브랜드 : ", 브랜드);
  };
  // 메서드 기능 수행하기
  // 어디서든 정보() 기능을 수행했을 때 내용이나 행동을 확인[X]-> 스마트폰 객체 내부에 정보() 기능 호출
  스마트폰.정보();

  /*
  정규식.test("소비자가 작성한 값 확인하기") =true/ false로 일치하는지 확인
    //1번 방법
  정규식 ={
  test =function (){
  boolean 값으로 확인할 수 있는 코드 작성
  }
  }
  //2번 방법
  정규식 ={};
  정규식.test =function(){
  boolean값으로 확인할 수 있는 코드 작성
  }
  
  //1번이나 2번 방법을 활용해서 정규식 메서드를 생성하고 나면 아래와 같이 호출
  정규식.test();

  if(개발자가원하는정규식.test(소비자가작성한값확인)){
  // 개발자가원하는정규식 ==소비자가작성한값확인 
  //true일 경우에만 실행
  }
 
  */
});

// ===============================================
/* 생성자 함수 */

// 1. 생성자 함수 선언 + 정의
// (중요) 생성자 함수의 이름은 무조건 "대문자로 시작"
// 한글과 소문자도 가능하긴 하나 대문자가 개발자간의 예의
// 자바에서는 대문자로 사용

/** 학생 객체 생성자 함수 **/
function Student(name, grade, ban, number, score) {
  // 속성
  // 전달 받은 값(parameter, 매개변수, 리터럴)을 현재 객체(this)에 속성으로 추가
  // 현재 속성에 = 값 추가
  // this.속성 = 값;
  this.name = name; // 이름
  this.grade = grade; // 학생
  this.ban = ban; // 반
  this.number = number; // 번호
  this.score = score; // 점수

  //기능(메서드)
  this.intro = function () {
    console.log(`
        ${this.grade} 학년, ${this.ban}반 ${this.number}번, ${this.name}이름 ${score}점 `);
  };
}

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
  const st1 = new Student("홍길동", 3, 5, 17, 80);
  console.log(st1);
  const st2 = new Student("박철수", 1, 2, 3, 90);
  console.log(st2);
});

/* JSON */
const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
  // JS 객체 생성
  const obj = { id: "test01", pw: "1234", number: 9999 };

  //1. JS 객체 ->JSON
  const str = JSON.stringify(obj);
  console.log("obj:", obj);
  console.log("str:", str);

  // JS 객체 생성
  // VM1368:1 Uncaught SyntaxError:
  //const str2 = `{ id: "test01", pw: "1234", number: 9999 }`;
  const str2 = `{ "id": "test01", "pw": "1234", "number": 9999 }`;

  //2. JSON -> JS 객체
  const obj2 = JSON.parse(str2);
  console.log("obj2:", obj2);
  console.log("str2:", str2);

  // 서버 데이터 비동기 요청
  /*
  fetch("API_URL")   : 웹 API로 HTTP 요청을 보냄, 비동기 처리 상태로 네트워크 요청이 완료되면 Response 객체 제공
  .then((response) => response.json()) : fetch에서 URL 주소로 접속해서 요청을 성공적으로 받으면 실행 JSON-> JS객체로 변환
  .then((result)=> result.response.데이터)
  result : 변환된 JS 객체 저장 내부에서 원하는 값에 접근해서 원하는 데이터만 출력
  ;      : 반드시 fetch. then .then 형식이 종료된 후 마지막에 붙이기 fetch; 안됨

  전체 흐름
  API 요청 -> 응답 받기 -> JSON 변환 -> 데이터 출력
  fetch       then1         then2       console.log
  */
  fetch(
    `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?serviceKey=fC0CJR9Lmwp3VfoLcND3XVFDW7FKGuTMECDT6TZD3aE7q4XUVL6PYscpePWfKNMwh0p6ZUt%2FmOm5xGbckoRGCQ%3D%3D&returnType=JSON&numOfRows=100&pageNo=1&searchDate=2024-01-22&InformCode=PM10`
  )
    .then((response) => response.json())
    .then((result) => console.log(result.response.header.resultMsg));
});
