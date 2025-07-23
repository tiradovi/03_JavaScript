/* console.log(값) */
// 브라우저 콘솔에 괄호() 내부의 값을 기록 출력

console.log(1234);
console.log("문자열은 양쪽 쌍따옴표를 작성해야한다.");

/* 
console.log()와 alert()모두 개발자가 값의 문제를 확인하기 위해 작성하는 도구

alert() = 소비자 알림 , 개발자에게 값에 대한 표기 확인
*/

//console.log("JS는 홑따옴표도 문자열로 취급한다.");
//alert("5678")

//------------------------------------------------------------------
/* 변수 선언 */
// 메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것
// 작성법 : 변수종류 변수명

var number1;

/* 변수에 값 대입 */
// 작성된 변수에 값을 대입하는 것
// 작성법 : 변수명 = 값;

number1 = 10;
number1 = 20;

let number2 = 20;
number2 = 30;

console.log(number1);
console.log(number2);

const number3 = 40;
//number3 = 50; 값 변경 불가

console.log(number3);

// var의 경우 함수(행동, 기능) 내부에 작성시
// {} 관계 없이 어디서든 변수이름 호출 가능

function var확인기능() {
  if (true) {
    var abc = 10; // 이런 식의 선언은 if 중괄호 내부에서만 abc를 사용하고자
    //하는 의도
    abc = 45;
  }
  abc = 10; // var abc는 {} 안에서 선언한 내용이 함수내에서도 사용가능
}
abc = 20;

function let확인기능() {
  if (true) {
    let def = 20;
    def = 30;
  }
  def = 10; // let def는 {} 안에서 선언한 내용은 {}밖에서 사용불가
}
def = 20;

function const확인기능() {
  if (true) {
    const ghi = 30;
    ghi = 40;  // 여기서 문제발생 실행중지

    let xyz = 10;
    xyz = 20;
  }
  ghi = 10;
}
ghi = 20;
