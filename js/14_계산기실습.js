const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const calculateBtn = document.getElementById("calculateBtn");
const calcResult = document.getElementById("calc-result");

calculateBtn.addEventListener("click", function () {
  const number1 = Number(num1.value);
  const number2 = Number(num2.value);
  const op = operator.value;

  if (num1.value === "" || num2.value === "") {
    calcResult.textContent = "숫자를 입력하세요.";
    return;
  }

  switch (op) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      if (number2 === 0) {
        calcResult.textContent = "0으로 나눌 수 없습니다.";
        return;
      }
      result = number1 / number2;
      break;
  }
  calcResult.textContent = `${number1} ${op} ${number2} = ${result}`;
});
