// const $ = document.querySelector();
// const $$ = document.querySelectorAll();
$(function () {
  $("#signup-btn").click(signFn);
});

function signFn() {
  const username = $("#username").val();
  const useremail = $("#useremail").val();

  // user는 문자열이 아니라 배열, 리스트 형태
  const user = {
    // local에 저장할 변수 이름 : js로 사용자가 작성한 html input 안에 들어있는 value = 값을 갖고 있는 변수이름
    name: username,
    email: useremail,
  };

  // 컴퓨터 웹 사이트에 사용자 정보를 저장할 때 문자열로 변환 해서 저장
  localStorage.setItem("userInfo", JSON.stringify(user));

  //alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.")
  alert(
    "회원가입이 완료되었습니다. 로그인이 된 상태로 마이 페이지로 이동합니다."
  );

  // session 스토리지에로그인 정보 저장
  sessionStorage.setItem("loggedInUser", JSON.stringify(user));

  // 로그인이 완료되면 마이 페이지로 이동
  window.location.href = "31_마이페이지.html";
}
