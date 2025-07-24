function check1(btn) {
  //매개 변수: 함수 호출 시() 내부에 작성된 값을 전달받아 저장
  //btn === 클릭한 버튼(this)
  console.log(btn);

  //버튼의 배경색을 얻어와서 저장
  const bgColor = btn.style.backgroundColor;

  //처음에는 inline-style로 지정된 배경색이 없어서 ""로 표기
  //    <button onclick="check1(this)" style="background-color: yellow">
  //    배경색상으로 yellow를 넣었기 때문에 yellow가 출력됨
  console.log(bgColor);

  // 버튼이 클릭될 때 마다 pink <-> 변경

  if (bgColor == "yellow") {
    bgColor = btn.style.backgroundColor = "pink";
  } else {
    bgColor = btn.style.backgroundColor = "yellow";
  }
}

let count = 0;

const test2 = document.getElementById("test2");
/* 표준 이벤트 모델 작성법 */
// 요소.addEventListener("이벤트 종류", 이벤트 핸들러(함수))
test2.addEventListener("click", function () {
  // 투명도 1 (불투명)-> 0(투명) 0.1씩 투명도 줄이기
  let 현재 = test2.style.opacity; //현재 test2의 투명도 확인

  // 맨 처음 투명도 ''일 경우  1 대입

  if (현재 == "") {
    test2.style.opacity = 1;
    현재 = 1;
  }

  //투명도 0.1감소
  test2.style.opacity = 현재 - 0.1;
  if (test2.style.opacity < 0) {
    test2.style.opacity = 1;
  }
  count++;
  this.innerHTML = count;
});

/* 나중에 추가 기능이 필요한 경우 아이디 명칭으로 기능 추가 가능 */
