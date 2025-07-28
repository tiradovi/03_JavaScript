const input1 = document.getElementById("input1");
const btn1 = document.getElementById("btn1");

//자주 사용하는 기능을 분리하여 기능명칭으로 사용 가능
function print(num, str) {
  alert(`${num}은/는 ${str}입니다.`);
}

btn1.addEventListener("click", function () {
  const value = input1.value;

  if (value.trim().length == 0) {
    console.log("숫자를 입력해주세요."); // 개발자용
    alert("숫자를 입력해주세요."); // 소비자용
    return; // 함수 종료 + 호출한 곳으로 돌아감
  }
  console.log("return 확인용"); // return 시 작동x

  let result;
  /*
  if (Number(value) == 0) {
    result = "0";
  } else if (Number(value) > 0) {
    result = "양수";
  } else {
    result = "음수";
  }
    */
  if (Number(value) == 0) result = "0";
  else if (Number(value) > 0) result = "양수";
  else result = "음수";

  print(value, result); //순서 중요
  print(result, value);
});
