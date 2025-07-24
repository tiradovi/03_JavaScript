function readValue() {
  const input = document.getElementById("user-input");
  const msg = input.value;

  if (msg.trim() === "") {
    // trim() 메세지에서 공백제거
    return; //메세지 보내기 취소 후 돌려보내기
    //function readValue 기능 중지
  }
  const chatBg = document.getElementById("chatting-bg");
  // <p> 태그를 HTML 내부에 추가하겠다.
  const newMsg = document.createElement("p");
  // p태그 내부에 <span>으로 감싼 클라이언트가 작성한 msg를 추가
  newMsg.innerHTML = `<span>${msg}</span>`;
  // p태그를 chatting-bg 밑에 추가
  chatBg.appendChild(newMsg);
  input.value = "";
}
