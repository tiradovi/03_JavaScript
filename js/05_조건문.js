const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const inputAge = document.getElementById("inputAge");

function 체크1() {
  const val1 = Number(input1.value);
  if (val1 > 0) {
    alert("양수");
  }
  if (val1 <= 0) {
    alert("0 or 음수");
  }
}

function 체크2() {
  const val2 = Number(input2.value);
  if (val2 > 0) {
    alert("양수입니다.");
  } else {
    alert("음수입니다.");
  }
}
function 체크4() {
  const age = Number(inputAge.value);

  //  ||=or = 둘중하나만 참이어도 true
  //  &&=and= 둘다 참이어야 true

  if (age >= 0 && age <= 13) {
    alert("어린이");
  } else if (age >= 14 && age <= 19) {
    alert("청소년");
  } else if (age >= 19 && age <= 150) {
    alert("성인");
  } else if (age < 0 || age > 150) {
    alert("잘못 입력하셨습니다.");
  }
}
