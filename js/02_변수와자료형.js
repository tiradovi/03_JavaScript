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
