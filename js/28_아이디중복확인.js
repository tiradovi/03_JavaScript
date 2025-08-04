const send = document.getElementById("send");
const childInput = document.getElementById("childInput");

send.addEventListener("click", () => {
  opener.document.getElementById("inputId").value = childInput.value;
  window.close();
});
