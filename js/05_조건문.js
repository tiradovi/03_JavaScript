const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

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
