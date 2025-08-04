const idCheckPopup = document.getElementById("idCheck");
idCheckPopup.addEventListener("click", () => {
  const width = 450;
  const height = 200;
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;

  const options = ` 
  width =${width},
  height=${height},
  left=${left},
  top=${top},`;
  window.open("28_아이디중복확인.html", "_blank", options);
});
