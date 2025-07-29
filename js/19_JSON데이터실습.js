const fetchPost = document.getElementById("fetchPost");
const result = document.getElementById("result");
const content = document.getElementById("content");

// html button type은 submit 이 아닌 button 형태로 타입을 맞춰주는 것이 바람직함
fetchPost.addEventListener("click", function () {
  fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    .then((response) => response.json()) // json 형태로 변환, parse()와 json() 메서드 차이 확인
    .then((data) => {
      content.innerHTML = `<strong>userID:</strong>${data.userId}<br>
      <strong>id:</strong>${data.id}<br>
      <strong>title:</strong>${data.title}<br>
      <strong>body:</strong>${data.body}<br>`;
    });
});
