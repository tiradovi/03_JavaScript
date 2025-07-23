const cv1 = document.getElementById("comValue1");
const cv2 = document.getElementById("comValue2");

function 비교기능1번() {
  const v1 = cv1.value;
  const v2 = cv2.value;
  const result1 = document.getElementById("result1");

  result1.innerText = v1 == v2;
  /*
==(equal) : 두 자리 이상의 값이 다른지 같은지 비교
            오직 값만 비교

===(strict equal) : 두 자리 이상의 값들이 값과 자료형 모두 일치하는지 비교
                    형 변환 X, 엄격하게 일치하는지 비교

ex) '5' ==  5 [true]
ex) '5' === 5 [false]
*/
}
