const randomCat = document.getElementById("randomCat");
const result = document.getElementById("result");
const content = document.getElementById("content");

randomCat.addEventListener("click", () => {
  fetch(`https://api.thecatapi.com/v1/images/search`)
    .then((response) => response.json())
    .then((data) => {
      console.log("data :", data);
      /* 데이터가 중괄호가 아닌 [] 형태인 경우 대부분 배열, 리스트이므로
      활용시 data[0] 같은 인덱스 사용 */
      content.innerHTML = `
      id : ${data[0].id} <br>
      URL : ${data[0].url} <br>
      <img src="${data[0].url}" alt="고양이" class="cat-image" >
      
      
      `;
    });
});
