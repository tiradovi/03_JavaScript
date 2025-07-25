const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const passwordResult = document.getElementById("password-result");

passwordConfirm.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    if (password.value.trim() || passwordConfirm.value.trim()) {
      passwordResult.textContent = `비밀번호를 입력하세요`;
    } else if (password.value == passwordConfirm.value) {
      passwordResult.textContent = `비밀번호가 일치합니다!
                                 원본비밀번호 : ${password.value}                             
                                 확인비밀번호 :${passwordConfirm.value}                           
                                 원본비밀번호 길이 :${password.value.length}
                                 확인비밀번호 길이 :${passwordConfirm.value.length}
                                 `;
    } else {
      passwordResult.textContent = `
                                 원본비밀번호 : ${password.value}                             
                                 확인비밀번호 :${passwordConfirm.value}
                                 `;
    }
  }
});
