const colorBox = document.querySelector("#colorBox");
const colors = ["red", "blue", "green", "yellow"];
let colorIndex = 0;

colorBox.addEventListener("click", function () {
  this.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

const sizeBox = document.querySelector("#sizeBox");
const currentSize = document.querySelector("#currentSize");
let val = 100;

sizeBox.addEventListener("dblclick", function () {
  if (val == 100) {
    val = 150;
  } else if (val == 150) {
    val = 200;
  } else if (val >= 200) {
    val = 100;
  } else {
    val = 200;
  }

  sizeBox.style.width = val + "px";
  sizeBox.style.height = val + "px";
  currentSize.innerText = val + "px";
});

const textInput = document.querySelector("#textInput");
const display = document.querySelector("#display");

textInput.addEventListener("input", function () {
  display.textContent = `${textInput.value} -
                        글자수 : ${textInput.value.length} `;
  // 입력된 텍스트와 길이 가져오기
  // display에 "텍스트" - 글자 수: 숫자 형태로 표시
});

textInput.addEventListener("keyup", function (e) {
  if (e.key == "Escape") {
    textInput.value = "";
    display.textContent = "글자 수: 0";
  }
});



const toggleImage = document.querySelector("#toggleImage");
const hideBtn = document.querySelector("#hideBtn");
const showBtn = document.querySelector("#showBtn");


toggleImage.addEventListener("mouseenter", function() {
    // 숨김 버튼 보이기
});

toggleImage.addEventListener("mouseleave", function() {
    // 숨김 버튼 숨기기
});

hideBtn.addEventListener("click", function() {
    // 이미지 박스 숨기기, 숨김 버튼 숨기기, 다시보기 버튼 보이기
});

showBtn.addEventListener("click", function() {
    // 이미지 박스 보이기, 다시보기 버튼 숨기기
});

