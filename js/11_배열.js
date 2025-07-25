const check = document.getElementById("check");

function check1() {
  const arr1 = new Array();
  const arr2 = new Array(3);
  const arr3 = [];
  const arr4 = ["사과", "바나나", "딸기"];

  // 배열명.length : 배열길이 확인
  console.log("arr1.length:" + arr1.length);
  console.log("arr2.length:" + arr2.length);
  console.log("arr3.length:" + arr3.length);
  console.log("arr4.length:" + arr4.length);

  // 배열의 index(색인, 번호)
  /*
  -배열의 각칸을 구분하는 번호
  -0부터 시작
  -중간에 번호생략 불가능
  -마지막 index == 배열길이-1
  */
  console.log("arr4[0]:" + arr4[0]);
  console.log("arr4[1]:" + arr4[1]);
  console.log("arr4[2]:" + arr4[2]);
  console.log("arr4[3]:" + arr4[3]);

  //배열명[index] = 값; -> 해당 인덱스에 지정된 값 대입
  arr2[0] = 100;
  arr2[1] = "눈온다.";
  arr2[2] = true;

  console.log("arr2:" + arr2);

  // JS 배열 특징을 이용한 사용법
  // 1. 길이 제한이 없다. -> 값을 배열에 원하는 만큼 추가 기능
  arr1[0] = "가";
  arr1[1] = "나";
  arr1[2] = "다";
  // 2. 원하는 index에 값을 마음대로 추가 가능 ->건너뛴 index는 빈칸
  arr1[5] = "마";

  console.log("arr1:" + arr1);
}

check.addEventListener("click", function (e) {});
