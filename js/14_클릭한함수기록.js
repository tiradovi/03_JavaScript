const numbers = document.querySelectorAll(".number");
const result = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    if (result.textContent.length == 10) {
      alert("10글자까지만 가능");
      return;
    }
    result.textContent += e.target.textContent;
  });
}

resetBtn.addEventListener("click", function () {
  result.textContent = "";
});

//  numbers[i].addEventListener("click", function (){result.textContent += this.textContent;}
// this 사용가능 -> numbers[i]를 this로 대신 작성

//  numbers[i].addEventListener("click",  ()=>{result.textContent += numbers[i].textContent;}
// this 사용불가 -> addEventListener 앞의 요소를 명칭으로 작성

//  numbers[i].addEventListener("click", e=> {result.textContent += e.target.textContent; }
// this 사용불가 -> addEventListener 앞의 요소를 명칭으로 작성혹은 e.target으로 작성
