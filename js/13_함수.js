const input1 = document.getElementById("input1");
const btn1 = document.getElementById("btn1");
const btn3a = document.getElementById("btn3a");

//자주 사용하는 기능을 분리하여 기능명칭으로 사용 가능
function print(num, str) {
  alert(`${num}은/는 ${str}입니다.`);
}

btn1.addEventListener("click", function () {
  const value = input1.value;

  if (value.trim().length == 0) {
    console.log("숫자를 입력해주세요."); // 개발자용
    alert("숫자를 입력해주세요."); // 소비자용
    return; // 함수 종료 + 호출한 곳으로 돌아감
  }
  console.log("return 확인용"); // return 시 작동x

  let result;
  /*
  if (Number(value) == 0) {
    result = "0";
  } else if (Number(value) > 0) {
    result = "양수";
  } else {
    result = "음수";
  }
    */
  if (Number(value) == 0) result = "0";
  else if (Number(value) > 0) result = "양수";
  else result = "음수";

  print(value, result); //순서 중요
  print(result, value);
});

btn3a.addEventListener("click", function () {
  const numbers = [];
  numbers[0] = 30;
  numbers[2] = 10;
  console.log(numbers);
  //배열.push(값) : 배열의 마지막 요소로 값을 추가
  numbers.push(30);
  console.log(numbers);

  numbers.push(pow(2, 4)); //== numbers.push(16);
  console.log(numbers);
});
// pow : 전달받은 수를 x 제곱해서 반환하는 방식
function pow(num, x) {
  let = result = 1;
  for (let i = 0; i < x; i++) {
    result *= num;
  }
  return result;
}

const arrowList = document.querySelectorAll(".arrow");

//기본형태
arrowList[0].addEventListener("click", () => {
  alert("화살표 함수 기본 형태 실습");
});
//매개 변수가 1개인 경우 =() 생략 가능
arrowList[1].addEventListener("click", (e) => {
  e.target.style.backgroundColor = "hotpink";
});
//return 한줄만 작성된 경우
arrowList[2].addEventListener("click", (e) => {
  //alert((input1, input2) => input1 + input2);
  //화살표 함수 자체를 출력
  //더하기 계산식이 되는게 아닌 계산 방법을 보여주게 됨
  계산기능((a, b) => a + b);
  계산기능((a, b) => a - b);
  계산기능((a, b) => a * b);
});

//1탄 일반 함수로 선언
function 계산기능(익명함수기능) {
  const input1 = Number(prompt("첫 번째 값 "));
  const input2 = Number(prompt("두 번째 값 "));
  alert(익명함수기능(input1, input2));
}
function 확인하기(기능) {
  const obj = 기능("홍길동", 20);

  console.log("obj.name :", obj.name);
  console.log("obj.age :", obj.age);
}

arrowList[3].addEventListener("click", () => {
  // const obj = 기능("홍길동",20);
  확인하기((name, age) => {
    return {
      name: name,
      age: age,
    };
    //JS {Key: Value, Key:Value} 형태로,  값을 꺼내기 위한 키: 내부 값
  });
});
