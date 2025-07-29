const menuResult = document.getElementById("menuResult");
const selectBtn = document.getElementById("selectBtn");
const menuInput = document.getElementById("menuInput");
const addBtn = document.getElementById("addBtn");
const validationMessage = document.getElementById("validationMessage");
const menuItems = document.getElementById("menuItems");
const menuCount = document.getElementById("menuCount");

const menus = [
  "곱창",
  "김밥",
  "제육볶음",
  "돈까스",
  "파스타",
  "샐러드",
  "라면",
  "삼겹살",
  "카레라이스",
  "불고기",
  "피자",
  "치킨",
  "쌀국수",
  "감자탕",
  "닭가슴살",
];

// 한글, 영어, 숫자 포함 정규식
const menuRegex = /^[가-힣a-zA-Z0-9\s]{2,20}$/;

// 메뉴 목록 화면에 표시
function displayMenus() {
  menuItems.innerHTML = "";
  /*
createElement = 태그 내부에 태그 요소 추가
forEach       = 각 배열의 요소에 대해 주어진 함수를 한번씩 실행하는 배열 메서드
ex) const 과일들 = ["사과","바나나","오렌지"];
내부에 존재하는 과일들을 한번씩 모두 출력하는 향상된 for문

과일들.forEach((과일)=>{과일 하나당 실행할 기능 작성})
*/

  menus.forEach((menu) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.textContent = menu;
    menuItems.appendChild(menuItem);
  });
  menuCount.textContent = menus.length;
}
displayMenus();

addBtn.addEventListener("click", function () {
  newMenu = menuInput.value.trim();
  if (newMenu.length == "") {
    validationMessage.textContent = "메뉴를 입력해주세요";
    validationMessage.className = "validation-message error";
    menuInput.focus();
    return;
  }

  if (menus.includes(newMenu)) {
    validationMessage.textContent = "이미 존재하는 메뉴입니다.";
    validationMessage.className = "validation-message error";
    menuInput.focus();
    return;
  }

  if (!menuRegex.test(newMenu)) {
    validationMessage.textContent = `정규식 미준수`;
    validationMessage.className = "validation-message error";
    menuInput.focus();
    return;
  }

  menus.push(newMenu);
  menuInput.value = "";
  validationMessage.textContent = `${newMenu}가 추가되었습니다.`;
  validationMessage.className = "validation-message success";
  displayMenus();
});

/*
className: HTML 요소 전체 class 속성을 문자열로 다루는 방식 한번에 교체할때 사용
classList: HTML 요소의 class 들을 개별적으로 관리, 하나씩 추가/제거 토글 기능
*/

menuInput.addEventListener("keyup", (e) => {
  if (e.type == "Enter") {
    addBtn.click();
  }
});

//메뉴 랜덤 선택
selectBtn.addEventListener("click", (e) => {
  if (menus.length == 0) {
    alert("선택할 메뉴가 없습니다.");
    return;
  } else {
    const selectedMenu = menus[Math.floor(Math.random() * menus.length)];
    menuResult.textContent = selectedMenu;
  }
});
