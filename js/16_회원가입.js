// 소비자가 회원가입시 작성해야할 값을 작성했는지 체크
// 제대로 작성시마다 true로 변경, 기존 false
const checkList = {
  inputId: false,
  inputPw: false,
  inputPwCheck: false,
  inputName: false,
};

const signupForm = document.getElementById("signupForm");
const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const inputPwCheck = document.getElementById("inputPwCheck");
const inputName = document.getElementById("inputName");
const btn = document.getElementById("btn");
const idResult = document.getElementById("idResult");
const pwResult = document.getElementById("pwResult");
const pwCheckResult = document.getElementById("pwCheckResult");
const nameResult = document.getElementById("nameResult");

const regExpId = /^[A-Za-z0-9\-\_]{6,16}$/;
const regExpName = /^[가-힣]{2,15}$/;
const regExpPw = /^[A-Za-z\d!@#$%^&*]{8,20}$/;

inputId.addEventListener("input", (e) => {
  const valId = e.target.value;

  if (valId.trim().length == 0) {
    idResult.textContent = "영어, 숫자, -, _ 6~16글자 사이 작성";
    e.target.value = "";
    idResult.classList.remove("check", "error");
    checkList["inputId"] = false;
    return;
  }
  if (regExpId.test(valId)) {
    idResult.textContent = "유효한 아이디 형식입니다.";
    idResult.classList.add("check");
    idResult.classList.remove("error");
    checkList["inputId"] = true;
  } else {
    idResult.textContent = "유효하지 않은 아이디 형식입니다.";
    idResult.classList.add("error");
    idResult.classList.remove("check");
    checkList["inputId"] = false;
  }
});
inputPw.addEventListener("input", (e) => {
  const valPw = e.target.value;

  if (valPw.trim().length == 0) {
    pwResult.textContent =
      "영어 대/소문자 + 숫자 + 특수문자(!@#$%^&*)포함 8~20글자로 작성";
    e.target.value = "";
    pwResult.classList.remove("check", "error");
    checkList["inputPw"] = false;
    checkPw기능();
    return;
  }
  if (regExpPw.test(valPw)) {
    pwResult.textContent = "유효한 비밀번호 형식입니다.";
    pwResult.classList.add("check");
    pwResult.classList.remove("error");
    checkList["inputPw"] = true; //비밀번호 형식이 일치하면 check리스트의 pw = True
  } else {
    pwResult.textContent = "유효하지 않은 비밀번호 형식입니다.";
    pwResult.classList.add("error");
    pwResult.classList.remove("check");
    checkList["inputPw"] = false;
  }
  checkPw기능();
});
inputPwCheck.addEventListener("input", checkPw기능);
function checkPw기능() {
  const pwVal = inputPw.value.trim();
  const checkVal = inputPwCheck.value.trim();

  if (pwVal.length == 0 || checkVal.length == 0) {
    pwCheckResult.textContent = "비밀번호를 먼저 입력해주세요.";
    //  pwCheckResult.style.background="배경색" 2순위
    //  pwCheckResult 클래스 명칭 추가 제거 4순위
    pwCheckResult.classList.remove("check", "error");
    checkList["inputPwCheck"] = false;
    return;
  }
  if (pwVal == checkVal) {
    pwCheckResult.textContent = "비밀번호 일치";
    pwCheckResult.classList.add("check");
    pwCheckResult.classList.remove("error");
    checkList["inputPwCheck"] = true;
  } else {
    pwCheckResult.textContent = "비밀번호 불일치";
    pwCheckResult.classList.add("error");
    pwCheckResult.classList.remove("check");
    checkList["inputPwCheck"] = false;
  }
}
inputName.addEventListener("input", (e) => {
  const valName = e.target.value;

  if (valName.trim().length == 0) {
    nameResult.textContent = "한글 2~15자 (단모음, 단자음 제외)로 작성";
    e.target.value = "";
    nameResult.classList.remove("check", "error");
    checkList["inputName"] = false;
    return;
  }
  if (regExpName.test(valName)) {
    nameResult.textContent = "유효한 이름 형식입니다.";
    nameResult.classList.add("check");
    nameResult.classList.remove("error");
    checkList["inputName"] = true;
  } else {
    nameResult.textContent = "유효하지 않은 이름 형식입니다.";
    nameResult.classList.add("error");
    nameResult.classList.remove("check");
    checkList["inputName"] = false;
  }
});

btn.addEventListener("click", (e) => {
  if (checkList.inputId == false) {
    alert("아이디가 유효하지않습니다.");
    inputId.focus();
    return;
  }
  if (checkList.inputPw == false) {
    alert("비밀번호가 유효하지않습니다.");
    inputPw.focus();
    return;
  }
  if (checkList.inputPwCheck == false) {
    alert("비밀번호 확인이 유효하지않습니다.");
    inputPwCheck.focus();
    return;
  }
  if (checkList.inputName == false) {
    alert("이름이 유효하지않습니다.");
    inputName.focus();
    return;
  }
  // 회원가입 버튼을 클릭했을 때 성별 체크했는지 확인하도록 gender위치 ㅗ쩡
  const gender = document.querySelector("[name='gender']:checked");

  if (gender == null) {
    alert("성별을 선택해주세요.");
    return;
  }
  alert("회원가입완료");
  signupForm.submit(); //회원가입 폼 제출 완료 기능 설정
});
