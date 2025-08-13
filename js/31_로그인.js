$(function () {
  $("#login-btn").click(loginFn);
});

function loginFn() {
  // 1. localStorage에 저장된 회원가입 정보 가져오기
  const storedUserJSON = localStorage.getItem("userInfo");

  // 회원가입 정보가 존재하지 않는 경우 함수 종료
  if (!storedUserJSON) {
    alert("가입된 사용자 정보가 없습니다. 회원가입을 먼저 해주세요");
    return;
  }

  // 2. 입력한 이메일 값 html에서 js로 가져오기
  const userEmail = $("#useremail").val();
  if (!userEmail) {
    alert("이메일을 입력해주세요.");
    return;
  }

  // 3. 저장된 정보(JSON 문자열)을 객체로 변환
  const storedUser = JSON.parse(storedUserJSON);

  // 4. 입력한 이메일과 저장된 이메일을 비교하고
  // 추후에는 DB에 저장된 이메일값과 사용자가 서버로 보낸 이메일값
  // 일치여부를 백엔드에서 처리후 프론트엔드로 전달
  if (userEmail === storedUser.email) {
    // 5. 소비자가 작성한 이메일 값과 저장된 이메일이 일치하다면
    alert("로그인 성공! 마이페이지로 이동합니다.");

    // 세션에 저장할 객체에 현재 로그인시간(타임스탬프 추가)
    const userSession = {
      name: storedUser.name,
      email: storedUser.email,
      loginTime: new Date().getTime(),
    };

    // session에 자바스크립트에서 작성한 로그인 정보를 저장
    sessionStorage.setItem("loggedInUser", JSON.stringify(userSession));

    // 마이페이지로 이동하여 현재시간 확인
    window.location.href = "31_마이페이지.html";
  }else{
    // 6. 로그인 실패시 
    alert("이메일 정보가 일치하지 않습니다.")
  }
}
