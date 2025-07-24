function 예산확인하기() {
  const peopleCount = document.getElementById("peopleCount").value;
  if (peopleCount >= 4) {
    alert("인원이 많아서 단체 할인 받자! 🎉");
  } else {
    alert("4명 미만이면 소수 정예로 재밌게 보자! 😊");
  }
}
