const lottoResult = document.getElementById("lottoResult");
const lottoBtn = document.getElementById("lottobutton");

lottoBtn.addEventListener("click", function () {
  let result = "";
  for (let i = 0; i < 6; i++) {
    const num = Math.ceil(Math.random() * 45);

    if (i === 0) {
      result = num;
    } else if (i === 5) {
      result += " + " + num;
    } else {
      result += ", " + num;
    }
  }
  lottoResult.innerText = result;
});
