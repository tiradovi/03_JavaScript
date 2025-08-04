const open24Popup = document.getElementById("open_24popUp");
open24Popup.addEventListener("click", () => {
  let options = [];
  options.push("width=400");
  options.push("height=400");

  // 팝업창을 가운데로 위치시키는 방법
  const screen가로 = window.screen.width;
  const screen세로 = window.screen.height;

  const left = (screen가로 - 400) / 2;
  const top = (screen세로 - 400) / 2;

  /* 팝업창을 띄우는 위치 지정 */
  options.push(`left=${left}`);
  options.push(`top=${top}`);
  // 배열이름.toString() : "요소,요소,요소" 처리로
  // 배열 내 요소를 ,를 구분자로 하여 하나의 문자열로 변환
  window.open("24_팝업창.html", "_blank", options.toString());
});
const open25stopWatch = document.getElementById("open_25stopWatch");
open25stopWatch.addEventListener("click", () => {
  let options = [];
  options.push("width=400");
  options.push("height=400");

  // 팝업창을 가운데로 위치시키는 방법
  const screen가로 = window.screen.width;
  const screen세로 = window.screen.height;

  const left = (screen가로 - 400) / 2;
  const top = (screen세로 - 400) / 2;

  /* 팝업창을 띄우는 위치 지정 */
  options.push(`left=${left}`);
  options.push(`top=${top}`);
  // 배열이름.toString() : "요소,요소,요소" 처리로
  // 배열 내 요소를 ,를 구분자로 하여 하나의 문자열로 변환
  window.open("25_스톱워치.html", "_blank", options.toString());
});
