/*
      for([1]초기식; [조건식]; [4]증감식){
            [3]조건식이 true인 경우 반복 수행할 코드;

        }
   */

function check() {
  for (let num = 1; num <= 5; num++) {
    console.log(num);
  }
}
function check1() {
  for (let num = 1; num <= 10; num++) {
    console.log(num);
  }
}
function check2() {
  for (let num = 5; num <= 10; num++) {
    console.log(num);
  }
}
function check3() {
  let sum = 0;
  for (let num = 1; num <= 10; num++) {
    sum += num;
  }
  console.log(sum);
}
