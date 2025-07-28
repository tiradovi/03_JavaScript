const inputName = document.getElementById("inputName");
const nameResult = document.getElementById("nameResult");

inputName.addEventListener("input", (e) => {
  const val = e.target.value;
  if (val.trim().length == 0) {
    nameResult.textContent = "";
    return;
  }
  //정규식 객체 생성
  const regExp = /^[가-힇]{2,5}$/; //한글 2~5글자
  if (regExp.test(val)) {
    //소비자가 작성한 값이 정규식과 일치하면
    nameResult.textContent = "유효한 이름형식입니다.";
    nameResult.style.color = "green";
  } else {
    nameResult.textContent = "유효하지 않은 이름형식입니다.";
    nameResult.style.color = "red";
  }
});

const inputPhone = document.getElementById("inputPhone");
const phoneResult = document.getElementById("phoneResult");

inputPhone.addEventListener("input", (e) => {
  const val = e.target.value;
  const regExp = /^01[01679]-\d{3,4}-\d{4}$/;
  if (regExp.test(val)) {
    phoneResult.textContent = "유효한 번호형식입니다.";
    phoneResult.classList.add("check");
    phoneResult.classList.remove("uncheck");
  } else {
    phoneResult.textContent = "유효하지 않은 번호형식입니다.";
    phoneResult.classList.add("uncheck");
    phoneResult.classList.remove("check");
  }
});
